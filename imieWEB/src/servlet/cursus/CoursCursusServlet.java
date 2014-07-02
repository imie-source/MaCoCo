package servlet.cursus;

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

import cursus.CoursCursusServiceLocal;
import entities.cursus.CoursCursus;


@Stateless
@Path("/courscursus")
@Produces(MediaType.APPLICATION_JSON)
@Consumes({MediaType.APPLICATION_JSON})
public class CoursCursusServlet 
{
	@EJB 
	CoursCursusServiceLocal coursCursusService;
	
	@GET()
	@Path("/{id}")
	public Response get(@PathParam("id") Integer id)
	{
		CoursCursus cours = coursCursusService.findById(id);
		
		cours.setRCourscursusEnseignements(null);
		cours.setRCourscursusSavoirs(null);
		
		cours.getModuleCursus().setCoursCursuses(null);
		cours.getModuleCursus().setUniteFormationCursus(null);
		
		ArrayList<CoursCursus> response = new ArrayList<CoursCursus>();
		response.add(cours);
	    return Response.ok(response).build();
	}
	
	@POST()
	public Response add(CoursCursus cours) 
	{
		coursCursusService.create(cours);
		ArrayList<CoursCursus> response = new ArrayList<CoursCursus>();
		response.add(cours);
	    return Response.ok(response).build();
	}
	
	@PUT
	@Path("/{string}")
	public Response update(CoursCursus cours) 
	{
		coursCursusService.update(cours);
		ArrayList<CoursCursus> response = new ArrayList<CoursCursus>();
		response.add(cours);
		return Response.ok(response).build();
	}
	
	@DELETE
	@Path("/{string}")
	public Response remove(CoursCursus cours)
	{
		coursCursusService.delete(cours);
		return Response.ok().build();
	}	
}
