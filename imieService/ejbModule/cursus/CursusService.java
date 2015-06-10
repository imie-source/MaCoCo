package cursus;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import entities.cursus.CoursCursus;
import entities.cursus.Cursus;
import entities.cursus.ModuleCursus;
import entities.cursus.Periode;
import entities.cursus.UniteFormationCursus;
import entities.enseignement.Enseignement;
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
	@EJB 
	UniteFormationCursusServiceLocal uniteFormationCursusService;

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
		
		for (Cursus cursus : resultList) 
		{
			for (@SuppressWarnings("unused") Periode per : cursus.getPeriodes())
			{
				//Initialisation
			}
			
			for (@SuppressWarnings("unused") UniteFormationCursus uf : cursus.getUniteFormationCursuses())
			{
				//Initialisation
			}
		}

		return resultList;
	}

	
	/**
	 * Cursus particulier et toute son arborescence (2nd arbre graphique)
	 */
	@Override
	public Cursus findById(Integer id) 
	{
		Cursus result = em.find(Cursus.class, id);

		for (@SuppressWarnings("unused") Periode per : result.getPeriodes())
		{
			//Initialisation
		}
		
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
					for (@SuppressWarnings("unused") Enseignement enseignement : cours.getEnseignements()) 
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
		cursus = em.find(Cursus.class, cursus.getCurId());
		List<UniteFormationCursus> uniteFormationCursuses = cursus.getUniteFormationCursuses();
		for (UniteFormationCursus uniteFormationCursus : uniteFormationCursuses) {
			uniteFormationCursusService.delete(uniteFormationCursus);
		}
		em.remove(cursus);
		
	}

}
