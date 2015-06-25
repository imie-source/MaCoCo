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

import promotion.CoursPromotionServiceLocal;
import promotion.ModulePromotionServiceLocal;
import enseignement.EnseignementServiceLocal;
import entities.enseignement.Enseignement;
import entities.promotion.CoursPromotion;
import entities.promotion.ModulePromotion;
import entities.referentiel.Savoir;


@Stateless
@Path("/courspromotion")
@Produces(MediaType.APPLICATION_JSON)
@Consumes({MediaType.APPLICATION_JSON})
public class CoursPromotionServlet 
{
	@EJB 
	CoursPromotionServiceLocal coursPromotionService;
	@EJB 
	EnseignementServiceLocal enseignementService;
	@EJB 
	ModulePromotionServiceLocal modulePromotionService;
	
	@GET()
	@Path("/{id}")
	public Response get(@PathParam("id") Integer id)
	{
		CoursPromotion cours = coursPromotionService.findById(id);
		
		cours.getModulePromotion().setCoursPromotions(null);
		cours.getModulePromotion().setUniteFormationPromotion(null);

		for (Savoir savoir : cours.getSavoirs()) 
		{
			savoir.setCoursCursuses(null);
			savoir.setCoursPromotions(null);
			savoir.setCompetencePro(null);
		}
		for (Enseignement enseignement : cours.getEnseignements()) {
			enseignement.setCoursCursuses(null);
			enseignement.setCoursPromotions(null);
			enseignement.setPrerequis(null);
		}
		ArrayList<CoursPromotion> response = new ArrayList<CoursPromotion>();
		response.add(cours);
	    return Response.ok(response).build();
	}
	
	@GET()
	@Path("/module/{id}")
	public Response getCoursByModule(@PathParam("id") Integer id)
	{
		ModulePromotion module = modulePromotionService.findById(id);
		ArrayList<CoursPromotion> response = new ArrayList<CoursPromotion>();
		for (CoursPromotion cours : module.getCoursPromotions()) {

			cours.getModulePromotion().setCoursPromotions(null);
			cours.getModulePromotion().setUniteFormationPromotion(null);
			cours.setSavoirs(null);
			cours.setEnseignements(null);
			response.add(cours);
	
		}
		return Response.ok(response).build();
	}
	
	@POST()
	public Response add(CoursPromotion cours) 
	{
		coursPromotionService.create(cours);
		ArrayList<CoursPromotion> response = new ArrayList<CoursPromotion>();
		response.add(cours);
	    return Response.ok(response).build();
	}
	
	@PUT
	@Path("/{string}")
	public Response update(CoursPromotion cours) 
	{
		coursPromotionService.update(cours);
		ArrayList<CoursPromotion> response = new ArrayList<CoursPromotion>();
		response.add(cours);
		return Response.ok(response).build();
	}
	
	@DELETE
	@Path("/{string}")
	public Response remove(CoursPromotion cours)
	{
		coursPromotionService.delete(cours);
		return Response.ok().build();
	}	
	
	
	@GET()
	@Path("/promotion/{id}/{string}")
	public Response getAllByPromotion(@PathParam("id") Integer id)
	{
		ArrayList<CoursPromotion> result = (ArrayList<CoursPromotion>) coursPromotionService.findAllByPromotion(id);
		
		for (CoursPromotion coursPromotion : result) 
		{
			coursPromotion.getModulePromotion().setCoursPromotions(null);
			coursPromotion.getModulePromotion().setUniteFormationPromotion(null);
			coursPromotion.setSavoirs(null);
			coursPromotion.setEnseignements(null);
		}
		
	    return Response.ok(result).build();
	}	
	
	@GET()
	@Path("/fichecours/{id}")
	public Response getByIdForFC(@PathParam("id") Integer id)
	{
		CoursPromotion cours = coursPromotionService.findById(id);
		cours.getModulePromotion().setCoursPromotions(null);
		cours.getModulePromotion().getUniteFormationPromotion().setModulePromotions(null);
		cours.getModulePromotion().getUniteFormationPromotion().getPromotion().setPeriodes(null);
		cours.getModulePromotion().getUniteFormationPromotion().getPromotion().setUniteFormationPromotions(null);
		cours.getModulePromotion().getUniteFormationPromotion().getPromotion().getCursus().setPeriodes(null);;
		cours.getModulePromotion().getUniteFormationPromotion().getPromotion().getCursus().setPromotions(null);
		cours.getModulePromotion().getUniteFormationPromotion().getPromotion().getCursus().setUniteFormationCursuses(null);
		for (Savoir savoir : cours.getSavoirs()) 
		{
			savoir.setCoursCursuses(null);
			savoir.setCoursPromotions(null);
			savoir.setCompetencePro(null);
		}
		
		for (Enseignement enseignement : cours.getEnseignements()) {
			Enseignement ent = enseignementService.findById(enseignement.getEntId());
			
			enseignement.setPrerequis(ent.getPrerequis());
			enseignement.setCoursCursuses(null);
			enseignement.setCoursPromotions(null);
			
			for (Enseignement prerequis : enseignement.getPrerequis()) {
				Enseignement ent2 = enseignementService.findById(prerequis.getEntId());
				prerequis.setCoursCursuses(ent2.getCoursCursuses());
				prerequis.setCoursPromotions(null);
				prerequis.setPrerequis(null);
		
				for (CoursPromotion coursPrerequis : prerequis.getCoursPromotions()){
					coursPrerequis.setEnseignements(null);
					coursPrerequis.setSavoirs(null);
					coursPrerequis.setModulePromotion(null);
				}
			}	
		}
		ArrayList<CoursPromotion> response = new ArrayList<CoursPromotion>();
		response.add(cours);
	    return Response.ok(response).build();
	}
	
}
