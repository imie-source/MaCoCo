package entities.referentiel;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the activite_type database table.
 * 
 */
@Entity
@Table(name="activite_type")
@NamedQuery(name="ActiviteType.findAll", query="SELECT a FROM ActiviteType a")
public class ActiviteType implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="act_id", unique=true, nullable=false)
	private Integer actId;

	//uni-directional many-to-one association to Referentiel
	@ManyToOne
	@JoinColumn(name="ref_id")
	private Referentiel referentiel;

	public ActiviteType() {
	}

	public Integer getActId() {
		return this.actId;
	}

	public void setActId(Integer actId) {
		this.actId = actId;
	}

	public Referentiel getReferentiel() {
		return this.referentiel;
	}

	public void setReferentiel(Referentiel referentiel) {
		this.referentiel = referentiel;
	}

}