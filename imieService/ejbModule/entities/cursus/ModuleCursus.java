package entities.cursus;

import java.io.Serializable;

import javax.persistence.*;

import java.util.List;


/**
 * The persistent class for the module_cursus database table.
 * 
 */
@Entity
@Table(name="module_cursus")
@NamedQuery(name="ModuleCursus.findAll", query="SELECT m FROM ModuleCursus m")
public class ModuleCursus implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="moc_id", unique=true, nullable=false)
	private Integer mocId;

	@Column(name="moc_intitule", length=25)
	private String mocIntitule;

	@Column(name="moc_objectifs", length=500)
	private String mocObjectifs;

	//bi-directional many-to-one association to CoursCursus
	@OneToMany(mappedBy="moduleCursus")
	private List<CoursCursus> coursCursuses;

	//bi-directional many-to-one association to UniteFormationCursus
	@ManyToOne
	@JoinColumn(name="ufc_id")
	private UniteFormationCursus uniteFormationCursus;

	public ModuleCursus() {
	}

	public Integer getMocId() {
		return this.mocId;
	}

	public void setMocId(Integer mocId) {
		this.mocId = mocId;
	}

	public String getMocIntitule() {
		return this.mocIntitule;
	}

	public void setMocIntitule(String mocIntitule) {
		this.mocIntitule = mocIntitule;
	}

	public String getMocObjectifs() {
		return this.mocObjectifs;
	}

	public void setMocObjectifs(String mocObjectifs) {
		this.mocObjectifs = mocObjectifs;
	}

	public List<CoursCursus> getCoursCursuses() {
		return this.coursCursuses;
	}

	public void setCoursCursuses(List<CoursCursus> coursCursuses) {
		this.coursCursuses = coursCursuses;
	}

	public CoursCursus addCoursCursus(CoursCursus coursCursus) {
		getCoursCursuses().add(coursCursus);
		coursCursus.setModuleCursus(this);

		return coursCursus;
	}

	public CoursCursus removeCoursCursus(CoursCursus coursCursus) {
		getCoursCursuses().remove(coursCursus);
		coursCursus.setModuleCursus(null);

		return coursCursus;
	}

	public UniteFormationCursus getUniteFormationCursus() {
		return this.uniteFormationCursus;
	}

	public void setUniteFormationCursus(UniteFormationCursus uniteFormationCursus) {
		this.uniteFormationCursus = uniteFormationCursus;
	}

}