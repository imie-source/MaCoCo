package cursus;

import java.util.ArrayList;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import entities.cursus.CoursCursus;
import entities.cursus.Cursus;
import entities.cursus.Periode;
import entities.cursus.UniteFormationCursus;

/**
 * Session Bean implementation class PeriodeCursus
 */
@Stateless
@LocalBean
public class PeriodeCursusService implements PeriodeCursusServiceLocal {
	
	@PersistenceContext
	EntityManager em;

	@EJB
	CursusServiceLocal cursusService;
	@EJB
	CoursCursusServiceLocal coursCursusService; 
	
	/**
     * Default constructor. 
     */
    public PeriodeCursusService() 
    {
        // TODO Auto-generated constructor stub
    }

	@Override
	public Periode findById(Integer id) 
	{
		Periode result = em.find(Periode.class, id);
		return result;
	}

	@Override
	public void delete(Periode periode) 
	{
		periode = em.find(Periode.class, periode.getPerId());
		em.remove(periode);
	}

	@Override
	public void create(Periode periode) 
	{
		em.persist(periode);
	}

	@Override
	public Periode update(Periode periode)
	{
		
		return em.merge(periode);
	}

}
