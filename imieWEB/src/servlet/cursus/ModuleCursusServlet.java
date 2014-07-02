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

import cursus.ModuleCursusServiceLocal;
import entities.cursus.CoursCursus;
import entities.cursus.ModuleCursus;

@Stateless
@Path("/modulecursus")
@Produces(MediaType.APPLICATION_JSON)
@Consumes({MediaType.APPLICATION_JSON})
public class ModuleCursusServlet 
{
	@EJB 
	ModuleCursusServiceLocal moduleCursusService;

	
	@GET()
	@Path("/{id}")
	public Response get(@PathParam("id") Integer id)
	{
		ModuleCursus module = moduleCursusService.findById(id);

		module.setCoursCursuses(new ArrayList<CoursCursus>());
		
		module.getUniteFormationCursus().setModuleCursuses(null);
		module.getUniteFormationCursus().setCursus(null);
		
		ArrayList<ModuleCursus> response = new ArrayList<ModuleCursus>();
		response.add(module);
	    return Response.ok(response).build();
	}

	
	@POST()
	public Response add(ModuleCursus module) 
	{
		moduleCursusService.create(module);
		ArrayList<ModuleCursus> response = new ArrayList<ModuleCursus>();
		response.add(module);
	    return Response.ok(response).build();
	}
	
	
	@PUT
	@Path("/{string}")
	public Response update(ModuleCursus module) 
	{
		moduleCursusService.update(module);
		ArrayList<ModuleCursus> response = new ArrayList<ModuleCursus>();
		response.add(module);
	    return Response.ok(response).build();
	}
	
	
	@DELETE
	@Path("/{string}")
	public Response remove(ModuleCursus module)
	{
		moduleCursusService.delete(module);
		
		System.out.println(module.getMocId());
		
		return Response.ok().build();
	}	
}
