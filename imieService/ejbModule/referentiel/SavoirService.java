package referentiel;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import entities.cursus.CoursCursus;
import entities.referentiel.Savoir;

/**
 * Session Bean implementation class SavoirService
 */
@Stateless
@LocalBean
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class SavoirService implements SavoirServiceLocal {

	@PersistenceContext
	EntityManager em;
	
    /**
     * Default constructor. 
     */
    public SavoirService() {
        // TODO Auto-generated constructor stub
    }

	@Override
	public void delete(Integer id) 
	{
		Savoir savoir = em.find(Savoir.class, id);
		em.remove(savoir);
		
	}
	@Override
	public void delete(Savoir savoir) 
	{
		savoir = em.merge(savoir);
		em.remove(savoir);
	}

	@Override
	public void create(Savoir savoir) 
	{
		em.persist(savoir);
	}

	@Override
	public Savoir update(Savoir savoir) 
	{
		return em.merge(savoir);
	}

	@Override
	public Savoir findById(Integer id) {
		Savoir result = em.find(Savoir.class, id);
		
		for (@SuppressWarnings("unused") CoursCursus cours : result.getCoursCursuses()) 
		{
			//Initialisation
		}
		
		return result;
	}
}
