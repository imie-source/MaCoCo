package cursus;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import promotion.UniteFormationPromotionServiceLocal;
import entities.cursus.ModuleCursus;
import entities.cursus.UniteFormationCursus;
import entities.enseignement.RPrerequisEnseignement;
import entities.promotion.UniteFormationPromotion;

/**
 * Session Bean implementation class UniteFormationCursusService
 */
@Stateless
@LocalBean
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class UniteFormationCursusService implements UniteFormationCursusServiceLocal {

	@PersistenceContext
	EntityManager em;
	
	@EJB 
	ModuleCursusServiceLocal moduleCursusService;
	@EJB 
	UniteFormationPromotionServiceLocal ufPromotionService;
	/**
	 * Default constructor. 
	 */
	public UniteFormationCursusService() 
	{
		// TODO Auto-generated constructor stub
	}

//	@Override
//	public List<UniteFormationCursus> findAllUniteFormationCursus() 
//	{
//		@SuppressWarnings("unchecked")
//		List<UniteFormationCursus> resultList = em.createNamedQuery("UniteFormationCursus.findAll").getResultList();
//		for (UniteFormationCursus uniteFormationCursus : resultList) 
//		{
//			for (@SuppressWarnings("unused") ModuleCursus moduleCursus : uniteFormationCursus.getModuleCursuses()) 
//			{
//				//Initialisation
//			}
//		}
//		return resultList;
//	}

	
	/**
	 * UniteFormation particuliere
	 */
	@Override
	public UniteFormationCursus findById(Integer id) 
	{
		UniteFormationCursus result = em.find(UniteFormationCursus.class, id);
		
		for (@SuppressWarnings("unused") ModuleCursus moduleCursus : result.getModuleCursuses()) 
		{
			//Initialisation
		}

		return result;
	}

	@Override
	public void delete(UniteFormationCursus uniteFormation) 
	{
		uniteFormation = em.find(UniteFormationCursus.class, uniteFormation.getUfcId());

		String queryString = "SELECT u FROM UniteFormationPromotion u WHERE u.ufcId = "
				.concat(uniteFormation.getUfcId().toString());
		Query query = em.createQuery(queryString);
		List<UniteFormationPromotion> ufPromotionList = query.getResultList();
		for (UniteFormationPromotion uniteFormationPromotion : ufPromotionList) {
			ufPromotionService.delete(uniteFormationPromotion);
		}
		List<ModuleCursus> moduleCursuses = uniteFormation.getModuleCursuses();
		for (ModuleCursus moduleCursus : moduleCursuses) {
			moduleCursusService.delete(moduleCursus);;
		}
		em.remove(uniteFormation);
	}

	@Override
	public void create(UniteFormationCursus uniteFormation) 
	{
		em.persist(uniteFormation);
	}

	@Override
	public UniteFormationCursus update(UniteFormationCursus uniteFormation) 
	{
		em.merge(uniteFormation);
		return em.merge(uniteFormation);
	}

//	@Override
//	public List<UniteFormationCursus> findByCursusId(Integer id) 
//	{
//		CriteriaBuilder cb = em.getCriteriaBuilder();
//
//		CriteriaQuery<UniteFormationCursus> q = cb.createQuery(UniteFormationCursus.class);
//		Root<UniteFormationCursus> c = q.from(UniteFormationCursus.class);
//		Join<UniteFormationCursus, Cursus> p = c.join("cursus", JoinType.LEFT);
//
//
//		//initialisation de la liste de criteria
//		List<Predicate> criteria = new ArrayList<Predicate>();
//		criteria.add(cb.equal(p.get("curId"),id));
//
//		//application de la liste de criteria
//		q.where(criteria.toArray(new Predicate[] {}));
//		//éxecution de la requête
//		List<UniteFormationCursus> result = em.createQuery(q)
//				.getResultList();
//
//		return result;
//	}
}