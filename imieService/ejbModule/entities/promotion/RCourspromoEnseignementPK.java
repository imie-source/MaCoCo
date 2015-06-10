package entities.promotion;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the r_courscursus_enseignement database table.
 * 
 */
@Embeddable
public class RCourspromoEnseignementPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="cop_id", insertable=false, updatable=false, unique=true, nullable=false)
	private Integer copId;

	@Column(name="ent_id", insertable=false, updatable=false, unique=true, nullable=false)
	private Integer entId;

	public RCourspromoEnseignementPK() {
	}
	public Integer getCopId() {
		return this.copId;
	}
	public void setCopId(Integer copId) {
		this.copId = copId;
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
		if (!(other instanceof RCourspromoEnseignementPK)) {
			return false;
		}
		RCourspromoEnseignementPK castOther = (RCourspromoEnseignementPK)other;
		return 
			this.copId.equals(castOther.copId)
			&& this.entId.equals(castOther.entId);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.copId.hashCode();
		hash = hash * prime + this.entId.hashCode();
		
		return hash;
	}
}