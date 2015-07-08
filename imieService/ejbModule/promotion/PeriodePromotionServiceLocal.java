package promotion;

import java.util.List;

import javax.ejb.Local;

import entities.promotion.PeriodePromotion;

@Local
public interface PeriodePromotionServiceLocal 
{
	
	PeriodePromotion findById(Integer id);

	void delete(PeriodePromotion periode);
	
	void create(PeriodePromotion periode);

	PeriodePromotion update(PeriodePromotion periode);

	List<PeriodePromotion> buildSchemaPedago(Integer id);

}
