package cursus;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import entities.cursus.CoursCursus;
import entities.cursus.ModuleCursus;

/**
 * Session Bean implementation class ModuleCursusService
 */
@Stateless
@LocalBean
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class ModuleCursusService implements ModuleCursusServiceLocal {

	@PersistenceContext
	EntityManager em;
	
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
		module = em.find(ModuleCursus.class, module.getMocId());
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
//		CriteriaQuery<ModuleCursus> q = cb.createQuery(ModuleCursus.class);
//		Root<ModuleCursus> c = q.from(ModuleCursus.class);
//		Join<ModuleCursus, UniteFormationCursus> p = c.join("module", JoinType.LEFT);
//
//
//		//initialisation de la liste de criteria
//		List<Predicate> criteria = new ArrayList<Predicate>();
//		criteria.add(cb.equal(p.get("ufcId"),id));
//
//		//application de la liste de criteria
//		q.where(criteria.toArray(new Predicate[] {}));
//		//éxecution de la requête
//		List<ModuleCursus> result = em.createQuery(q)
//				.getResultList();
//
//		return result;
//	}

}
