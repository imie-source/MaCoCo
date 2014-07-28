package cursus;

import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import entities.cursus.CoursCursus;
import entities.cursus.Cursus;
import entities.cursus.ModuleCursus;
import entities.cursus.UniteFormationCursus;
import entities.referentiel.Savoir;



/**
 * Session Bean implementation class CursusService
 */
@Stateless
@LocalBean
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class CursusService implements CursusServiceLocal {

	@PersistenceContext
	EntityManager em;

	/**
	 * Default constructor. 
	 */
	public CursusService() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * Getter pour l'ensemble des cursus (1er arbre graphique)
	 */
	@Override
	public List<Cursus> findAllCursus() 
	{
		@SuppressWarnings("unchecked")
		List<Cursus> resultList = em.createNamedQuery("Cursus.findAll").getResultList();

		return resultList;
	}

	
	/**
	 * Cursus particulier et toute son arborescence (2nd arbre graphique)
	 */
	@Override
	public Cursus findById(Integer id) 
	{
		Cursus result = em.find(Cursus.class, id);

		for (UniteFormationCursus uf : result.getUniteFormationCursuses()) 
		{
			for (ModuleCursus module : uf.getModuleCursuses()) 
			{
				for (CoursCursus cours : module.getCoursCursuses()) 
				{
					for (@SuppressWarnings("unused") Savoir savoir : cours.getSavoirs()) 
					{
						//Initialisation
					}
				}
			}
		}
		
		return result;
	}



	@Override
	public Cursus update(Cursus cursus) 
	{
		cursus = em.merge(cursus);
		return em.merge(cursus);
	}

	@Override
	public void create(Cursus cursus) 
	{
		em.persist(cursus);
	}

	@Override
	public void delete(Cursus cursus) 
	{
		em.remove(cursus);
	}

}
