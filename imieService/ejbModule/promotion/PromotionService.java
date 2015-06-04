package promotion;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import entities.promotion.CoursPromotion;
import entities.promotion.PeriodePromotion;
import entities.promotion.Promotion;
import entities.promotion.ModulePromotion;
import entities.promotion.UniteFormationPromotion;
import entities.referentiel.Savoir;



/**
 * Session Bean implementation class PromotionService
 */
@Stateless
@LocalBean
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class PromotionService implements PromotionServiceLocal {

	@PersistenceContext
	EntityManager em;
	@EJB 
	UniteFormationPromotionServiceLocal uniteFormationPromotionService;

	/**
	 * Default constructor. 
	 */
	public PromotionService() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * Getter pour l'ensemble des promotion (1er arbre graphique)
	 */
	@Override
	public List<Promotion> findAllPromotion() 
	{
		@SuppressWarnings("unchecked")
		List<Promotion> resultList = em.createNamedQuery("Promotion.findAll").getResultList();
		
		for (Promotion promotion : resultList) 
		{
			for (@SuppressWarnings("unused") PeriodePromotion per : promotion.getPeriodes())
			{
				//Initialisation
			}
			
			for (@SuppressWarnings("unused") UniteFormationPromotion uf : promotion.getUniteFormationPromotions())
			{
				//Initialisation
			}
		}

		return resultList;
	}

	
	/**
	 * Promotion particulier et toute son arborescence (2nd arbre graphique)
	 */
	@Override
	public Promotion findById(Integer id) 
	{
		Promotion result = em.find(Promotion.class, id);

		for (@SuppressWarnings("unused") PeriodePromotion per : result.getPeriodes())
		{
			//Initialisation
		}
		
		for (UniteFormationPromotion uf : result.getUniteFormationPromotions()) 
		{
			for (ModulePromotion module : uf.getModulePromotions()) 
			{
				for (CoursPromotion cours : module.getCoursPromotions()) 
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
	public Promotion update(Promotion promotion) 
	{
		promotion = em.merge(promotion);
		return em.merge(promotion);
	}

	@Override
	public void create(Promotion promotion) 
	{
		em.persist(promotion);
	}

	@Override
	public void delete(Promotion promotion) 
	{
		promotion = em.find(Promotion.class, promotion.getProId());
		List<UniteFormationPromotion> uniteFormationPromotions = promotion.getUniteFormationPromotions();
		for (UniteFormationPromotion uniteFormationPromotion : uniteFormationPromotions) {
			uniteFormationPromotionService.delete(uniteFormationPromotion);
		}
		em.remove(promotion);
		
	}

}
