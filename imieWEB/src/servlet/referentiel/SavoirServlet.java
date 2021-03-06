package servlet.referentiel;

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

import promotion.CoursPromotionServiceLocal;
import referentiel.CompetenceProServiceLocal;
import referentiel.SavoirServiceLocal;
import cursus.CoursCursusServiceLocal;
import entities.cursus.CoursCursus;
import entities.promotion.CoursPromotion;
import entities.referentiel.CompetencePro;
import entities.referentiel.Savoir;

@Stateless
@Path("/savoir")
@Produces(MediaType.APPLICATION_JSON)
@Consumes({MediaType.APPLICATION_JSON})
public class SavoirServlet 
{
	@EJB 
	SavoirServiceLocal savoirService;
	@EJB 
	CompetenceProServiceLocal competenceProService;
	@EJB
	CoursCursusServiceLocal coursCursusService;
	@EJB
	CoursPromotionServiceLocal coursPromotionService;
	
	
	@GET()
	@Path("/{id}")
	public Response getSavoir(@PathParam("id") Integer id ) 
	{
		Savoir savoir = savoirService.findById(Integer.valueOf(id));
		
		savoir.getCompetencePro().setSavoirs(null);
		savoir.getCompetencePro().setActiviteType(null);
		
		for (CoursCursus coursCursus : savoir.getCoursCursuses()) 
		{
			coursCursus.setSavoirs(null);
			coursCursus.setModuleCursus(null);
			coursCursus.setEnseignements(null);
		}
		
		for (CoursPromotion coursPromotion : savoir.getCoursPromotions()) 
		{
			coursPromotion.setSavoirs(null);
			coursPromotion.setModulePromotion(null);
			coursPromotion.setEnseignements(null);
		}
		
	    List<Savoir> result = new ArrayList<Savoir>();
	    result.add(savoir);
	    return Response.ok(result).build();
	}
	
	@GET()
	@Path("competencepro/{id}")
	public Response getSavoirsByCompetencePro(@PathParam("id") Integer id ) 
	{
		CompetencePro competencePro = competenceProService.findById(Integer.valueOf(id));
			
		    List<Savoir> result = new ArrayList<Savoir>();
		    
		    for (Savoir savoir : competencePro.getSavoirs()) {

				savoir.getCompetencePro().setSavoirs(null);
				savoir.getCompetencePro().setActiviteType(null);
				savoir.setCoursCursuses(null);
				savoir.setCoursPromotions(null);
					
		    	result.add(savoir);	
			}
		    
		    return Response.ok(result).build();
	}
	
	@GET()
	@Path("courscursus/{id}")
	public Response getSavoirsByCoursCursus(@PathParam("id") Integer id ) 
	{
		CoursCursus cours = coursCursusService.findById(Integer.valueOf(id));
			
		    List<Savoir> result = new ArrayList<Savoir>();
		    
		    for (Savoir savoir : cours.getSavoirs()) {

				savoir.getCompetencePro().setSavoirs(null);
				savoir.getCompetencePro().setActiviteType(null);
				savoir.setCoursCursuses(null);
				savoir.setCoursPromotions(null);
					
		    	result.add(savoir);	
			}
		    
		    return Response.ok(result).build();
	}

	@GET()
	@Path("courspromotion/{id}")
	public Response getSavoirsByCoursPromotion(@PathParam("id") Integer id ) 
	{
		CoursPromotion cours = coursPromotionService.findById(Integer.valueOf(id));
			
		    List<Savoir> result = new ArrayList<Savoir>();
		    
		    for (Savoir savoir : cours.getSavoirs()) {

				savoir.getCompetencePro().setSavoirs(null);
				savoir.getCompetencePro().setActiviteType(null);
				savoir.setCoursCursuses(null);
				savoir.setCoursPromotions(null);
					
		    	result.add(savoir);	
			}
		    
		    return Response.ok(result).build();
	}
	
	@POST()
	public Response add(Savoir savoir) 
	{
		savoirService.create(savoir);
	    return Response.ok().build();
	}
	
	@PUT
	@Path("/{string}")
	public Response update(Savoir savoir) 
	{
		savoirService.update(savoir);
		
	    List<Savoir> result = new ArrayList<Savoir>();
	    result.add(savoir);
	    return Response.ok(result).build();
	}
	
	/*@DELETE
	@Path("/{id}")
	public Response remove(@PathParam("id") Integer id)
	{
		savoirService.delete(id);
		return Response.ok().build();
	}*/
	@DELETE
	@Path("/{string}")
	public Response remove(Savoir savoir)
	{
		savoirService.delete(savoir);
		return Response.ok().build();
	}
}