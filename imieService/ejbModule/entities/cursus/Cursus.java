package entities.cursus;

import java.io.Serializable;

import javax.persistence.*;

import java.util.List;


/**
 * The persistent class for the cursus database table.
 * 
 */
@Entity
@Table(name="cursus")
@NamedQuery(name="Cursus.findAll", query="SELECT c FROM Cursus c")
public class Cursus implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="cur_id", unique=true, nullable=false)
	private Integer curId;

	@Column(name="cur_nom", length=25)
	private String curNom;

	@Column(name="ref_id")
	private Integer refId;

	//bi-directional many-to-one association to UniteFormationCursus
	@OneToMany(mappedBy="cursus")
	private List<UniteFormationCursus> uniteFormationCursuses;

	public Cursus() {
	}

	public Integer getCurId() {
		return this.curId;
	}

	public void setCurId(Integer curId) {
		this.curId = curId;
	}

	public String getCurNom() {
		return this.curNom;
	}

	public void setCurNom(String curNom) {
		this.curNom = curNom;
	}

	public Integer getRefId() {
		return this.refId;
	}

	public void setRefId(Integer refId) {
		this.refId = refId;
	}

	public List<UniteFormationCursus> getUniteFormationCursuses() {
		return this.uniteFormationCursuses;
	}

	public void setUniteFormationCursuses(List<UniteFormationCursus> uniteFormationCursuses) {
		this.uniteFormationCursuses = uniteFormationCursuses;
	}

	public UniteFormationCursus addUniteFormationCursus(UniteFormationCursus uniteFormationCursus) {
		getUniteFormationCursuses().add(uniteFormationCursus);
		uniteFormationCursus.setCursus(this);

		return uniteFormationCursus;
	}

	public UniteFormationCursus removeUniteFormationCursus(UniteFormationCursus uniteFormationCursus) {
		getUniteFormationCursuses().remove(uniteFormationCursus);
		uniteFormationCursus.setCursus(null);

		return uniteFormationCursus;
	}

}