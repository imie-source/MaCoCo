package promotion;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import cursus.CursusServiceLocal;
import entities.cursus.CoursCursus;
import entities.cursus.Cursus;
import entities.cursus.ModuleCursus;
import entities.cursus.UniteFormationCursus;
import entities.enseignement.Enseignement;
import entities.promotion.CoursPromotion;
import entities.promotion.ModulePromotion;
import entities.promotion.PeriodePromotion;
import entities.promotion.Promotion;
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
	@EJB
	CursusServiceLocal cursusService;
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
	public Promotion update(Promotion promotion) 
	{
		promotion = em.merge(promotion);
		return em.merge(promotion);
	}

	@Override
	public void create(Promotion promotion) 
	{
		promotion.setUniteFormationPromotions(new ArrayList<UniteFormationPromotion>());
		Cursus cursus = cursusService.findById(promotion.getCursus().getCurId());
		
		List<UniteFormationCursus> ufCursuses = cursus.getUniteFormationCursuses();
		if(!ufCursuses.isEmpty()){			
			for (UniteFormationCursus ufCursus : ufCursuses) {
				UniteFormationPromotion ufPromotion = new UniteFormationPromotion();
				ufPromotion.setPromotion(promotion);
				ufPromotion.setUfcId(ufCursus.getUfcId());
				ufPromotion.setUfpNom(ufCursus.getUfcNom());
				ufPromotion.setUfpObjectifs(ufCursus.getUfcObjectifs());
				ufPromotion.setModulePromotions(new ArrayList<ModulePromotion>());
				
				List<ModuleCursus> moduleCursuses = ufCursus.getModuleCursuses();
				if(moduleCursuses.isEmpty()){
					promotion.addUniteFormationPromotion(ufPromotion);
					continue;
				}
				for (ModuleCursus moduleCursus : moduleCursuses) {
					ModulePromotion modulePromotion = new ModulePromotion();
					modulePromotion.setUniteFormationPromotion(ufPromotion);
					modulePromotion.setMocId(moduleCursus.getMocId());
					modulePromotion.setMopIntitule(moduleCursus.getMocIntitule());
					modulePromotion.setMopObjectifs(moduleCursus.getMocObjectifs());
					modulePromotion.setCoursPromotions(new ArrayList<CoursPromotion>());
					
					List<CoursCursus> coursCursuses = moduleCursus.getCoursCursuses();
					if(coursCursuses.isEmpty()){
						ufPromotion.addModulePromotion(modulePromotion);
						continue;
					}
					for (CoursCursus coursCursus : coursCursuses) {
						CoursPromotion coursPromotion = new CoursPromotion();
						coursPromotion.setModulePromotion(modulePromotion);
						coursPromotion.setCocId(coursCursus.getCocId());
						coursPromotion.setCopIntitule(coursCursus.getCocIntitule());
						coursPromotion.setCopCommentaires(coursCursus.getCocCommentaires());
						coursPromotion.setCopDuree(coursCursus.getCocDuree());
						coursPromotion.setCopEvaluation(coursCursus.getCocEvaluation());
						coursPromotion.setCopObjectifs(coursCursus.getCocObjectifs());
						coursPromotion.setCopOrdre(coursCursus.getCocOrdre());
						coursPromotion.setSavoirs(coursCursus.getSavoirs());
						em.persist(coursPromotion);
						coursPromotion=em.merge(coursPromotion);
						modulePromotion.getCoursPromotions().add(coursPromotion);
						
						
					}
					em.persist(modulePromotion);
					modulePromotion=em.merge(modulePromotion);
					ufPromotion.getModulePromotions().add(modulePromotion);
				}
				em.persist(ufPromotion);
				ufPromotion=em.merge(ufPromotion);
				promotion.getUniteFormationPromotions().add(ufPromotion);
			}
		}
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
