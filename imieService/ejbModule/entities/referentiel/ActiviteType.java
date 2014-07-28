package entities.referentiel;

import java.io.Serializable;

import javax.persistence.*;

import java.util.List;


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
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="act_id", unique=true, nullable=false)
	private Integer actId;

	@Column(name="act_libelle", length=2147483647)
	private String actLibelle;

	//bi-directional many-to-one association to Referentiel
	@ManyToOne
	@JoinColumn(name="ref_id")
	private Referentiel referentiel;

	//bi-directional many-to-one association to CompetencePro
	@OneToMany(mappedBy="activiteType")
	private List<CompetencePro> competencePros;

	public ActiviteType() {
	}

	public Integer getActId() {
		return this.actId;
	}

	public void setActId(Integer actId) {
		this.actId = actId;
	}

	public String getActLibelle() {
		return this.actLibelle;
	}

	public void setActLibelle(String actLibelle) {
		this.actLibelle = actLibelle;
	}

	public Referentiel getReferentiel() {
		return this.referentiel;
	}

	public void setReferentiel(Referentiel referentiel) {
		this.referentiel = referentiel;
	}

	public List<CompetencePro> getCompetencePros() {
		return this.competencePros;
	}

	public void setCompetencePros(List<CompetencePro> competencePros) {
		this.competencePros = competencePros;
	}

	public CompetencePro addCompetencePro(CompetencePro competencePro) {
		getCompetencePros().add(competencePro);
		competencePro.setActiviteType(this);

		return competencePro;
	}

	public CompetencePro removeCompetencePro(CompetencePro competencePro) {
		getCompetencePros().remove(competencePro);
		competencePro.setActiviteType(null);

		return competencePro;
	}

}