package entities.referentiel;

import java.io.Serializable;

import javax.persistence.*;

import java.util.List;


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
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="com_id", unique=true, nullable=false)
	private Integer comId;

	@Column(name="com_libelle", length=2147483647)
	private String comLibelle;

	//bi-directional many-to-one association to ActiviteType
	@ManyToOne
	@JoinColumn(name="act_id")
	private ActiviteType activiteType;

	//bi-directional many-to-one association to Savoir
	@OneToMany(mappedBy="competencePro")
	private List<Savoir> savoirs;

	public CompetencePro() {
	}

	public Integer getComId() {
		return this.comId;
	}

	public void setComId(Integer comId) {
		this.comId = comId;
	}

	public String getComLibelle() {
		return this.comLibelle;
	}

	public void setComLibelle(String comLibelle) {
		this.comLibelle = comLibelle;
	}

	public ActiviteType getActiviteType() {
		return this.activiteType;
	}

	public void setActiviteType(ActiviteType activiteType) {
		this.activiteType = activiteType;
	}

	public List<Savoir> getSavoirs() {
		return this.savoirs;
	}

	public void setSavoirs(List<Savoir> savoirs) {
		this.savoirs = savoirs;
	}

	public Savoir addSavoir(Savoir savoir) {
		getSavoirs().add(savoir);
		savoir.setCompetencePro(this);

		return savoir;
	}

	public Savoir removeSavoir(Savoir savoir) {
		getSavoirs().remove(savoir);
		savoir.setCompetencePro(null);

		return savoir;
	}

}