package referentiel;

import java.util.List;

import javax.ejb.Local;

import entities.referentiel.Referentiel;

@Local
public interface ReferentielServiceLocal 
{
	List<Referentiel> findAllReferentiel();
	
	Referentiel findById(Integer id);
	
	void create(Referentiel referentiel);

	void delete(Integer id);

	Referentiel update(Referentiel referentiel);
}
