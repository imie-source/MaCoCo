package referentiel;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import entities.cursus.CoursCursus;
import entities.referentiel.ActiviteType;
import entities.referentiel.CompetencePro;
import entities.referentiel.Referentiel;
import entities.referentiel.Savoir;

/**
 * Session Bean implementation class ReferentielService
 */
@Stateless
@LocalBean
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class ReferentielService implements ReferentielServiceLocal {
	
	@PersistenceContext
	EntityManager em;
	@EJB
	ActiviteTypeServiceLocal activiteTypeService; 
    /**
     * Default constructor. 
     */
    public ReferentielService() {
        // TODO Auto-generated constructor stub
    }

	@Override
	public List<Referentiel> findAllReferentiel() {
		
		 @SuppressWarnings("unchecked")
		List<Referentiel> referentiels = em.createNamedQuery("Referentiel.findAll").getResultList();
		 for (Referentiel referentiel : referentiels) {
			 for (ActiviteType aT : referentiel.getActiviteTypes()){
				 //initialisation des données
			 }
		}
		
		return referentiels;
	}

	@Override
	public Referentiel findById(Integer id) {
		
		Referentiel result = em.find(Referentiel.class, id);
		
		for (ActiviteType activiteType : result.getActiviteTypes()) 
		{
			for (CompetencePro competencePro : activiteType.getCompetencePros()) 
			{
				for (Savoir savoir : competencePro.getSavoirs()) 
				{
					for (@SuppressWarnings("unused") CoursCursus coursCursus : savoir.getCoursCursuses()) 
					{
						//Initialisation
					}
				}
			}
		}
		return result;
	}

	@Override
	public void create(Referentiel referentiel) 
	{
		em.persist(referentiel);
	}

	@Override
	public void delete(Integer id)
	{
		Referentiel referentiel = em.find(Referentiel.class, id);
		List<ActiviteType> activiteTypes = referentiel.getActiviteTypes();
		for (ActiviteType activiteType : activiteTypes) {
			activiteTypeService.delete(activiteType.getActId());
		}
		em.remove(referentiel);
	}

	@Override
	public Referentiel update(Referentiel referentiel) 
	{
		return em.merge(referentiel);
	}


}
