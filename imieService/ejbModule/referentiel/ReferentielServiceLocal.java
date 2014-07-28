package referentiel;

import javax.ejb.Local;

import entities.referentiel.Referentiel;

@Local
public interface ReferentielServiceLocal 
{
	Referentiel findById(Integer id);
	
	void create(Referentiel referentiel);

	void delete(Integer id);

	Referentiel update(Referentiel referentiel);
}
