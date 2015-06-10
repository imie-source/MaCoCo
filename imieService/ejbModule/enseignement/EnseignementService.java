package enseignement;

import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import entities.cursus.CoursCursus;
import entities.enseignement.Enseignement;
import entities.promotion.CoursPromotion;



/**
 * Session Bean implementation class PromotionService
 */
@Stateless
@LocalBean
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class EnseignementService implements EnseignementServiceLocal{

	@PersistenceContext
	EntityManager em;

	public EnseignementService() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public List<Enseignement> findAllEnseignement() {
		@SuppressWarnings("unchecked")
		List<Enseignement> resultList = em.createNamedQuery("Enseignement.findAll").getResultList();
		
		for (Enseignement enseignement : resultList) {
			for (@SuppressWarnings("unused") CoursCursus coursCursus : enseignement.getCoursCursuses()) {
				// initialisation
			}
			for (@SuppressWarnings("unused") CoursPromotion coursPromo : enseignement.getCoursPromotions()) {
				// initialisation
			}
			for (@SuppressWarnings("unused") Enseignement prerequis: enseignement.getPrerequis()) {
				// initialisation
			}
			
		}
		return resultList;
	}

	@Override
	public Enseignement findById(Integer id) {
		Enseignement result = em.find(Enseignement.class, id);
		for (@SuppressWarnings("unused") CoursCursus coursCursus : result.getCoursCursuses()) {
			// initialisation
		}
		for (@SuppressWarnings("unused") CoursPromotion coursPromo : result.getCoursPromotions()) {
			// initialisation
		}
		for (@SuppressWarnings("unused") Enseignement prerequis: result.getPrerequis()) {
			// initialisation
		}
		return result;
	
	}

	@Override
	public void delete(Integer id) 
	{
		Enseignement enseignement = em.find(Enseignement.class, id);
		em.remove(enseignement);
	}	
	@Override
	public void delete(Enseignement enseignement) {
		enseignement = em.merge(enseignement);
		em.remove(enseignement);
	}

	@Override
	public void create(Enseignement enseignement) {
		em.persist(enseignement);
	}

	@Override
	public Enseignement update(Enseignement enseignement) {
		return em.merge(enseignement);
	}

}
