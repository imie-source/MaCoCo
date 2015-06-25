package servlet.promotion;

import java.util.ArrayList;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import promotion.PromotionServiceLocal;
import promotion.UniteFormationPromotionServiceLocal;
import entities.promotion.ModulePromotion;
import entities.promotion.Promotion;
import entities.promotion.UniteFormationPromotion;

@Stateless
@Path("/uniteformationpromotion")
@Produces(MediaType.APPLICATION_JSON)
@Consumes({MediaType.APPLICATION_JSON})
public class UniteFormationPromotionServlet 
{
	@EJB 
	UniteFormationPromotionServiceLocal uniteFormationPromotionService;
	@EJB
	PromotionServiceLocal promotionService;
	
	@GET()
	@Path("/{id}")
	public Response get(@PathParam("id") Integer id)
	{
		UniteFormationPromotion uf = uniteFormationPromotionService.findById(id);
		
		uf.setModulePromotions(new ArrayList<ModulePromotion>());
		
		uf.getPromotion().setUniteFormationPromotions(null);
		uf.getPromotion().setPeriodes(null);
		
		ArrayList<UniteFormationPromotion> response = new ArrayList<UniteFormationPromotion>();
		response.add(uf);
	    return Response.ok(response).build();
	}
	@GET()
	@Path("promotion/{id}")
	public Response getUfByPromotion(@PathParam("id") Integer id)
	{
		Promotion promotion = promotionService.findById(id);
		ArrayList<UniteFormationPromotion> response = new ArrayList<UniteFormationPromotion>();
		for (UniteFormationPromotion uf : promotion.getUniteFormationPromotions()) {

			uf.setModulePromotions(null);
			
			uf.getPromotion().setUniteFormationPromotions(null);
			uf.getPromotion().setPeriodes(null);
			uf.getPromotion().setCursus(null);
			
			
			response.add(uf);
		 	
		}
		   return Response.ok(response).build();
	}

	
	@POST()
	public Response add(UniteFormationPromotion uf) 
	{	
		uniteFormationPromotionService.create(uf);
		ArrayList<UniteFormationPromotion> response = new ArrayList<UniteFormationPromotion>();
		response.add(uf);
	    return Response.ok(response).build();
	}
	
	@PUT
	@Path("/{string}")
	public Response update(UniteFormationPromotion uf) 
	{
		uniteFormationPromotionService.update(uf);
		ArrayList<UniteFormationPromotion> response = new ArrayList<UniteFormationPromotion>();
		response.add(uf);
		return Response.ok().build();
	}
	
	@DELETE
	@Path("/{string}")
	public Response remove(UniteFormationPromotion uf)
	{
		uniteFormationPromotionService.delete(uf);
		return Response.ok().build();
	}	
	
}
