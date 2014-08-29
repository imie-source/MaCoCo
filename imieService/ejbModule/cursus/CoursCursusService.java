package cursus;

import java.util.Collection;
import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import entities.cursus.CoursCursus;
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
		em.remove(coursCursus);
	}
	
	
	public List<CoursCursus> findAllByCursus(Integer id) 
	{
		Query queryAllCours = em.createNamedQuery("CoursCursus.findAllByCursus");
		queryAllCours.setParameter("idCursus", id);
		List<CoursCursus> res = queryAllCours.getResultList();
		
		for (CoursCursus coursCursus : res) 
		{
			for (@SuppressWarnings("unused") Savoir savoir : coursCursus.getSavoirs()) 
			{
				//Initialisation
			}
		}
		
		return res;
	}
	


//	@Override
//	public List<CoursCursus> findByModuleId(Integer id) 
//	{
//		CriteriaBuilder cb = em.getCriteriaBuilder();
//
//		CriteriaQuery<CoursCursus> q = cb.createQuery(CoursCursus.class);
//		Root<CoursCursus> c = q.from(CoursCursus.class);
//		Join<CoursCursus, ModuleCursus> p = c.join("cours", JoinType.LEFT);
//
//
//		//initialisation de la liste de criteria
//		List<Predicate> criteria = new ArrayList<Predicate>();
//		criteria.add(cb.equal(p.get("mocId"),id));
//
//		//application de la liste de criterial
//		q.where(criteria.toArray(new Predicate[] {}));
//		//éxecution de la requête
//		List<CoursCursus> result = em.createQuery(q)
//				.getResultList();
//
//		return result;
//	}

}
