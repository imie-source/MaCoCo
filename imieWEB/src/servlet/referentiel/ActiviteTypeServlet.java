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

import referentiel.ActiviteTypeServiceLocal;
import entities.referentiel.ActiviteType;
import entities.referentiel.CompetencePro;

@Stateless
@Path("/activitetype")
@Produces(MediaType.APPLICATION_JSON)
@Consumes({MediaType.APPLICATION_JSON})
public class ActiviteTypeServlet 
{
	@EJB
	ActiviteTypeServiceLocal activiteTypeService;
	
	
	@GET()
	@Path("/{id}")
	public Response getActiviteType(@PathParam("id") Integer id ) 
	{
			ActiviteType activiteType = activiteTypeService.findById(Integer.valueOf(id));
			
			activiteType.setCompetencePros(new ArrayList<CompetencePro>());
			
			activiteType.getReferentiel().setActiviteTypes(null);

		    List<ActiviteType> result = new ArrayList<ActiviteType>();
		    result.add(activiteType);
		    return Response.ok(result).build();
	}
	
	@POST()
	public Response add(ActiviteType activiteType) 
	{
		activiteTypeService.create(activiteType);
		
	    return Response.ok().build();
	}
	
	
	@PUT
	@Path("/{string}")
	public Response update(ActiviteType activiteType) 
	{
		activiteTypeService.update(activiteType);
		ArrayList<ActiviteType> response = new ArrayList<ActiviteType>();
		response.add(activiteType);
		return Response.ok().build();
	}
	
	@DELETE
	@Path("/{string}")
	public Response remove(ActiviteType activiteType)
	{
		activiteTypeService.delete(activiteType);
		return Response.ok().build();
	}	
}
