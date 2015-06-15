package servlet.cursus;

import java.util.ArrayList;

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

import cursus.PeriodeCursusServiceLocal;
import entities.cursus.Periode;

@Stateless
@Path("/periode")
@Produces(MediaType.APPLICATION_JSON)
@Consumes({MediaType.APPLICATION_JSON})
public class PeriodeServlet 
{
	@EJB 
	PeriodeCursusServiceLocal periodeCursusService;
	
	@GET()
	@Path("/{id}")
	public Response get(@PathParam("id") Integer id)
	{
		Periode periode= periodeCursusService.findById(id);
		
		periode.setCursus(null);
	    return Response.ok(periode).build();
	}
	
	@POST()
	public Response add(Periode periode) 
	{
		periodeCursusService.create(periode);
		
		ArrayList<Periode> response = new ArrayList<Periode>();
		response.add(periode);
	    return Response.ok(response).build();
	}
	
	@PUT
	@Path("/{string}")
	public Response update(Periode periode) 
	{
		periodeCursusService.update(periode);
		
		ArrayList<Periode> response = new ArrayList<Periode>();
		response.add(periode);
		return Response.ok(response).build();
	}
	
	@DELETE
	@Path("/{string}")
	public Response remove(Periode periode)
	{
		periodeCursusService.delete(periode);
		return Response.ok().build();
	}	
}
