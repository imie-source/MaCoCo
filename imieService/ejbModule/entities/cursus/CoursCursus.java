package entities.cursus;

import java.io.Serializable;

import javax.persistence.*;

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

	@Column(name="coc_duree", length=25)
	private String cocDuree;

	@Column(name="coc_evaluation", length=500)
	private String cocEvaluation;

	@Column(name="coc_intitule", length=25)
	private String cocIntitule;

	@Column(name="coc_objectifs", length=500)
	private String cocObjectifs;

	@Column(name="coc_type", length=25)
	private String cocType;
	
	@Column(name="coc_commentaires", length=500)
	private String cocCommentaires;

	//bi-directional many-to-one association to ModuleCursus
	@ManyToOne
	@JoinColumn(name="moc_id")
	private ModuleCursus moduleCursus;

	//bi-directional many-to-one association to RCourscursusEnseignement
	@OneToMany(mappedBy="coursCursus", cascade=CascadeType.REMOVE)
	private List<RCourscursusEnseignement> RCourscursusEnseignements;

	//bi-directional many-to-one association to RCourscursusSavoir
	@OneToMany(mappedBy="coursCursus", cascade=CascadeType.REMOVE)
	private List<RCourscursusSavoir> RCourscursusSavoirs;

	public CoursCursus() {
	}

	public Integer getCocId() {
		return this.cocId;
	}

	public void setCocId(Integer cocId) {
		this.cocId = cocId;
	}

	public String getCocDuree() {
		return this.cocDuree;
	}

	public void setCocDuree(String cocDuree) {
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

	public List<RCourscursusEnseignement> getRCourscursusEnseignements() {
		return this.RCourscursusEnseignements;
	}

	public void setRCourscursusEnseignements(List<RCourscursusEnseignement> RCourscursusEnseignements) {
		this.RCourscursusEnseignements = RCourscursusEnseignements;
	}

	public RCourscursusEnseignement addRCourscursusEnseignement(RCourscursusEnseignement RCourscursusEnseignement) {
		getRCourscursusEnseignements().add(RCourscursusEnseignement);
		RCourscursusEnseignement.setCoursCursus(this);

		return RCourscursusEnseignement;
	}

	public RCourscursusEnseignement removeRCourscursusEnseignement(RCourscursusEnseignement RCourscursusEnseignement) {
		getRCourscursusEnseignements().remove(RCourscursusEnseignement);
		RCourscursusEnseignement.setCoursCursus(null);

		return RCourscursusEnseignement;
	}

	public List<RCourscursusSavoir> getRCourscursusSavoirs() {
		return this.RCourscursusSavoirs;
	}

	public void setRCourscursusSavoirs(List<RCourscursusSavoir> RCourscursusSavoirs) {
		this.RCourscursusSavoirs = RCourscursusSavoirs;
	}

	public RCourscursusSavoir addRCourscursusSavoir(RCourscursusSavoir RCourscursusSavoir) {
		getRCourscursusSavoirs().add(RCourscursusSavoir);
		RCourscursusSavoir.setCoursCursus(this);

		return RCourscursusSavoir;
	}

	public RCourscursusSavoir removeRCourscursusSavoir(RCourscursusSavoir RCourscursusSavoir) {
		getRCourscursusSavoirs().remove(RCourscursusSavoir);
		RCourscursusSavoir.setCoursCursus(null);

		return RCourscursusSavoir;
	}

}