package entities.promotion;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the r_courspromotion_savoir database table.
 * 
 */
@Embeddable
public class RCourspromotionSavoirPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="cop_id", insertable=false, updatable=false, unique=true, nullable=false)
	private Integer copId;

	@Column(name="sav_id", insertable=false, updatable=false, unique=true, nullable=false)
	private Integer savId;

	public RCourspromotionSavoirPK() {
	}
	public Integer getCopId() {
		return this.copId;
	}
	public void setCopId(Integer copId) {
		this.copId = copId;
	}
	public Integer getSavId() {
		return this.savId;
	}
	public void setSavId(Integer savId) {
		this.savId = savId;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof RCourspromotionSavoirPK)) {
			return false;
		}
		RCourspromotionSavoirPK castOther = (RCourspromotionSavoirPK)other;
		return 
			this.copId.equals(castOther.copId)
			&& this.savId.equals(castOther.savId);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.copId.hashCode();
		hash = hash * prime + this.savId.hashCode();
		
		return hash;
	}
}