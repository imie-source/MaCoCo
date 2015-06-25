package servlet.enseignement;
import java.util.ArrayList;
import java.util.List;

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

import promotion.CoursPromotionServiceLocal;

import com.sun.mail.imap.protocol.Status;

import cursus.CoursCursusServiceLocal;
import enseignement.EnseignementServiceLocal;
import entities.cursus.CoursCursus;
import entities.enseignement.Enseignement;
import entities.promotion.CoursPromotion;



@Stateless
@Path("/enseignement")
@Produces(MediaType.APPLICATION_JSON)
@Consumes({MediaType.APPLICATION_JSON})
public class EnseignementServlet {

	@EJB 
	EnseignementServiceLocal enseignementService;
	@EJB
	CoursCursusServiceLocal coursCursusService;
	@EJB
	CoursPromotionServiceLocal coursPromotionService;


	// Le path root correspond à la demande de tous les Enseignements
	@GET()
	@Path("/root")
	public Response getEnseignementRoot() 
	{
		return getAllEnseignement();
	}


	/**
	 * Retourne les Enseignements
	 * @return
	 */
	@GET()
	public Response getAllEnseignement() 
	{
		List<Enseignement> listeEnseignement = enseignementService.findAllEnseignement();
		for (Enseignement enseignement : listeEnseignement) {
			for (CoursCursus coursCursus : enseignement.getCoursCursuses()) {
				coursCursus.setSavoirs(null);
				coursCursus.setEnseignements(null);
				coursCursus.setModuleCursus(null);
			}
			for (CoursPromotion coursPromo : enseignement.getCoursPromotions()) {
				coursPromo.setSavoirs(null);
				coursPromo.setEnseignements(null);
				coursPromo.setModulePromotion(null);
			}
			
		}
		return Response.ok(listeEnseignement).build();
	}


	@GET()
	@Path("/{id}")
	public Response getEnseignement(@PathParam("id") Integer id ) 
	{

		Enseignement enseignement = enseignementService.findById(Integer.valueOf(id));
		for (CoursCursus coursCursus : enseignement.getCoursCursuses()) {
			coursCursus.setSavoirs(null);
			coursCursus.setEnseignements(null);
			coursCursus.setModuleCursus(null);
		}
		for (CoursPromotion coursPromo : enseignement.getCoursPromotions()) {
			coursPromo.setSavoirs(null);
			coursPromo.setModulePromotion(null);
			coursPromo.setEnseignements(null);
		}
		for (Enseignement prerequis: enseignement.getPrerequis()) {
			prerequis = enseignementService.findById(prerequis.getEntId());
			prerequis.setCoursCursuses(null);
			prerequis.setCoursPromotions(null);
			prerequis.setPrerequis(null);
		}
		ArrayList<Enseignement> reponse = new ArrayList<Enseignement>();
		reponse.add(enseignement);
		return Response.ok(reponse).build();
	}
	
	@GET()
	@Path("/courscursus/{id}")
	public Response getEnseignementByCoursCursus(@PathParam("id") Integer id ) 
	{
		CoursCursus cours = coursCursusService.findById(Integer.valueOf(id));
		
		ArrayList<Enseignement> reponse = new ArrayList<Enseignement>();
		
		for (Enseignement enseignement : cours.getEnseignements()) {
			enseignement.setCoursCursuses(null);
			enseignement.setCoursPromotions(null);
			enseignement.setPrerequis(null);
			
			reponse.add(enseignement);
		}
		
		return Response.ok(reponse).build();
	}
	@GET()
	@Path("/courspromotion/{id}")
	public Response getEnseignementByCoursPromotion(@PathParam("id") Integer id ) 
	{
		CoursPromotion cours = coursPromotionService.findById(Integer.valueOf(id));
		
		ArrayList<Enseignement> reponse = new ArrayList<Enseignement>();
		
		for (Enseignement enseignement : cours.getEnseignements()) {
			enseignement.setCoursCursuses(null);
			enseignement.setCoursPromotions(null);
			enseignement.setPrerequis(null);

			reponse.add(enseignement);
		}
		
		return Response.ok(reponse).build();
	}
	
	@POST()
	public Response add(Enseignement enseignement) 
	{	
		enseignementService.create(enseignement);
		ArrayList<Enseignement> response = new ArrayList<Enseignement>();
		response.add(enseignement);
	    return Response.ok(response).build();
	}

	@PUT
	@Path("/{string}")
	public Response update(Enseignement enseignement) 
	{
		ArrayList<Enseignement> response = new ArrayList<Enseignement>();
		List <Enseignement> prerequisList = enseignement.getPrerequis();
		if(!prerequisList.isEmpty()){
			for (Enseignement prerequis : prerequisList){
				prerequis = enseignementService.findById(prerequis.getEntId());
			}
		}
		try {
			enseignementService.update(enseignement);
			response.add(enseignement);
			return Response.ok(response).build();
		} catch (Exception e) {
			//e.printStackTrace();
			return Response.status(Response.Status.FORBIDDEN).entity(e.getMessage()).build();
		}
		
		
		
	}

	@DELETE
	@Path("/{string}")
	public Response delete(Enseignement enseignement) 
	{
		enseignementService.delete(enseignement);
		ArrayList<Enseignement> response = new ArrayList<Enseignement>();
		response.add(enseignement);
		return Response.ok(response).build();
	}
}
