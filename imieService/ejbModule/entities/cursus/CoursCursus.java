package entities.cursus;

import java.io.Serializable;

import javax.persistence.*;

import entities.referentiel.Savoir;

import java.util.List;


/**
 * The persistent class for the cours_cursus database table.
 * 
 */
@Entity
@Table(name="cours_cursus")
@NamedQuery(name="CoursCursus.findAll", query="SELECT c FROM CoursCursus c")
public class CoursCursus implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="coc_id", unique=true, nullable=false)
	private Integer cocId;

	@Column(name="coc_commentaires", length=2147483647)
	private String cocCommentaires;

	//bi-directional many-to-one association to ModuleCursus
	@ManyToOne
	@JoinColumn(name="moc_id")
	private ModuleCursus moduleCursus;
	
	@Column(name="coc_cursus", length=2147483647)
	private String cocCursus;

	@Column(name="coc_duree")
	private Integer cocDuree;

	@Column(name="coc_evaluation", length=500)
	private String cocEvaluation;

	@Column(name="coc_intitule", length=2147483647)
	private String cocIntitule;

	@Column(name="coc_objectifs", length=500)
	private String cocObjectifs;

	@Column(name="coc_type", length=25)
	private String cocType;

	//bi-directional many-to-many association to Savoir
	@ManyToMany(mappedBy="coursCursuses")
	private List<Savoir> savoirs;

	public CoursCursus() {
	}

	public Integer getCocId() {
		return this.cocId;
	}

	public void setCocId(Integer cocId) {
		this.cocId = cocId;
	}

	public String getCocCommentaires() {
		return this.cocCommentaires;
	}

	public void setCocCommentaires(String cocCommentaires) {
		this.cocCommentaires = cocCommentaires;
	}

	public String getCocCursus() {
		return this.cocCursus;
	}

	public void setCocCursus(String cocCursus) {
		this.cocCursus = cocCursus;
	}

	public Integer getCocDuree() {
		return this.cocDuree;
	}

	public void setCocDuree(Integer cocDuree) {
		this.cocDuree = cocDuree;
	}

	public String getCocEvaluation() {
		return this.cocEvaluation;
	}

	public void setCocEvaluation(String cocEvaluation) {
		this.cocEvaluation = cocEvaluation;
	}

	public String getCocIntitule() {
		return this.cocIntitule;
	}

	public void setCocIntitule(String cocIntitule) {
		this.cocIntitule = cocIntitule;
	}

	public String getCocObjectifs() {
		return this.cocObjectifs;
	}

	public void setCocObjectifs(String cocObjectifs) {
		this.cocObjectifs = cocObjectifs;
	}

	public String getCocType() {
		return this.cocType;
	}

	public void setCocType(String cocType) {
		this.cocType = cocType;
	}
	
	public ModuleCursus getModuleCursus() {
		return this.moduleCursus;
	}

	public void setModuleCursus(ModuleCursus moduleCursus) {
		this.moduleCursus = moduleCursus;
	}

	public List<Savoir> getSavoirs() {
		return this.savoirs;
	}

	public void setSavoirs(List<Savoir> savoirs) {
		this.savoirs = savoirs;
	}

}