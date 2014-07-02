package entities.referentiel;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the competence_pro database table.
 * 
 */
@Entity
@Table(name="competence_pro")
@NamedQuery(name="CompetencePro.findAll", query="SELECT c FROM CompetencePro c")
public class CompetencePro implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="com_id", unique=true, nullable=false)
	private Integer comId;

	//uni-directional many-to-one association to ActiviteType
	@ManyToOne
	@JoinColumn(name="act_id")
	private ActiviteType activiteType;

	public CompetencePro() {
	}

	public Integer getComId() {
		return this.comId;
	}

	public void setComId(Integer comId) {
		this.comId = comId;
	}

	public ActiviteType getActiviteType() {
		return this.activiteType;
	}

	public void setActiviteType(ActiviteType activiteType) {
		this.activiteType = activiteType;
	}

}