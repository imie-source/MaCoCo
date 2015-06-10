package promotion;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import entities.cursus.RCourscursusEnseignement;
import entities.enseignement.Enseignement;
import entities.promotion.CoursPromotion;
import entities.promotion.RCourspromoEnseignement;
import entities.promotion.RCourspromotionSavoir;
import entities.referentiel.Savoir;

/**
 * Session Bean implementation class CoursPromotionService
 */
@Stateless(name = "CoursPromotion")
@LocalBean
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class CoursPromotionService implements CoursPromotionServiceLocal {

	@PersistenceContext
	EntityManager em;

	/**
	 * Default constructor. 
	 */
	public CoursPromotionService() {
		// TODO Auto-generated constructor stub
	}



	@Override
	public CoursPromotion findById(Integer id) 
	{
		CoursPromotion result = em.find(CoursPromotion.class, id);
		
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
	public CoursPromotion update(CoursPromotion coursPromotion) 
	{
		return em.merge(coursPromotion);
	}

	@Override
	public void create(CoursPromotion coursPromotion) 
	{
		em.persist(coursPromotion);
	}

	@Override
	public void delete(CoursPromotion coursPromotion) 
	{
		coursPromotion = em.merge(coursPromotion);
		
		Query queryAllRCoursSavoir= em.createNamedQuery("RCourspromotionSavoir.findAll");
		@SuppressWarnings("unchecked")
		List<RCourspromotionSavoir> rCourspromotionSavoirs = queryAllRCoursSavoir.getResultList();
		for (RCourspromotionSavoir rCourspromotionSavoir : rCourspromotionSavoirs) {
			if(coursPromotion==rCourspromotionSavoir.getCoursPromotion()){
				rCourspromotionSavoir = em.merge(rCourspromotionSavoir);
				em.remove(rCourspromotionSavoir);
			}
		}
		Query queryAllRCoursPromoEnseignement= em.createNamedQuery("RCourspromoEnseignement.findAll");
		@SuppressWarnings("unchecked")
		List<RCourspromoEnseignement> rCourspromoEnseignements = queryAllRCoursPromoEnseignement.getResultList();
		for (RCourspromoEnseignement rCourspromoEnseignement : rCourspromoEnseignements) {
			if(coursPromotion==rCourspromoEnseignement.getCoursPromo()){
				rCourspromoEnseignement = em.merge(rCourspromoEnseignement);
				em.remove(rCourspromoEnseignement);
			}
		}
		em.remove(coursPromotion);
	}
	
	
	
	
	public List<CoursPromotion> findAllByPromotion(Integer id) 
	{
		Query queryAllCours = em.createNamedQuery("CoursPromotion.findAllByPromotion");
		queryAllCours.setParameter("idPromotion", id);
		@SuppressWarnings("unchecked")
		List<CoursPromotion> res = queryAllCours.getResultList();
		
		for (CoursPromotion coursPromotion : res) 
		{
			for (@SuppressWarnings("unused") Savoir savoir : coursPromotion.getSavoirs()) 
			{
				//Initialisation
			}	
			for (@SuppressWarnings("unused") Enseignement enseignement : coursPromotion.getEnseignements()) 
			{
				//Initialisation
			}
		
		}
		
		Collections.sort(res, new Comparator<CoursPromotion>() {
			@Override
			public int compare(CoursPromotion o1, CoursPromotion o2) {
				if(o1.getCopOrdre()==null){
					o1.setCopOrdre(0);
				}
				if(o2.getCopOrdre()==null){
					o2.setCopOrdre(0);
				}
				return o1.getCopOrdre().compareTo(o2.getCopOrdre());
			}
		});
		return res;
	}
	
}
