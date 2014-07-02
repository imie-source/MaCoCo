package cursus;

import java.util.List;

import javax.ejb.Local;

import entities.cursus.Cursus;



@Local
public interface CursusServiceLocal 
{
	
	
	List<Cursus> findAllCursus();

	Cursus findById(Integer id);

	void delete(Cursus cursus);

	void create(Cursus cursus);

	Cursus update(Cursus cursus);
}
