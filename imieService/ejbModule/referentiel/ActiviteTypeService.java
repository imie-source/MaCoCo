package referentiel;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import entities.referentiel.ActiviteType;
import entities.referentiel.CompetencePro;

/**
 * Session Bean implementation class ActiviteTypeService
 */
@Stateless
@LocalBean
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class ActiviteTypeService implements ActiviteTypeServiceLocal {
	
	@PersistenceContext
	EntityManager em;

    /**
     * Default constructor. 
     */
    public ActiviteTypeService() {
        // TODO Auto-generated constructor stub
    }

	@Override
	public ActiviteType findById(Integer id) 
	{
		ActiviteType result = em.find(ActiviteType.class, id);
		for (@SuppressWarnings("unused") CompetencePro competencePro : result.getCompetencePros()) 
		{
			//Initialisation
		}
		return result;
	}

	@Override
	public void create(ActiviteType activiteType) 
	{
		em.persist(activiteType);
		
	}

	@Override
	public void delete(Integer id) 
	{
		ActiviteType activiteType = em.find(ActiviteType.class, id);
		em.remove(activiteType);
	}

	@Override
	public ActiviteType update(ActiviteType activiteType) 
	{
		return em.merge(activiteType);
	}

}
