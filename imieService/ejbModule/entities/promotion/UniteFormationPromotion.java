package entities.promotion;

import java.io.Serializable;

import javax.persistence.*;

import java.util.List;


/**
 * The persistent class for the unite_formation_promotion database table.
 * 
 */
@Entity
@Table(name="unite_formation_promo")
@NamedQuery(name="UniteFormationPromotion.findAll", query="SELECT u FROM UniteFormationPromotion u")
public class UniteFormationPromotion implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ufp_id", unique=true, nullable=false)
	private Integer ufpId;

	@Column(name="ufp_nom", length=100)
	private String ufpNom;

	@Column(name="ufp_objectifs", length=500)
	private String ufpObjectifs;
	
	@Column(name="ufc_id")
	private Integer ufcId;


	//bi-directional many-to-one association to ModulePromotion
	@OneToMany(mappedBy="uniteFormationPromotion")
	@OrderBy("mop_ordre ASC")
	private List<ModulePromotion> modulePromotions;

	//bi-directional many-to-one association to Promotion
	@ManyToOne
	@JoinColumn(name="pro_id")
	private Promotion promotion;

	public UniteFormationPromotion() {
	}

	public Integer getUfpId() {
		return ufpId;
	}

	public void setUfpId(Integer ufpId) {
		this.ufpId = ufpId;
	}

	public String getUfpNom() {
		return ufpNom;
	}

	public void setUfpNom(String ufpNom) {
		this.ufpNom = ufpNom;
	}

	public String getUfpObjectifs() {
		return ufpObjectifs;
	}

	public void setUfpObjectifs(String ufpObjectifs) {
		this.ufpObjectifs = ufpObjectifs;
	}

	public Integer getUfcId() {
		return ufcId;
	}

	public void setUfcId(Integer ufcId) {
		this.ufcId = ufcId;
	}
	public List<ModulePromotion> getModulePromotions() {
		return modulePromotions;
	}

	public void setModulePromotions(List<ModulePromotion> modulePromotions) {
		this.modulePromotions = modulePromotions;
	}

	public Promotion getPromotion() {
		return promotion;
	}

	public void setPromotion(Promotion promotion) {
		this.promotion = promotion;
	}

	public ModulePromotion addModulePromotion(ModulePromotion modulePromotion) {
		getModulePromotions().add(modulePromotion);
		modulePromotion.setUniteFormationPromotion(this);

		return modulePromotion;
	}

	public ModulePromotion removeModulePromotion(ModulePromotion modulePromotion) {
		getModulePromotions().remove(modulePromotion);
		modulePromotion.setUniteFormationPromotion(null);

		return modulePromotion;
	}


}