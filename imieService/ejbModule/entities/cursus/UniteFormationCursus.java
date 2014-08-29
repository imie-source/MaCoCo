package entities.cursus;

import java.io.Serializable;

import javax.persistence.*;

import java.util.List;


/**
 * The persistent class for the unite_formation_cursus database table.
 * 
 */
@Entity
@Table(name="unite_formation_cursus")
@NamedQuery(name="UniteFormationCursus.findAll", query="SELECT u FROM UniteFormationCursus u")
public class UniteFormationCursus implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ufc_id", unique=true, nullable=false)
	private Integer ufcId;

	@Column(name="ufc_nom", length=25)
	private String ufcNom;

	@Column(name="ufc_objectifs", length=500)
	private String ufcObjectifs;

	//bi-directional many-to-one association to ModuleCursus
	@OneToMany(mappedBy="uniteFormationCursus")
	@OrderBy("moc_ordre ASC")
	private List<ModuleCursus> moduleCursuses;

	//bi-directional many-to-one association to Cursus
	@ManyToOne
	@JoinColumn(name="cur_id")
	private Cursus cursus;

	public UniteFormationCursus() {
	}

	public Integer getUfcId() {
		return this.ufcId;
	}

	public void setUfcId(Integer ufcId) {
		this.ufcId = ufcId;
	}

	public String getUfcNom() {
		return this.ufcNom;
	}

	public void setUfcNom(String ufcNom) {
		this.ufcNom = ufcNom;
	}

	public String getUfcObjectifs() {
		return this.ufcObjectifs;
	}

	public void setUfcObjectifs(String ufcObjectifs) {
		this.ufcObjectifs = ufcObjectifs;
	}

	public List<ModuleCursus> getModuleCursuses() {
		return this.moduleCursuses;
	}

	public void setModuleCursuses(List<ModuleCursus> moduleCursuses) {
		this.moduleCursuses = moduleCursuses;
	}

	public ModuleCursus addModuleCursus(ModuleCursus moduleCursus) {
		getModuleCursuses().add(moduleCursus);
		moduleCursus.setUniteFormationCursus(this);

		return moduleCursus;
	}

	public ModuleCursus removeModuleCursus(ModuleCursus moduleCursus) {
		getModuleCursuses().remove(moduleCursus);
		moduleCursus.setUniteFormationCursus(null);

		return moduleCursus;
	}

	public Cursus getCursus() {
		return this.cursus;
	}

	public void setCursus(Cursus cursus) {
		this.cursus = cursus;
	}

}