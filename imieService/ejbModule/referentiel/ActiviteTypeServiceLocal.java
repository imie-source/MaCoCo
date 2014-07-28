package referentiel;

import javax.ejb.Local;

import entities.referentiel.ActiviteType;

@Local
public interface ActiviteTypeServiceLocal 
{
	ActiviteType findById(Integer id);
	
	void create(ActiviteType activiteType);

	void delete(Integer id);

	ActiviteType update(ActiviteType activiteType);
}
