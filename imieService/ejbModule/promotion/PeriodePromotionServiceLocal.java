package promotion;

import javax.ejb.Local;

import entities.promotion.PeriodePromotion;

@Local
public interface PeriodePromotionServiceLocal 
{
	
	PeriodePromotion findById(Integer id);

	void delete(PeriodePromotion periode);
	
	void create(PeriodePromotion periode);

	PeriodePromotion update(PeriodePromotion periode);

}
