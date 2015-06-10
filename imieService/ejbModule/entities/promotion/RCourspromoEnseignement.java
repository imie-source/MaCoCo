package entities.promotion;

import java.io.Serializable;

import javax.persistence.*;


/**
 * The persistent class for the r_courscursus_enseignement database table.
 * 
 */
@Entity
@Table(name="r_courspromo_enseignement")
@NamedQuery(name="RCourspromoEnseignement.findAll", query="SELECT r FROM RCourspromoEnseignement r")
public class RCourspromoEnseignement implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private RCourspromoEnseignementPK id;

	//bi-directional many-to-one association to CoursCursus
	@ManyToOne
	@JoinColumn(name="cop_id", nullable=false, insertable=false, updatable=false)
	private CoursPromotion coursPromo;

	public RCourspromoEnseignement() {
	}

	public RCourspromoEnseignementPK getId() {
		return this.id;
	}

	public void setId(RCourspromoEnseignementPK id) {
		this.id = id;
	}

	public CoursPromotion getCoursPromo() {
		return this.coursPromo;
	}

	public void setCoursPromo(CoursPromotion coursPromo) {
		this.coursPromo = coursPromo;
	}

}