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

import cursus.UniteFormationCursusServiceLocal;
import entities.cursus.ModuleCursus;
import entities.cursus.UniteFormationCursus;

@Stateless
@Path("/uniteformationcursus")
@Produces(MediaType.APPLICATION_JSON)
@Consumes({MediaType.APPLICATION_JSON})
public class UniteFormationCursusServlet 
{
	@EJB 
	UniteFormationCursusServiceLocal uniteFormationCursusService;

	
	@GET()
	@Path("/{id}")
	public Response get(@PathParam("id") Integer id)
	{
		UniteFormationCursus uf = uniteFormationCursusService.findById(id);
		
		uf.setModuleCursuses(new ArrayList<ModuleCursus>());
		
		uf.getCursus().setUniteFormationCursuses(null);
		uf.getCursus().setPeriodes(null);
		
		ArrayList<UniteFormationCursus> response = new ArrayList<UniteFormationCursus>();
		response.add(uf);
	    return Response.ok(response).build();
	}

	
	@POST()
	public Response add(UniteFormationCursus uf) 
	{	
		uniteFormationCursusService.create(uf);
		ArrayList<UniteFormationCursus> response = new ArrayList<UniteFormationCursus>();
		response.add(uf);
	    return Response.ok(response).build();
	}
	
	@PUT
	@Path("/{string}")
	public Response update(UniteFormationCursus uf) 
	{
		uniteFormationCursusService.update(uf);
		ArrayList<UniteFormationCursus> response = new ArrayList<UniteFormationCursus>();
		response.add(uf);
		return Response.ok().build();
	}
	
	@DELETE
	@Path("/{string}")
	public Response remove(UniteFormationCursus uf)
	{
		uniteFormationCursusService.delete(uf);
		return Response.ok().build();
	}	
	
}
