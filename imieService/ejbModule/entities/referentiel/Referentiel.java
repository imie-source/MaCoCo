package entities.referentiel;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the referentiel database table.
 * 
 */
@Entity
@Table(name="referentiel")
@NamedQuery(name="Referentiel.findAll", query="SELECT r FROM Referentiel r")
public class Referentiel implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="ref_id", unique=true, nullable=false)
	private Integer refId;

	@Column(name="ref_nom", length=25)
	private String refNom;

	public Referentiel() {
	}

	public Integer getRefId() {
		return this.refId;
	}

	public void setRefId(Integer refId) {
		this.refId = refId;
	}

	public String getRefNom() {
		return this.refNom;
	}

	public void setRefNom(String refNom) {
		this.refNom = refNom;
	}

}