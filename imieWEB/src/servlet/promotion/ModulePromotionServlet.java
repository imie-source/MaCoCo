package servlet.promotion;

import java.util.ArrayList;

import javax.ejb.EJB;
import javax.ejb.Stateless;
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

import promotion.ModulePromotionServiceLocal;
import entities.promotion.CoursPromotion;
import entities.promotion.ModulePromotion;

@Stateless
@Path("/modulepromotion")
@Produces(MediaType.APPLICATION_JSON)
@Consumes({MediaType.APPLICATION_JSON})
public class ModulePromotionServlet 
{
	@EJB 
	ModulePromotionServiceLocal modulePromotionService;

	
	@GET()
	@Path("/{id}")
	public Response get(@PathParam("id") Integer id)
	{
		ModulePromotion module = modulePromotionService.findById(id);

		module.setCoursPromotions(new ArrayList<CoursPromotion>());
		
		module.getUniteFormationPromotion().setModulePromotions(null);
		module.getUniteFormationPromotion().setPromotion(null);
		
		ArrayList<ModulePromotion> response = new ArrayList<ModulePromotion>();
		response.add(module);
	    return Response.ok(response).build();
	}

	
	@POST()
	public Response add(ModulePromotion module) 
	{
		modulePromotionService.create(module);
		ArrayList<ModulePromotion> response = new ArrayList<ModulePromotion>();
		response.add(module);
	    return Response.ok(response).build();
	}
	
	
	@PUT
	@Path("/{string}")
	public Response update(ModulePromotion module) 
	{
		modulePromotionService.update(module);
		ArrayList<ModulePromotion> response = new ArrayList<ModulePromotion>();
		response.add(module);
	    return Response.ok(response).build();
	}
	
	
	@DELETE
	@Path("/{string}")
	public Response remove(ModulePromotion module)
	{
		modulePromotionService.delete(module);
		return Response.ok().build();
	}	
}
