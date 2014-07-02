package entities.cursus;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the r_courscursus_enseignement database table.
 * 
 */
@Embeddable
public class RCourscursusEnseignementPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="coc_id", insertable=false, updatable=false, unique=true, nullable=false)
	private Integer cocId;

	@Column(name="ent_id", insertable=false, updatable=false, unique=true, nullable=false)
	private Integer entId;

	public RCourscursusEnseignementPK() {
	}
	public Integer getCocId() {
		return this.cocId;
	}
	public void setCocId(Integer cocId) {
		this.cocId = cocId;
	}
	public Integer getEntId() {
		return this.entId;
	}
	public void setEntId(Integer entId) {
		this.entId = entId;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof RCourscursusEnseignementPK)) {
			return false;
		}
		RCourscursusEnseignementPK castOther = (RCourscursusEnseignementPK)other;
		return 
			this.cocId.equals(castOther.cocId)
			&& this.entId.equals(castOther.entId);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.cocId.hashCode();
		hash = hash * prime + this.entId.hashCode();
		
		return hash;
	}
}