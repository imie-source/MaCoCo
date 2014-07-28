package referentiel;

import javax.ejb.Local;

import entities.referentiel.Savoir;

@Local
public interface SavoirServiceLocal {
	
	Savoir findById(Integer id);
	
	void create(Savoir savoir);

	void delete(Integer id);

	Savoir update(Savoir savoir);
}
