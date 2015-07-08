package cursus;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.core.Response;

import entities.cursus.CoursCursus;
import entities.cursus.Cursus;
import entities.cursus.ModuleCursus;
import entities.cursus.Periode;
import entities.cursus.UniteFormationCursus;
import entities.referentiel.Savoir;

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
	@EJB
	ModuleCursusServiceLocal moduleCursusService;
	@EJB
	UniteFormationCursusServiceLocal ufCursusService;

	/**
	 * Default constructor.
	 */
	public PeriodeCursusService() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public Periode findById(Integer id) {
		Periode result = em.find(Periode.class, id);
		return result;
	}

	@Override
	public void delete(Periode periode) {
		periode = em.find(Periode.class, periode.getPerId());
		em.remove(periode);
	}

	@Override
	public void create(Periode periode) {
		em.persist(periode);
	}

	@Override
	public Periode update(Periode periode) {

		return em.merge(periode);
	}

	@Override
	public List<Periode> buildSchemaPedago(Integer id) {

		Cursus cursus = cursusService.findById(id);
		em.detach(cursus);

		Double periodeNbJours = 0.0;

		List<CoursCursus> coursList = coursCursusService.findAllByCursus(id);
		List<Periode> periodeList = new ArrayList<Periode>();

		Integer ordreCours = 0;

		
		for (Periode periode : cursus.getPeriodes()) {

			// On crée un nouveau cursus pour chaque période avec les données de
			// cursus
			Cursus newCursus = new Cursus();
			newCursus.setCurId(cursus.getCurId());
			newCursus.setCurNom(cursus.getCurNom());
			newCursus.setUniteFormationCursuses(cursus
					.getUniteFormationCursuses());
			periode.setCursus(newCursus);

			periodeNbJours += (double) periode.getPerNbjours();
			Double coursNbJoursTot = 0.0;
			List<UniteFormationCursus> ufListForPeriode = new ArrayList<UniteFormationCursus>();

			for (CoursCursus cours : coursList) {

				em.detach(cours);

				if ((coursNbJoursTot + cours.getCocDuree()) > periodeNbJours) {
					break; // cours à ajouter dans la prochaine période
				} else if (ordreCours >= cours.getCocOrdre()) {
					continue; // cours déjà ajouté dans une précédente période
				}

				coursNbJoursTot += cours.getCocDuree();
				ordreCours = cours.getCocOrdre();

				ModuleCursus module = moduleCursusService.findById(cours
						.getModuleCursus().getMocId());
				em.detach(module);

				UniteFormationCursus uf = ufCursusService.findById(module
						.getUniteFormationCursus().getUfcId());
				em.detach(uf);

				uf.setCursus(null);
				uf.setModuleCursuses(new ArrayList<ModuleCursus>());

				module.setUniteFormationCursus(null);
				module.setCoursCursuses(new ArrayList<CoursCursus>());

				cours.setModuleCursus(null);
				cours.setEnseignements(null);
				for (Savoir savoir : cours.getSavoirs()) {
					savoir.setCompetencePro(null);
					savoir.setCoursCursuses(null);
					savoir.setCoursPromotions(null);
				}

				Boolean addUf = true;
				Boolean addModule = true;
				// vérification que l'uf n'est pas déjà été ajoutée
				for (UniteFormationCursus ufCursus : ufListForPeriode) {
					if (ufCursus.getUfcId() == uf.getUfcId()) {
						addUf = false;
						// vérification que le module n'est pas déjà été ajouté
						for (ModuleCursus moduleCursus : ufCursus
								.getModuleCursuses()) {

							if (moduleCursus.getMocId() == module.getMocId()) {
								addModule = false;
								moduleCursus.getCoursCursuses().add(cours);
							}
						}
						if (addModule) {
							module.getCoursCursuses().add(cours);
							ufCursus.getModuleCursuses().add(module);
						}
					}
				}
				if (addUf) {
					module.getCoursCursuses().add(cours);
					uf.getModuleCursuses().add(module);
					ufListForPeriode.add(uf);
				}

			}
			periode.getCursus().setUniteFormationCursuses(ufListForPeriode);
			periodeList.add(periode);
		}
		
		

		return periodeList;
	}

}
