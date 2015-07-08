package promotion;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import entities.cursus.CoursCursus;
import entities.cursus.ModuleCursus;
import entities.cursus.UniteFormationCursus;
import entities.promotion.CoursPromotion;
import entities.promotion.ModulePromotion;
import entities.promotion.PeriodePromotion;
import entities.promotion.Promotion;
import entities.promotion.UniteFormationPromotion;
import entities.referentiel.Savoir;

/**
 * Session Bean implementation class PeriodePromotion
 */
@Stateless
@LocalBean
public class PeriodePromotionService implements PeriodePromotionServiceLocal {

	@PersistenceContext
	EntityManager em;
	@EJB
	PromotionServiceLocal promotionService;
	@EJB
	CoursPromotionServiceLocal coursPromotionService;
	@EJB
	ModulePromotionServiceLocal modulePromotionService;
	@EJB
	UniteFormationPromotionServiceLocal ufPromotionService;

	/**
	 * Default constructor.
	 */
	public PeriodePromotionService() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public PeriodePromotion findById(Integer id) {
		PeriodePromotion result = em.find(PeriodePromotion.class, id);
		return result;
	}

	@Override
	public void delete(PeriodePromotion periode) {
		periode = em.find(PeriodePromotion.class, periode.getPerproId());
		em.remove(periode);
	}

	@Override
	public void create(PeriodePromotion periode) {
		em.persist(periode);
	}

	@Override
	public PeriodePromotion update(PeriodePromotion periode) {
		return em.merge(periode);
	}

	@Override
	public List<PeriodePromotion> buildSchemaPedago(Integer id) {

		Promotion promotion = promotionService.findById(id);
		em.detach(promotion);

		Double periodeNbJours = 0.0;

		List<CoursPromotion> coursList = coursPromotionService
				.findAllByPromotion(id);
		List<PeriodePromotion> periodeList = new ArrayList<PeriodePromotion>();

		Integer ordreCours = 0;

		for (PeriodePromotion periode : promotion.getPeriodes()) {
			// On crée une nouvelle promotion pour chaque période avec les
			// données de promotion
			Promotion newPromotion = new Promotion();
			newPromotion.setProId(promotion.getProId());
			newPromotion.setProNom(promotion.getProNom());
			newPromotion.setUniteFormationPromotions(promotion
					.getUniteFormationPromotions());
			periode.setPromotion(newPromotion);

			periodeNbJours += (double) periode.getPerproNbjours();
			Double coursNbJoursTot = 0.0;
			List<UniteFormationPromotion> ufListForPeriode = new ArrayList<UniteFormationPromotion>();

			for (CoursPromotion cours : coursList) {

				em.detach(cours);

				if ((coursNbJoursTot + cours.getCopDuree()) > periodeNbJours) {
					break; // cours à ajouter dans la prochaine période.
				} else if (ordreCours >= cours.getCopOrdre()) {
					continue; // cours déjà ajouté dans une précédente période
				}

				coursNbJoursTot += cours.getCopDuree();
				ordreCours = cours.getCopOrdre();

				ModulePromotion module = modulePromotionService.findById(cours
						.getModulePromotion().getMopId());
				em.detach(module);

				UniteFormationPromotion uf = ufPromotionService.findById(module
						.getUniteFormationPromotion().getUfpId());
				em.detach(uf);

				uf.setPromotion(null);
				uf.setModulePromotions(new ArrayList<ModulePromotion>());

				module.setUniteFormationPromotion(null);
				module.setCoursPromotions(new ArrayList<CoursPromotion>());

				cours.setModulePromotion(null);
				cours.setEnseignements(null);
				for (Savoir savoir : cours.getSavoirs()) {
					savoir.setCompetencePro(null);
					savoir.setCoursCursuses(null);
					savoir.setCoursPromotions(null);
				}

				Boolean addUf = true;
				Boolean addModule = true;
				// vérification que l'uf n'est pas déjà été ajoutée
				for (UniteFormationPromotion ufPromotion : ufListForPeriode) {
					if (ufPromotion.getUfpId() == uf.getUfpId()) {
						addUf = false;
						// vérification que le module n'est pas déjà été ajouté
						for (ModulePromotion modulePromotion : ufPromotion
								.getModulePromotions()) {

							if (modulePromotion.getMopId() == module.getMopId()) {
								addModule = false;
								modulePromotion.getCoursPromotions().add(cours);
							}
						}
						if (addModule) {
							module.getCoursPromotions().add(cours);
							ufPromotion.getModulePromotions().add(module);
						}
					}
				}
				if (addUf) {
					module.getCoursPromotions().add(cours);
					uf.getModulePromotions().add(module);
					ufListForPeriode.add(uf);
				}

			}
			periode.getPromotion()
					.setUniteFormationPromotions(ufListForPeriode);
			periodeList.add(periode);
		}

		return periodeList;

	}

}
