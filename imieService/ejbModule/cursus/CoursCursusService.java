package cursus;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import promotion.CoursPromotionServiceLocal;
import entities.cursus.CoursCursus;
import entities.cursus.RCourscursusEnseignement;
import entities.cursus.RCourscursusSavoir;
import entities.enseignement.Enseignement;
import entities.promotion.CoursPromotion;
import entities.referentiel.Savoir;

/**
 * Session Bean implementation class CoursCursusService
 */
@Stateless(name = "CoursCursus")
@LocalBean
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class CoursCursusService implements CoursCursusServiceLocal {

	@PersistenceContext
	EntityManager em;
	@EJB
	CoursPromotionServiceLocal coursPromotionService;

	/**
	 * Default constructor. 
	 */
	public CoursCursusService() {
		// TODO Auto-generated constructor stub
	}



	@Override
	public CoursCursus findById(Integer id) 
	{
		CoursCursus result = em.find(CoursCursus.class, id);
		
		for (@SuppressWarnings("unused") Savoir savoir : result.getSavoirs()) 
		{
			//Initialisation
		}
		for (@SuppressWarnings("unused") Enseignement enseignement : result.getEnseignements()) 
		{
			//Initialisation
			
		}
		return result;
	}

	@Override
	public CoursCursus update(CoursCursus coursCursus) 
	{
		return em.merge(coursCursus);
	}

	@Override
	public void create(CoursCursus coursCursus) 
	{
		em.persist(coursCursus);
	}

	@Override
	public void delete(CoursCursus coursCursus) 
	{
		
		coursCursus = em.merge(coursCursus);
		
		
		Query queryAllRCoursSavoir= em.createNamedQuery("RCourscursusSavoir.findAll");
		@SuppressWarnings("unchecked")
		List<RCourscursusSavoir> rCourscursusSavoirs = queryAllRCoursSavoir.getResultList();
		for (RCourscursusSavoir rCourscursusSavoir : rCourscursusSavoirs) {
			if(coursCursus==rCourscursusSavoir.getCoursCursus()){
				rCourscursusSavoir = em.merge(rCourscursusSavoir);
				em.remove(rCourscursusSavoir);
			}
		}
		Query queryAllRCoursEnseignement= em.createNamedQuery("RCourscursusEnseignement.findAll");
		@SuppressWarnings("unchecked")
		List<RCourscursusEnseignement> rCourscursusEnseignements = queryAllRCoursEnseignement.getResultList();
		for (RCourscursusEnseignement rCourscursusEnseignement : rCourscursusEnseignements) {
			if(coursCursus==rCourscursusEnseignement.getCoursCursus()){
				rCourscursusEnseignement = em.merge(rCourscursusEnseignement);
				em.remove(rCourscursusEnseignement);
			}
		}
		String queryString = "SELECT c FROM CoursPromotion c WHERE c.cocId = "
				.concat(coursCursus.getCocId().toString());
		Query query = em.createQuery(queryString);
		List<CoursPromotion> coursPromotionList = query.getResultList();
		for (CoursPromotion coursPromotion : coursPromotionList) {
			coursPromotionService.delete(coursPromotion);
		}
		
	
		em.remove(coursCursus);
	}
	
	
	
	
	public List<CoursCursus> findAllByCursus(Integer id) 
	{
		Query queryAllCours = em.createNamedQuery("CoursCursus.findAllByCursus");
		queryAllCours.setParameter("idCursus", id);
		@SuppressWarnings("unchecked")
		List<CoursCursus> res = queryAllCours.getResultList();
		
		for (CoursCursus coursCursus : res) 
		{
			for (@SuppressWarnings("unused") Savoir savoir : coursCursus.getSavoirs()) 
			{
				//Initialisation
			}
			for (@SuppressWarnings("unused") Enseignement enseignement : coursCursus.getEnseignements()) 
			{
				//Initialisation
			}
		}
		
		Collections.sort(res, new Comparator<CoursCursus>() {
			@Override
			public int compare(CoursCursus o1, CoursCursus o2) {
				if(o1.getCocOrdre()==null){
					o1.setCocOrdre(0);
				}
				if(o2.getCocOrdre()==null){
					o2.setCocOrdre(0);
				}
				return o1.getCocOrdre().compareTo(o2.getCocOrdre());
			}
		});
		return res;
	}

}
