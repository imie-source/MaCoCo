package promotion;

import javax.ejb.Local;

import entities.promotion.UniteFormationPromotion;

@Local
public interface UniteFormationPromotionServiceLocal 
{


	UniteFormationPromotion findById(Integer id);

	void delete(UniteFormationPromotion uniteFormation);
	
	void create(UniteFormationPromotion uniteFormation);

	UniteFormationPromotion update(UniteFormationPromotion uniteFormation);

	

}
