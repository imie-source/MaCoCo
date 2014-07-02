package cursus;

import javax.ejb.Local;

import entities.cursus.CoursCursus;

@Local
public interface CoursCursusServiceLocal {

	void delete(CoursCursus coursCursus);

	void create(CoursCursus coursCursus);

	CoursCursus update(CoursCursus coursCursus);

	CoursCursus findById(Integer id);
	
//	List<CoursCursus> findByModuleId(Integer id);

}
