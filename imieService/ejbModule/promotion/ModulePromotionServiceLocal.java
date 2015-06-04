package promotion;

import javax.ejb.Local;

import entities.promotion.ModulePromotion;

@Local
public interface ModulePromotionServiceLocal 
{
	
	ModulePromotion findById(Integer id);

	void delete(ModulePromotion module);
	
	void create(ModulePromotion module);

	ModulePromotion update(ModulePromotion module);
	
	
}
