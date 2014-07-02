package entities.cursus;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the r_courscursus_enseignement database table.
 * 
 */
@Entity
@Table(name="r_courscursus_enseignement")
@NamedQuery(name="RCourscursusEnseignement.findAll", query="SELECT r FROM RCourscursusEnseignement r")
public class RCourscursusEnseignement implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private RCourscursusEnseignementPK id;

	//bi-directional many-to-one association to CoursCursus
	@ManyToOne
	@JoinColumn(name="coc_id", nullable=false, insertable=false, updatable=false)
	private CoursCursus coursCursus;

	public RCourscursusEnseignement() {
	}

	public RCourscursusEnseignementPK getId() {
		return this.id;
	}

	public void setId(RCourscursusEnseignementPK id) {
		this.id = id;
	}

	public CoursCursus getCoursCursus() {
		return this.coursCursus;
	}

	public void setCoursCursus(CoursCursus coursCursus) {
		this.coursCursus = coursCursus;
	}

}