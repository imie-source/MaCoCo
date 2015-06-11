package servlet.promotion;

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

import promotion.PeriodePromotionServiceLocal;
import entities.promotion.PeriodePromotion;

@Stateless
@Path("/periodepromotion")
@Transactional(Transactional.TxType.REQUIRES_NEW)
@Produces(MediaType.APPLICATION_JSON)
@Consumes({MediaType.APPLICATION_JSON})
public class PeriodePromotionServlet 
{
	@EJB 
	PeriodePromotionServiceLocal periodePromotionService;
	
	@GET()
	@Path("/{id}")
	public Response get(@PathParam("id") Integer id)
	{
		PeriodePromotion periode= periodePromotionService.findById(id);
		
		periode.setPromotion(null);
	    return Response.ok(periode).build();
	}
	
	@POST()
	public Response add(PeriodePromotion periode) 
	{
		periodePromotionService.create(periode);
		
		ArrayList<PeriodePromotion> response = new ArrayList<PeriodePromotion>();
		response.add(periode);
	    return Response.ok(response).build();
	}
	
	@PUT
	@Path("/{string}")
	public Response update(PeriodePromotion periode) 
	{
		periodePromotionService.update(periode);
		
		ArrayList<PeriodePromotion> response = new ArrayList<PeriodePromotion>();
		response.add(periode);
		return Response.ok(response).build();
	}
	
	@DELETE
	@Path("/{string}")
	public Response remove(PeriodePromotion periode)
	{
		periodePromotionService.delete(periode);
		return Response.ok().build();
	}	
}
