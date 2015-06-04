package promotion;

import java.util.List;

import javax.ejb.Local;

import entities.promotion.Promotion;



@Local
public interface PromotionServiceLocal 
{
	
	
	List<Promotion> findAllPromotion();

	Promotion findById(Integer id);

	void delete(Promotion promotion);

	void create(Promotion promotion);

	Promotion update(Promotion promotion);
}
