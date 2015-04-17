package referentiel;

import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import entities.referentiel.CompetencePro;
import entities.referentiel.Savoir;


/**
 * Session Bean implementation class CompetenceProService
 */
@Stateless
@LocalBean
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class CompetenceProService implements CompetenceProServiceLocal {

	@PersistenceContext
	EntityManager em;
	
    /**
     * Default constructor. 
     */
    public CompetenceProService() {
        // TODO Auto-generated constructor stub
    }

	@Override
	public CompetencePro findById(Integer id) 
	{
		CompetencePro result = em.find(CompetencePro.class, id);
		for (@SuppressWarnings("unused") Savoir savoir : result.getSavoirs()) 
		{
			//Initialisation
		}
		return result;
	}

	@Override
	public void create(CompetencePro competencePro) 
	{
		em.persist(competencePro);
	}

	@Override
	public void delete(Integer id) 
	{
		CompetencePro competencePro = em.find(CompetencePro.class, id);
		List<Savoir> savoirs = competencePro.getSavoirs();
		for (Savoir savoir : savoirs) {
			savoir.setCompetencePro(null);
		}
		em.remove(competencePro);
	}

	@Override
	public CompetencePro update(CompetencePro competencePro) 
	{
		return em.merge(competencePro);
	}

}
