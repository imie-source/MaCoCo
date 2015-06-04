package promotion;

import java.util.List;

import javax.ejb.Local;

import entities.promotion.CoursPromotion;

@Local
public interface CoursPromotionServiceLocal {

	void delete(CoursPromotion coursPromotion);

	void create(CoursPromotion coursPromotion);

	CoursPromotion update(CoursPromotion coursPromotion);

	CoursPromotion findById(Integer id);
	
	List<CoursPromotion> findAllByPromotion(Integer id);
	


}
