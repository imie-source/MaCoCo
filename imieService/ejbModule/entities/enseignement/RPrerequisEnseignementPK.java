package entities.enseignement;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the prerequis_enseignement database table.
 * 
 */
@Embeddable
public class RPrerequisEnseignementPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="ent_id", insertable=false, updatable=false, unique=true, nullable=false)
	private Integer entId;

	@Column(name="ent_id_enseignement", insertable=false, updatable=false, unique=true, nullable=false)
	private Integer entIdEnseignement;

	public RPrerequisEnseignementPK() {
	}
	

	public Integer getEntId() {
		return entId;
	}


	public void setEntId(Integer entId) {
		this.entId = entId;
	}


	public Integer getEntIdEnseignement() {
		return entIdEnseignement;
	}


	public void setEntIdEnseignement(Integer entIdEnseignement) {
		this.entIdEnseignement = entIdEnseignement;
	}


	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof RPrerequisEnseignementPK)) {
			return false;
		}
		RPrerequisEnseignementPK castOther = (RPrerequisEnseignementPK)other;
		return 
			this.entIdEnseignement.equals(castOther.entIdEnseignement)
			&& this.entId.equals(castOther.entId);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.entIdEnseignement.hashCode();
		hash = hash * prime + this.entId.hashCode();
		
		return hash;
	}
}