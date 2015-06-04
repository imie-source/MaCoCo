package promotion;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import entities.promotion.PeriodePromotion;

/**
 * Session Bean implementation class PeriodePromotion
 */
@Stateless
@LocalBean
public class PeriodePromotionService implements PeriodePromotionServiceLocal {
	
	@PersistenceContext
	EntityManager em;

    /**
     * Default constructor. 
     */
    public PeriodePromotionService() 
    {
        // TODO Auto-generated constructor stub
    }

	@Override
	public PeriodePromotion findById(Integer id) 
	{
		PeriodePromotion result = em.find(PeriodePromotion.class, id);
		return result;
	}

	@Override
	public void delete(PeriodePromotion periode) 
	{
		periode = em.find(PeriodePromotion.class, periode.getPerproId());
		em.remove(periode);
	}

	@Override
	public void create(PeriodePromotion periode) 
	{
		em.persist(periode);
	}

	@Override
	public PeriodePromotion update(PeriodePromotion periode)
	{
		return em.merge(periode);
	}

}
