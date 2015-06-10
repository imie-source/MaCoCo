package enseignement;

import java.util.List;

import javax.ejb.Local;

import entities.enseignement.Enseignement;



@Local
public interface EnseignementServiceLocal {

	List<Enseignement> findAllEnseignement();

	Enseignement findById(Integer id);

	void delete(Enseignement enseignement);

	void create(Enseignement enseignement);

	Enseignement update(Enseignement enseignement);

	void delete(Integer id);
}
