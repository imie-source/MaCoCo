package entities.cursus;

import java.io.Serializable;

import javax.persistence.*;


/**
 * The persistent class for the r_courscursus_savoir database table.
 * 
 */
@Entity
@Table(name="r_courscursus_savoir")
@NamedQuery(name="RCourscursusSavoir.findAll", query="SELECT r FROM RCourscursusSavoir r")
public class RCourscursusSavoir implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private RCourscursusSavoirPK id;

	//bi-directional many-to-one association to CoursCursus
	@ManyToOne
	@JoinColumn(name="coc_id", nullable=false, insertable=false, updatable=false)
	private CoursCursus coursCursus;

	public RCourscursusSavoir() {
	}

	public RCourscursusSavoirPK getId() {
		return this.id;
	}

	public void setId(RCourscursusSavoirPK id) {
		this.id = id;
	}

	public CoursCursus getCoursCursus() {
		return this.coursCursus;
	}

	public void setCoursCursus(CoursCursus coursCursus) {
		this.coursCursus = coursCursus;
	}

}