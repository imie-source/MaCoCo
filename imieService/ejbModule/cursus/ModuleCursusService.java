package cursus;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import promotion.ModulePromotionServiceLocal;
import entities.cursus.CoursCursus;
import entities.cursus.ModuleCursus;
import entities.promotion.ModulePromotion;

/**
 * Session Bean implementation class ModuleCursusService
 */
@Stateless
@LocalBean
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class ModuleCursusService implements ModuleCursusServiceLocal {

	@PersistenceContext
	EntityManager em;
	@EJB 
	CoursCursusServiceLocal coursCursusService;
	@EJB
	ModulePromotionServiceLocal modulePromotionService;
	
    /**
     * Default constructor. 
     */
    public ModuleCursusService() 
    {
    	// TODO Auto-generated constructor stub
    }

	@Override
	public ModuleCursus findById(Integer id) {
		ModuleCursus result = em.find(ModuleCursus.class, id);
		
		for (@SuppressWarnings("unused") CoursCursus cours : result.getCoursCursuses()) 
		{
			//Initialisation
		}
		
		return result;
	}

	@Override
	public void delete(ModuleCursus module) 
	{
		
		String queryString = "SELECT m FROM ModulePromotion m WHERE m.mocId = "
				.concat(module.getMocId().toString());
		Query query = em.createQuery(queryString);
		List<ModulePromotion> modulePromotionList = query.getResultList();
		for (ModulePromotion modulePromotion : modulePromotionList) {
			modulePromotionService.delete(modulePromotion);
		}
		
		module = em.find(ModuleCursus.class, module.getMocId());
		List<CoursCursus> coursCursuses = module.getCoursCursuses();
		for (CoursCursus coursCursus : coursCursuses) {
			//coursCursus.setModuleCursus(null);
			coursCursusService.delete(coursCursus);
		}
		em.remove(module);
		
	}

	@Override
	public void create(ModuleCursus module) 
	{
		em.persist(module);
	}

	@Override
	public ModuleCursus update(ModuleCursus module) {
		return em.merge(module);
	}

//	@Override
//	public List<ModuleCursus> findByUniteFormationId(Integer id) 
//	{
//		CriteriaBuilder cb = em.getCriteriaBuilder();
//
//		CriteriaQuery<ModuleCursus> queryModule = cb.createQuery(ModuleCursus.class);
//		Root<ModuleCursus> rootModule = queryModule.from(ModuleCursus.class);
//		Join<ModuleCursus, UniteFormationCursus> joinModule = rootModule.join("module", JoinType.LEFT);
//
//
//		//initialisation de la liste de criteria
//		List<Predicate> criteria = new ArrayList<Predicate>();
//		criteria.add(cb.equal(joinModule.get("ufcId"),id));
//
	
//		//application de la liste de criteria
//		queryModule.where(criteria.toArray(new Predicate[] {}));
	
	
//		//éxecution de la requête
//		List<ModuleCursus> result = em.createQuery(queryModule)
//				.getResultList();
//
//		return result;
//	}
	
	
	
	
	

}
