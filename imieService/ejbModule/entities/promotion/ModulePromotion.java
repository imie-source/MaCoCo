package entities.promotion;

import java.io.Serializable;

import javax.persistence.*;

import java.util.List;


/**
 * The persistent class for the module_promotion database table.
 * 
 */
@Entity
@Table(name="module_promo")
@NamedQuery(name="ModulePromotion.findAll", query="SELECT m FROM ModulePromotion m")
public class ModulePromotion implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="mop_id", unique=true, nullable=false)
	private Integer mopId;

	@Column(name="mop_intitule", length=25)
	private String mopIntitule;

	@Column(name="mop_objectifs", length=500)
	private String mopObjectifs;
	
	@Column(name="moc_id")
	private Integer mocId;

	//bi-directional many-to-one association to CoursPromotion
	@OneToMany(mappedBy="modulePromotion")
	@OrderBy("cop_ordre ASC")
	private List<CoursPromotion> coursPromotions;

	//bi-directional many-to-one association to UniteFormationPromotion
	@ManyToOne
	@JoinColumn(name="ufp_id")
	private UniteFormationPromotion uniteFormationPromotion;

	public ModulePromotion() {
	}

	

	public Integer getMopId() {
		return mopId;
	}



	public void setMopId(Integer mopId) {
		this.mopId = mopId;
	}



	public String getMopIntitule() {
		return mopIntitule;
	}



	public void setMopIntitule(String mopIntitule) {
		this.mopIntitule = mopIntitule;
	}



	public String getMopObjectifs() {
		return mopObjectifs;
	}



	public void setMopObjectifs(String mopObjectifs) {
		this.mopObjectifs = mopObjectifs;
	}



	public Integer getMocId() {
		return mocId;
	}



	public void setMocId(Integer mocId) {
		this.mocId = mocId;
	}



	public List<CoursPromotion> getCoursPromotions() {
		return coursPromotions;
	}



	public void setCoursPromotions(List<CoursPromotion> coursPromotions) {
		this.coursPromotions = coursPromotions;
	}



	public UniteFormationPromotion getUniteFormationPromotion() {
		return uniteFormationPromotion;
	}



	public void setUniteFormationPromotion(
			UniteFormationPromotion uniteFormationPromotion) {
		this.uniteFormationPromotion = uniteFormationPromotion;
	}



	public CoursPromotion addCoursPromotion(CoursPromotion coursPromotion) {
		this.coursPromotions.add(coursPromotion);
		coursPromotion.setModulePromotion(this);

		return coursPromotion;
	}

	public CoursPromotion removeCoursCursus(CoursPromotion coursPromotion) {
		this.coursPromotions.remove(coursPromotion);
		coursPromotion.setModulePromotion(null);

		return coursPromotion;
	}



}