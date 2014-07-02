package entities.cursus;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the r_courscursus_savoir database table.
 * 
 */
@Embeddable
public class RCourscursusSavoirPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="coc_id", insertable=false, updatable=false, unique=true, nullable=false)
	private Integer cocId;

	@Column(name="sav_id", insertable=false, updatable=false, unique=true, nullable=false)
	private Integer savId;

	public RCourscursusSavoirPK() {
	}
	public Integer getCocId() {
		return this.cocId;
	}
	public void setCocId(Integer cocId) {
		this.cocId = cocId;
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
		if (!(other instanceof RCourscursusSavoirPK)) {
			return false;
		}
		RCourscursusSavoirPK castOther = (RCourscursusSavoirPK)other;
		return 
			this.cocId.equals(castOther.cocId)
			&& this.savId.equals(castOther.savId);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.cocId.hashCode();
		hash = hash * prime + this.savId.hashCode();
		
		return hash;
	}
}