package promotion;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import referentiel.SavoirServiceLocal;
import cursus.CursusServiceLocal;
import enseignement.EnseignementServiceLocal;
import entities.cursus.CoursCursus;
import entities.cursus.Cursus;
import entities.cursus.ModuleCursus;
import entities.cursus.Periode;
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
	@EJB
	SavoirServiceLocal savoirService;
	@EJB
	EnseignementServiceLocal enseignementService;

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
		promotion.setPeriodes(new ArrayList<PeriodePromotion>());
		em.persist(promotion);
		Cursus cursus = cursusService.findById(promotion.getCursus().getCurId());
		
		List<Periode> periodeList = cursus.getPeriodes();
		if(!periodeList.isEmpty()){			
			for (Periode periode : periodeList) {
				PeriodePromotion periodePromo = new PeriodePromotion();
				periodePromo.setPromotion(promotion);
				periodePromo.setPerproNom(periode.getPerNom());
				periodePromo.setPerproNbjours(periode.getPerNbjours());
				em.persist(periodePromo);
			}
		}

		
		List<UniteFormationCursus> ufCursuses = cursus.getUniteFormationCursuses();
		if(!ufCursuses.isEmpty()){			
			for (UniteFormationCursus ufCursus : ufCursuses) {
				UniteFormationPromotion ufPromotion = new UniteFormationPromotion();
				ufPromotion.setPromotion(promotion);
				ufPromotion.setUfcId(ufCursus.getUfcId());
				ufPromotion.setUfpNom(ufCursus.getUfcNom());
				ufPromotion.setUfpObjectifs(ufCursus.getUfcObjectifs());
				ufPromotion.setModulePromotions(new ArrayList<ModulePromotion>());
				em.persist(ufPromotion);
				
				List<ModuleCursus> moduleCursuses = ufCursus.getModuleCursuses();
				if(moduleCursuses.isEmpty()){
					continue;
				}
				for (ModuleCursus moduleCursus : moduleCursuses) {
					ModulePromotion modulePromotion = new ModulePromotion();
					modulePromotion.setUniteFormationPromotion(ufPromotion);
					modulePromotion.setMocId(moduleCursus.getMocId());
					modulePromotion.setMopIntitule(moduleCursus.getMocIntitule());
					modulePromotion.setMopObjectifs(moduleCursus.getMocObjectifs());
					modulePromotion.setCoursPromotions(new ArrayList<CoursPromotion>());
					em.persist(modulePromotion);
					
					List<CoursCursus> coursCursuses = moduleCursus.getCoursCursuses();
					if(coursCursuses.isEmpty()){
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
						em.persist(coursPromotion);
						coursPromotion = em.merge(coursPromotion);
						
						
						for (Savoir savoir : coursCursus.getSavoirs()){
							Savoir sav = savoirService.findById(savoir.getSavId());
							List <CoursPromotion> coursPros = sav.getCoursPromotions();
							coursPros.add(coursPromotion);
							sav.setCoursPromotions(coursPros);
							sav = em.merge(sav);
						}
						for (Enseignement enseignement : coursCursus.getEnseignements()){
							Enseignement ent = enseignementService.findById(enseignement.getEntId());
							List <CoursPromotion> coursPros = ent.getCoursPromotions();
							coursPros.add(coursPromotion);
							ent.setCoursPromotions(coursPros);
							ent=em.merge(ent);
						}
						
						
					}
				}
			}
		}
		
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
