package enseignement;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import entities.cursus.CoursCursus;
import entities.enseignement.Enseignement;
import entities.enseignement.RPrerequisEnseignement;
import entities.enseignement.RPrerequisEnseignementPK;
import entities.promotion.CoursPromotion;

/**
 * Session Bean implementation class PromotionService
 */
@Stateless
@LocalBean
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class EnseignementService implements EnseignementServiceLocal {

	@PersistenceContext
	EntityManager em;

	public EnseignementService() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public List<Enseignement> findAllEnseignement() {
		@SuppressWarnings("unchecked")
		List<Enseignement> resultList = em.createNamedQuery(
				"Enseignement.findAll").getResultList();

		for (Enseignement enseignement : resultList) {
			for (@SuppressWarnings("unused")
			CoursCursus coursCursus : enseignement.getCoursCursuses()) {
				// initialisation
			}
			for (@SuppressWarnings("unused")
			CoursPromotion coursPromo : enseignement.getCoursPromotions()) {
				// initialisation
			}
			for (@SuppressWarnings("unused")
			Enseignement prerequis : enseignement.getPrerequis()) {
				// initialisation
			}

		}
		return resultList;
	}

	@Override
	public Enseignement findById(Integer id) {
		Enseignement result = em.find(Enseignement.class, id);
		for (@SuppressWarnings("unused")
		CoursCursus coursCursus : result.getCoursCursuses()) {
			// initialisation
		}
		for (@SuppressWarnings("unused")
		CoursPromotion coursPromo : result.getCoursPromotions()) {
			// initialisation
		}
		for (@SuppressWarnings("unused")
		Enseignement prerequis : result.getPrerequis()) {
			// initialisation
		}
		return result;

	}

	@Override
	public void delete(Integer id) {
		Enseignement enseignement = em.find(Enseignement.class, id);
		em.remove(enseignement);
	}

	@Override
	public void delete(Enseignement enseignement) {
		enseignement = em.merge(enseignement);

		List<Enseignement> prerequisList = enseignement.getPrerequis();
		if (prerequisList != null) {
			RPrerequisEnseignementPK pk = new RPrerequisEnseignementPK();
			pk.setEntId(enseignement.getEntId());
			for (Enseignement prerequis : prerequisList) {
				pk.setEntIdPrerequis(prerequis.getEntId());
				RPrerequisEnseignement tablePrerequis = em.find(
						RPrerequisEnseignement.class, pk);
				em.remove(tablePrerequis);
			}
		}
		String queryString = "SELECT r FROM RPrerequisEnseignement r WHERE r.prerequis = "
				.concat(enseignement.getEntId().toString());
		Query query = em.createQuery(queryString);
		List<RPrerequisEnseignement> tablePrerequis2 = query.getResultList();
		if (!tablePrerequis2.isEmpty()) {
			for (RPrerequisEnseignement rPrerequisEnseignement : tablePrerequis2) {
				em.remove(rPrerequisEnseignement);
			}
		}

		em.remove(enseignement);
	}

	@Override
	public void create(Enseignement enseignement) {
		em.persist(enseignement);
	}

	@Override
	public Enseignement update(Enseignement enseignement) throws Exception {
		//vérification que les prérequis peuvent être affectés à l'enseignement
		List<Enseignement> entTree = new ArrayList<Enseignement>();
		entTree.add(enseignement);
		this.checkPrerequis(entTree);
		
		return em.merge(enseignement);
	}

	private void checkPrerequis(List<Enseignement> entTree) throws Exception {
		//enseignement en cours d'update
		Enseignement updatedEnt = entTree.get(0);
		//dernier enseignement entré dans la liste entTree
		Enseignement enseignement = entTree.get(entTree.size() - 1);

		if (enseignement.getPrerequis() != null) {
			for (Enseignement prerequis : enseignement.getPrerequis()) {
				
				prerequis = this.findById(prerequis.getEntId());
				entTree.add(prerequis);
				
				//vérification que l'enseignementen cours d'update n'est pas déjà un prérequis
				if(updatedEnt.getEntId() == prerequis.getEntId()){
					String ent = updatedEnt.getEntNom().toString();
					String ent2 = entTree.get(1).getEntNom()
							.toString();
					String message = "L'enseignement "
							.concat(ent)
							.concat(" ne peut avoir comme prérequis l'enseignement ")
							.concat(ent2)
							.concat(". \n")
							.concat("Veuillez supprimer ce prérequis avant d'enregistrer.");
					Exception e = new Exception(message);
					throw e;
				}else{
					this.checkPrerequis(entTree);
				}
				
				entTree.remove(prerequis);
			}
		} 
	}
}
