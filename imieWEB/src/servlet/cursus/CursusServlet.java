
package servlet.cursus;

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

import cursus.CursusServiceLocal;
import entities.cursus.CoursCursus;
import entities.cursus.Cursus;
import entities.cursus.ModuleCursus;
import entities.cursus.Periode;
import entities.cursus.UniteFormationCursus;
import entities.enseignement.Enseignement;
import entities.promotion.PeriodePromotion;
import entities.promotion.Promotion;
import entities.referentiel.Savoir;

@Stateless
@Path("/cursus")
@Produces(MediaType.APPLICATION_JSON)
@Consumes({MediaType.APPLICATION_JSON})
public class CursusServlet 
{

	@EJB 
	CursusServiceLocal cursusService;


	// Le path root correspond à la demande de tous les cursus
	@GET()
	@Path("/root")
	public Response getCursusRoot() 
	{
		return getAllCursus();
	}


	/**
	 * Retourne les cursus sans leurs descendants
	 * @return
	 */
	@GET()
	public Response getAllCursus() 
	{
		List<Cursus> listeCursus = cursusService.findAllCursus();
		for (Cursus cursus : listeCursus) 
		{
			cursus.setUniteFormationCursuses(new ArrayList<UniteFormationCursus>());
			
			for (Periode periode : cursus.getPeriodes())
			{
				periode.setCursus(null);
			}
			
			
			for (UniteFormationCursus uf : cursus.getUniteFormationCursuses()) 
			{
				uf.setCursus(null);
				uf.setModuleCursuses(null);
			}
			
			for (Promotion promo : cursus.getPromotions()) 
			{
				promo.setCursus(null);
				promo.setUniteFormationPromotions(null);
				promo.setPeriodes(new ArrayList<PeriodePromotion>());
				for(PeriodePromotion periodePromo : promo.getPeriodes()){
					periodePromo.setPromotion(null);
				}
			}
			
		}

		return Response.ok(listeCursus).build();
	}




	@GET()
	@Path("/{id}")
	public Response getCursus(@PathParam("id") Integer id ) 
	{

		Cursus cursus = cursusService.findById(Integer.valueOf(id));

		for (Periode periode : cursus.getPeriodes())
		{
			periode.setCursus(null);
		}
		
		cursus.setPromotions(new ArrayList<Promotion>());
		for (Promotion promotion : cursus.getPromotions())
		{
			promotion.setCursus(null);
			promotion.setPeriodes(null);
			promotion.setUniteFormationPromotions(null);
		}
		
		for (UniteFormationCursus uf : cursus.getUniteFormationCursuses()) 
		{
			uf.setCursus(null);
			
			for (ModuleCursus module : uf.getModuleCursuses()) 
			{

				module.setUniteFormationCursus(null);

				for (CoursCursus cours : module.getCoursCursuses()) 
				{
					cours.setModuleCursus(null);
					for (Savoir savoir : cours.getSavoirs()) 
					{
						savoir.setCompetencePro(null);
						savoir.setCoursCursuses(null);
						savoir.setCoursPromotions(null);
					}
					for (Enseignement enseignement : cours.getEnseignements()) 
					{
						enseignement.setCoursCursuses(null);
						enseignement.setCoursPromotions(null);
						enseignement.setPrerequis(null);
					}
				}
			}
		}
		
		ArrayList<Cursus> reponse = new ArrayList<Cursus>();
		reponse.add(cursus);
		return Response.ok(reponse).build();
	}

	@POST()
	public Response add(Cursus cursus) 
	{	
		cursusService.create(cursus);
		ArrayList<Cursus> response = new ArrayList<Cursus>();
		response.add(cursus);
	    return Response.ok(response).build();
	}

	@PUT
	@Path("/{string}")
	public Response update(Cursus cursus) 
	{
		cursusService.update(cursus);
		ArrayList<Cursus> response = new ArrayList<Cursus>();
		response.add(cursus);
		return Response.ok(response).build();
	}

	@DELETE
	@Path("/{string}")
	public Response delete(Cursus cursus) 
	{
		cursusService.delete(cursus);
		ArrayList<Cursus> response = new ArrayList<Cursus>();
		response.add(cursus);
		return Response.ok(response).build();
	}


	//	

	//	
	//		@DELETE()
	//		@Path("/{id}")
	//		public Response removeCursus(@PathParam("id") Integer id ) {
	//		   
	//			Cursus cursus = imieServiceLocal.findById(id);
	//		    
	//		    return Response.ok(cursus).build();
	//		}


}
