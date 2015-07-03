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

import cursus.CoursCursusServiceLocal;
import cursus.CursusServiceLocal;
import cursus.ModuleCursusServiceLocal;
import cursus.PeriodeCursusServiceLocal;
import cursus.UniteFormationCursusServiceLocal;
import entities.cursus.CoursCursus;
import entities.cursus.Cursus;
import entities.cursus.ModuleCursus;
import entities.cursus.Periode;
import entities.cursus.UniteFormationCursus;
import entities.referentiel.Savoir;

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
	@EJB 
	CoursCursusServiceLocal coursCursusService;
	@EJB
	ModuleCursusServiceLocal moduleCursusService;
	@EJB
	UniteFormationCursusServiceLocal ufCursusService;
	
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
		Double periodeNbJours = 0.0;
		List<CoursCursus> coursList = coursCursusService.findAllByCursus(id);
		List <Periode> periodeList = new ArrayList<Periode>();
		List<CoursCursus> addedCoursList = new ArrayList<CoursCursus>();
		for (Periode periode : cursus.getPeriodes()) {
			
			Cursus newCursus = new Cursus();
			newCursus.setCurId(cursus.getCurId());
			newCursus.setCurNom(cursus.getCurNom());
			newCursus.setUniteFormationCursuses(cursus.getUniteFormationCursuses());
			periode.setCursus(newCursus);
			
			periodeNbJours += (double)periode.getPerNbjours();
			Double coursNbJoursTot = 0.0;
			List<UniteFormationCursus> ufListForPeriode = new ArrayList<UniteFormationCursus>();
			
			for (CoursCursus cours : coursList) {
				//if (coursNbJoursTot <= periodeNbJours && !addedCoursList.contains(cours)){
				Boolean added = false;
				for (CoursCursus addedCours : addedCoursList) {
					if(addedCours.getCocId()==cours.getCocId()){
						added = true;
					}
				}
				if ((coursNbJoursTot+cours.getCocDuree()) <= periodeNbJours && !added){	
					coursNbJoursTot += cours.getCocDuree();
					addedCoursList.add(cours);
				
					
					ModuleCursus module = moduleCursusService.findById(cours.getModuleCursus().getMocId());
					module.setCoursCursuses(new ArrayList<CoursCursus>());
					UniteFormationCursus uf = ufCursusService.findById(module.getUniteFormationCursus().getUfcId());
					uf.setModuleCursuses(new ArrayList<ModuleCursus>());
					
					Boolean addUf = true;
					Boolean addModule = true;
					for (UniteFormationCursus ufCursus : ufListForPeriode) {
						if(ufCursus.getUfcId()==uf.getUfcId()){
							addUf = false;
							for (ModuleCursus moduleCursus : ufCursus.getModuleCursuses()) {
								
								if(moduleCursus.getMocId()==module.getMocId()){
									addModule = false;
									//cours.setModuleCursus(moduleCursus);
																		
									moduleCursus.getCoursCursuses().add(cours);
								}
							}
							if (addModule){
								//cours.setModuleCursus(module);
							
								module.getCoursCursuses().add(cours);
								ufCursus.getModuleCursuses().add(module);
							}
						}	
					}
					if (addUf){
						//cours.setModuleCursus(module);
						module.getCoursCursuses().add(cours);
						uf.getModuleCursuses().add(module);
						ufListForPeriode.add(uf);
					}
								
				}
			}
			periode.getCursus().setUniteFormationCursuses(ufListForPeriode);
			periodeList.add(periode);
		}
		
		for (Periode per : periodeList) {
			Cursus cur = per.getCursus();
			cur.setPeriodes(null);
			cur.setPromotions(null);
			for (UniteFormationCursus uf : cur.getUniteFormationCursuses()) {
				uf.setCursus(null);
				for (ModuleCursus module : uf.getModuleCursuses()) {
					module.setUniteFormationCursus(null);
					for (CoursCursus cours : module.getCoursCursuses()) {
						
						cours.setModuleCursus(null);
						cours.setEnseignements(null);
						for(Savoir savoir : cours.getSavoirs()){
							savoir.setCompetencePro(null);
							savoir.setCoursCursuses(null);
							savoir.setCoursPromotions(null);
						}
					}		
				}	
			}
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
