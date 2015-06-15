package servlet.referentiel;

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

import referentiel.CompetenceProServiceLocal;
import entities.referentiel.CompetencePro;
import entities.referentiel.Savoir;

@Stateless
@Path("/competencepro")
@Produces(MediaType.APPLICATION_JSON)
@Consumes({MediaType.APPLICATION_JSON})
public class CompetenceProServlet 
{
	@EJB 
	CompetenceProServiceLocal competenceProService;
	
	
	@GET()
	@Path("/{id}")
	public Response getCompetencePro(@PathParam("id") Integer id ) 
	{
			CompetencePro competencePro = competenceProService.findById(Integer.valueOf(id));
			
			competencePro.setSavoirs(new ArrayList<Savoir>());
			
			competencePro.getActiviteType().setReferentiel(null);
			competencePro.getActiviteType().setCompetencePros(null);

		    List<CompetencePro> result = new ArrayList<CompetencePro>();
		    result.add(competencePro);
		    return Response.ok(result).build();
	}
	
	@POST()
	public Response add(CompetencePro competencePro) 
	{
		competenceProService.create(competencePro);
		
	    return Response.ok().build();
	}
	
	
	@PUT
	@Path("/{string}")
	public Response update(CompetencePro competencePro) 
	{
		competenceProService.update(competencePro);
		
	    List<CompetencePro> result = new ArrayList<CompetencePro>();
	    result.add(competencePro);
	    return Response.ok(result).build();
	}
	
	@DELETE
	@Path("/{string}")
	public Response remove(CompetencePro competencePro)
	{
		competenceProService.delete(competencePro);
		return Response.ok().build();
	}	
	
}
