
package servlet.promotion;

import java.util.ArrayList;
import java.util.List;

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

import promotion.PromotionServiceLocal;
import entities.cursus.Cursus;
import entities.promotion.CoursPromotion;
import entities.promotion.ModulePromotion;
import entities.promotion.PeriodePromotion;
import entities.promotion.Promotion;
import entities.promotion.UniteFormationPromotion;
import entities.referentiel.Savoir;

@Stateless
@Path("/promotion")
@Produces(MediaType.APPLICATION_JSON)
@Consumes({MediaType.APPLICATION_JSON})
public class PromotionServlet 
{

	@EJB 
	PromotionServiceLocal promotionService;


	// Le path root correspond à la demande de tous les promotion
	@GET()
	@Path("/root")
	public Response getPromotionRoot() 
	{
		return getAllPromotion();
	}


	/**
	 * Retourne les promotion sans leurs descendants
	 * @return
	 */
	@GET()
	public Response getAllPromotion() 
	{
		List<Promotion> listePromotion = promotionService.findAllPromotion();
		for (Promotion promotion : listePromotion) 
		{
			promotion.setUniteFormationPromotions(new ArrayList<UniteFormationPromotion>());
			
			for (PeriodePromotion periode : promotion.getPeriodes())
			{
				periode.setPromotion(null);
			}
			
			
			for (UniteFormationPromotion uf : promotion.getUniteFormationPromotions()) 
			{
				uf.setPromotion(null);
				uf.setModulePromotions(null);
			}
			
		}

		return Response.ok(listePromotion).build();
	}




	@GET()
	@Path("/{id}")
	public Response getPromotion(@PathParam("id") Integer id ) 
	{

		Promotion promotion = promotionService.findById(Integer.valueOf(id));

		for (PeriodePromotion periode : promotion.getPeriodes())
		{
			periode.setPromotion(null);
		}
		
		Cursus cursus = promotion.getCursus();
		cursus.setPeriodes(null);
		cursus.setPromotions(null);
		cursus.setUniteFormationCursuses(null);
		
		for (UniteFormationPromotion uf : promotion.getUniteFormationPromotions()) 
		{
			uf.setPromotion(null);
			
			for (ModulePromotion module : uf.getModulePromotions()) 
			{

				module.setUniteFormationPromotion(null);

				for (CoursPromotion cours : module.getCoursPromotions()) 
				{
					cours.setModulePromotion(null);
					for (Savoir savoir : cours.getSavoirs()) 
					{
						savoir.setCompetencePro(null);
						savoir.setCoursCursuses(null);
					}
				}
			}
		}
		
		ArrayList<Promotion> reponse = new ArrayList<Promotion>();
		reponse.add(promotion);
		return Response.ok(reponse).build();
	}

	@POST()
	public Response add(Promotion promotion) 
	{	
		promotionService.create(promotion);
		ArrayList<Promotion> response = new ArrayList<Promotion>();
		response.add(promotion);
	    return Response.ok(response).build();
	}

	@PUT
	@Path("/{string}")
	public Response update(Promotion promotion) 
	{
		promotionService.update(promotion);
		ArrayList<Promotion> response = new ArrayList<Promotion>();
		response.add(promotion);
		return Response.ok(response).build();
	}

	@DELETE
	@Path("/{string}")
	public Response delete(Promotion promotion) 
	{
		promotionService.delete(promotion);
		ArrayList<Promotion> response = new ArrayList<Promotion>();
		response.add(promotion);
		return Response.ok(response).build();
	}



}
