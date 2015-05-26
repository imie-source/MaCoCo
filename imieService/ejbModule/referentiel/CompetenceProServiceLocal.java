package referentiel;

import javax.ejb.Local;

import entities.referentiel.CompetencePro;

@Local
public interface CompetenceProServiceLocal 
{
	CompetencePro findById(Integer id);
	
	void create(CompetencePro competencePro);

	void delete(CompetencePro competencePro);

	CompetencePro update(CompetencePro competencePro);
}
