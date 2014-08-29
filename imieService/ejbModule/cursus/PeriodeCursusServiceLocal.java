package cursus;

import javax.ejb.Local;

import entities.cursus.Periode;

@Local
public interface PeriodeCursusServiceLocal 
{
	
	Periode findById(Integer id);

	void delete(Periode periode);
	
	void create(Periode periode);

	Periode update(Periode periode);

}
