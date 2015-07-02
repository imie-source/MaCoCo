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
import cursus.PeriodeCursusServiceLocal;
import entities.cursus.CoursCursus;
import entities.cursus.Cursus;
import entities.cursus.ModuleCursus;
import entities.cursus.Periode;
import entities.cursus.UniteFormationCursus;

@Stateless
@Path("/periode")
@Produces(MediaType.APPLICATION_JSON)
@Consumes({MediaType.APPLICATION_JSON})
public class PeriodeServlet 
{
	@EJB 
	PeriodeCursusServiceLocal periodeCursusService;
	@EJB 
	CursusServiceLocal cursusService;
	
	@GET()
	@Path("/{id}")
	public Response get(@PathParam("id") Integer id)
	{
		Periode periode= periodeCursusService.findById(id);
		
		periode.setCursus(null);
	    return Response.ok(periode).build();
	}
	
	@GET()
	@Path("/cursus/{id}")
	public Response getByCursusId(@PathParam("id") Integer id)
	{
		Cursus cursus = cursusService.findById(id);
		List <Periode> periodeList = new ArrayList<Periode>();
		for (Periode periode : cursus.getPeriodes()) {
			periode.getCursus().setPeriodes(null);
			periode.getCursus().setPromotions(null);
			periode.getCursus().setUniteFormationCursuses(null);
			periodeList.add(periode);
		}
		
	    return Response.ok(periodeList).build();
	}
	
	@GET()
	@Path("/schemapedagogique/{id}")
	public Response getForSchemaByCursusId(@PathParam("id") Integer id)
	{
		Cursus cursus = cursusService.findById(id);
		
		
		
		
		
		List <Periode> periodeList = new ArrayList<Periode>();
		for (Periode periode : cursus.getPeriodes()) {
			periode.getCursus().setPeriodes(null);
			periode.getCursus().setPromotions(null);
			
			List<UniteFormationCursus> ufList = new ArrayList<UniteFormationCursus>();
			for (UniteFormationCursus uniteFormationCursus : cursus.getUniteFormationCursuses()) {
			
				List<ModuleCursus> moduleList = new ArrayList<ModuleCursus>();
				for (ModuleCursus moduleCursus : uniteFormationCursus.getModuleCursuses()) {
					
					List<CoursCursus> coursList = new ArrayList<CoursCursus>();
					for (CoursCursus coursCursus : moduleCursus.getCoursCursuses()) {
						
						
						
					}
					
				}
				
			}
			
			periode.getCursus().setUniteFormationCursuses(cursus.getUniteFormationCursuses());
			periodeList.add(periode);
		}
		
	    return Response.ok(periodeList).build();
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
