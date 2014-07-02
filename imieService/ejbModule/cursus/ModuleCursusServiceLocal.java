package cursus;

import javax.ejb.Local;

import entities.cursus.ModuleCursus;

@Local
public interface ModuleCursusServiceLocal 
{
	
	ModuleCursus findById(Integer id);

	void delete(ModuleCursus module);
	
	void create(ModuleCursus module);

	ModuleCursus update(ModuleCursus module);
	
//	List<ModuleCursus> findByUniteFormationId(Integer id);
	
}
