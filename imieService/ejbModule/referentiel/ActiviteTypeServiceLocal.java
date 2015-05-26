package referentiel;

import javax.ejb.Local;

import entities.referentiel.ActiviteType;

@Local
public interface ActiviteTypeServiceLocal 
{
	ActiviteType findById(Integer id);
	
	void create(ActiviteType activiteType);

	void delete(ActiviteType activiteType);

	ActiviteType update(ActiviteType activiteType);
}
