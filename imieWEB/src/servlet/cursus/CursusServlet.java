
	package servlet.cursus;

	import java.util.ArrayList;
import java.util.List;

	import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
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
import entities.cursus.RCourscursusEnseignement;
import entities.cursus.RCourscursusSavoir;
import entities.cursus.UniteFormationCursus;

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
				}
				
			    return Response.ok(listeCursus).build();
		}
		
		

		
		@GET()
		@Path("/{id}")
		public Response getCursus(@PathParam("id") Integer id ) 
		{

				Cursus cursus = cursusService.findById(Integer.valueOf(id));
				
				for (UniteFormationCursus uf : cursus.getUniteFormationCursuses()) 
				{
					uf.setCursus(null);
					
					for (ModuleCursus module : uf.getModuleCursuses()) 
					{
						
						module.setUniteFormationCursus(null);
						
						for (CoursCursus cours : module.getCoursCursuses()) 
						{
							cours.setModuleCursus(null);
							cours.setRCourscursusEnseignements(new ArrayList<RCourscursusEnseignement>());
							cours.setRCourscursusSavoirs(new ArrayList<RCourscursusSavoir>());
						}
					}
				}

			    List<Cursus> result = new ArrayList<Cursus>();
			    result.add(cursus);
			    return Response.ok(result).build();
		}
		
		
		
		@PUT
		@Path("/{string}")
		public Response putTest(Cursus cursus) 
		{
			cursusService.update(cursus);
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
