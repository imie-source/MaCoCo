package promotion;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import entities.promotion.CoursPromotion;
import entities.promotion.ModulePromotion;

/**
 * Session Bean implementation class ModulePromotionService
 */
@Stateless
@LocalBean
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class ModulePromotionService implements ModulePromotionServiceLocal {

	@PersistenceContext
	EntityManager em;
	@EJB 
	CoursPromotionServiceLocal coursPromotionService;
	
    /**
     * Default constructor. 
     */
    public ModulePromotionService() 
    {
    	// TODO Auto-generated constructor stub
    }

	@Override
	public ModulePromotion findById(Integer id) {
		ModulePromotion result = em.find(ModulePromotion.class, id);
		
		for (@SuppressWarnings("unused") CoursPromotion cours : result.getCoursPromotions()) 
		{
			//Initialisation
		}
		
		return result;
	}

	@Override
	public void delete(ModulePromotion module) 
	{
		module = em.find(ModulePromotion.class, module.getMopId());
		List<CoursPromotion> coursPromotions = module.getCoursPromotions();
		for (CoursPromotion coursPromotion : coursPromotions) {
			coursPromotionService.delete(coursPromotion);
		}
		em.remove(module);
		
	}

	@Override
	public void create(ModulePromotion module) 
	{
		em.persist(module);
	}

	@Override
	public ModulePromotion update(ModulePromotion module) {
		return em.merge(module);
	}
}
