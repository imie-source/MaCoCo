package entities.referentiel;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the savoir database table.
 * 
 */
@Entity
@Table(name="savoir")
@NamedQuery(name="Savoir.findAll", query="SELECT s FROM Savoir s")
public class Savoir implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="sav_id", unique=true, nullable=false)
	private Integer savId;

	//uni-directional many-to-one association to CompetencePro
	@ManyToOne
	@JoinColumn(name="com_id")
	private CompetencePro competencePro;

	public Savoir() {
	}

	public Integer getSavId() {
		return this.savId;
	}

	public void setSavId(Integer savId) {
		this.savId = savId;
	}

	public CompetencePro getCompetencePro() {
		return this.competencePro;
	}

	public void setCompetencePro(CompetencePro competencePro) {
		this.competencePro = competencePro;
	}

}