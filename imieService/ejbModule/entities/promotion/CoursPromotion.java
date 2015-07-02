package entities.promotion;

import java.io.Serializable;

import javax.persistence.*;

import entities.enseignement.Enseignement;
import entities.referentiel.Savoir;

import java.util.List;


/**
 * The persistent class for the cours_promotion database table.
 * 
 */
@Entity
@Table(name="cours_promo")
@NamedQuery(name="CoursPromotion.findAllByPromotion", 
	query =
	"Select c "
	+"FROM CoursPromotion c, ModulePromotion m, "
	+"UniteFormationPromotion uf, Promotion p "
	+"WHERE c.modulePromotion = m "
	+"AND  m.uniteFormationPromotion = uf "
	+"AND uf.promotion = p "
	+"AND p.proId = :idPromotion")

public class CoursPromotion implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="cop_id", unique=true, nullable=false)
	private Integer copId;

	@Column(name="cop_commentaires", length=2147483647)
	private String copCommentaires;

	//bi-directional many-to-one association to ModulePromotion
	@ManyToOne
	@JoinColumn(name="mop_id")
	private ModulePromotion modulePromotion;
	


	@Column(name="cop_duree")
	private Double copDuree;

	@Column(name="cop_evaluation", length=500)
	private String copEvaluation;

	@Column(name="cop_intitule", length=2147483647)
	private String copIntitule;

	@Column(name="cop_objectifs", length=500)
	private String copObjectifs;
	
	@Column(name="cop_ordre", length=500)
	private Integer copOrdre;

	@Column(name="cop_type", length=100)
	private String copType;

	@Column(name="coc_id")
	private Integer cocId;

	//bi-directional many-to-many association to Savoir
	@ManyToMany(mappedBy="coursPromotions")
	private List<Savoir> savoirs;
	
	//bi-directional many-to-many association to Enseignement
	@ManyToMany(mappedBy="coursPromotions")
	private List<Enseignement> enseignements;

	public CoursPromotion() {
	}

	public Integer getCopId() {
		return this.copId;
	}

	public void setCopId(Integer copId) {
		this.copId = copId;
	}

	public String getCopCommentaires() {
		return this.copCommentaires;
	}

	public void setCopCommentaires(String copCommentaires) {
		this.copCommentaires = copCommentaires;
	}



	public Double getCopDuree() {
		return this.copDuree;
	}

	public void setCopDuree(Double copDuree) {
		this.copDuree = copDuree;
	}

	public String getCopEvaluation() {
		return this.copEvaluation;
	}

	public void setCopEvaluation(String copEvaluation) {
		this.copEvaluation = copEvaluation;
	}

	public String getCopIntitule() {
		return this.copIntitule;
	}

	public void setCopIntitule(String copIntitule) {
		this.copIntitule = copIntitule;
	}

	public String getCopObjectifs() {
		return this.copObjectifs;
	}

	public void setCopObjectifs(String copObjectifs) {
		this.copObjectifs = copObjectifs;
	}
	
	public Integer getCopOrdre() {
		return this.copOrdre;
	}

	public void setCopOrdre(Integer copOrdre) {
		this.copOrdre = copOrdre;
	}

	public String getCopType() {
		return this.copType;
	}

	public void setCopType(String copType) {
		this.copType = copType;
	}
	

	public Integer getCocId() {
		return cocId;
	}

	public void setCocId(Integer cocId) {
		this.cocId = cocId;
	}

	
	public ModulePromotion getModulePromotion() {
		return this.modulePromotion;
	}

	public void setModulePromotion(ModulePromotion modulePromotion) {
		this.modulePromotion = modulePromotion;
	}

	public List<Savoir> getSavoirs() {
		return this.savoirs;
	}

	public void setSavoirs(List<Savoir> savoirs) {
		this.savoirs = savoirs;
	}

	public List<Enseignement> getEnseignements() {
		return enseignements;
	}

	public void setEnseignements(List<Enseignement> enseignements) {
		this.enseignements = enseignements;
	}

}