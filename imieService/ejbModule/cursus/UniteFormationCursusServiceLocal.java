package cursus;

import javax.ejb.Local;

import entities.cursus.UniteFormationCursus;

@Local
public interface UniteFormationCursusServiceLocal 
{
	
	
//	List<UniteFormationCursus> findAllUniteFormationCursus();

	UniteFormationCursus findById(Integer id);

	void delete(UniteFormationCursus uniteFormation);
	
	void create(UniteFormationCursus uniteFormation);

	UniteFormationCursus update(UniteFormationCursus uniteFormation);

//	List<UniteFormationCursus> findByCursusId(Integer id);
	

}
