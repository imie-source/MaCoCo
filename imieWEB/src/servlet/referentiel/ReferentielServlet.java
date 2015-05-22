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

import referentiel.ReferentielServiceLocal;
import entities.cursus.Cursus;
import entities.cursus.Periode;
import entities.cursus.UniteFormationCursus;
import entities.referentiel.ActiviteType;
import entities.referentiel.CompetencePro;
import entities.referentiel.Referentiel;
import entities.referentiel.Savoir;

@Stateless
@Path("/referentiel")
@Produces(MediaType.APPLICATION_JSON)
@Consumes({MediaType.APPLICATION_JSON})
public class ReferentielServlet 
{
	@EJB 
	ReferentielServiceLocal referentielService;

	/**
	 * Retourne les referentiels sans leurs descendants
	 * @return
	 */
	@GET()
	public Response getAllreferentiel() 
	{
		List<Referentiel> listeReferentiels = referentielService.findAllReferentiel();
		for (Referentiel referentiel : listeReferentiels) {
			for(ActiviteType aT : referentiel.getActiviteTypes()){
				aT.setReferentiel(null);
				aT.setCompetencePros(null);
			}
		}
		return Response.ok(listeReferentiels).build();
	}
	
	
	
	@GET()
	@Path("/{id}")
	public Response getReferentiel(@PathParam("id") Integer id ) 
	{
			Referentiel referentiel = referentielService.findById(Integer.valueOf(id));
			
			for (ActiviteType activiteType : referentiel.getActiviteTypes()) 
			{
				activiteType.setReferentiel(null);
				
				for (CompetencePro competencePro : activiteType.getCompetencePros()) 
				{
					competencePro.setActiviteType(null);
					
					for (Savoir savoir : competencePro.getSavoirs()) 
					{
						savoir.setCompetencePro(null);
						savoir.setCoursCursuses(null);
					}
				}
			}
			ArrayList<Referentiel> reponse = new ArrayList<Referentiel>();
			reponse.add(referentiel);
		    return Response.ok(reponse).build();
	}
	
	@POST()
	public Response add(Referentiel referentiel) 
	{	
		referentielService.create(referentiel);
		ArrayList<Referentiel> response = new ArrayList<Referentiel>();
		response.add(referentiel);
	    return Response.ok(response).build();
	}
	
	@PUT
	@Path("/{string}")
	public Response update(Referentiel referentiel) 
	{
		referentielService.update(referentiel);
		ArrayList<Referentiel> response = new ArrayList<Referentiel>();
		response.add(referentiel);
		return Response.ok(response).build();
	}
	
	@DELETE
	@Path("/{string}")
	public Response delete(Referentiel referentiel) 
	{
		referentielService.delete(referentiel.getRefId());
		ArrayList<Referentiel> response = new ArrayList<Referentiel>();
		response.add(referentiel);
		return Response.ok(response).build();
	}
}
