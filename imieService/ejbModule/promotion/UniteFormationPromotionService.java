package promotion;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import entities.promotion.ModulePromotion;
import entities.promotion.UniteFormationPromotion;

/**
 * Session Bean implementation class UniteFormationPromotionService
 */
@Stateless
@LocalBean
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class UniteFormationPromotionService implements UniteFormationPromotionServiceLocal {

	@PersistenceContext
	EntityManager em;
	
	@EJB 
	ModulePromotionServiceLocal modulePromotionService;
	/**
	 * Default constructor. 
	 */
	public UniteFormationPromotionService() 
	{
		// TODO Auto-generated constructor stub
	}

	
	/**
	 * UniteFormation particuliere
	 */
	@Override
	public UniteFormationPromotion findById(Integer id) 
	{
		UniteFormationPromotion result = em.find(UniteFormationPromotion.class, id);
		
		for (@SuppressWarnings("unused") ModulePromotion modulePromotion : result.getModulePromotions()) 
		{
			//Initialisation
		}

		return result;
	}

	@Override
	public void delete(UniteFormationPromotion uniteFormation) 
	{
		uniteFormation = em.find(UniteFormationPromotion.class, uniteFormation.getUfpId());
		List<ModulePromotion> modulePromotions = uniteFormation.getModulePromotions();
		for (ModulePromotion modulePromotion : modulePromotions) {
			modulePromotionService.delete(modulePromotion);;
		}
		em.remove(uniteFormation);
	}

	@Override
	public void create(UniteFormationPromotion uniteFormation) 
	{
		em.persist(uniteFormation);
	}

	@Override
	public UniteFormationPromotion update(UniteFormationPromotion uniteFormation) 
	{
		em.merge(uniteFormation);
		return em.merge(uniteFormation);
	}


}