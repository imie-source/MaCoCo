package entities.promotion;

import java.io.Serializable;

import javax.persistence.*;


/**
 * The persistent class for the r_courspromo_savoir database table.
 * 
 */
@Entity
@Table(name="r_courspromo_savoir")		
@NamedQuery(name="RCourspromotionSavoir.findAll", query="SELECT r FROM RCourspromotionSavoir r")
public class RCourspromotionSavoir implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private RCourspromotionSavoirPK id;

	//bi-directional many-to-one association to CoursPromotion
	@ManyToOne
	@JoinColumn(name="cop_id", nullable=false, insertable=false, updatable=false)
	private CoursPromotion coursPromotion;

	public RCourspromotionSavoir() {
	}

	public RCourspromotionSavoirPK getId() {
		return this.id;
	}

	public void setId(RCourspromotionSavoirPK id) {
		this.id = id;
	}

	public CoursPromotion getCoursPromotion() {
		return this.coursPromotion;
	}

	public void setCoursPromotion(CoursPromotion coursPromotion) {
		this.coursPromotion = coursPromotion;
	}

}