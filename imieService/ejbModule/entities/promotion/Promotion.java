package entities.promotion;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;

import entities.cursus.Cursus;


/**
 * The persistent class for the promotion database table.
 * 
 */
@Entity
@Table(name="promotion")
@NamedQuery(name="Promotion.findAll", query="SELECT p FROM Promotion p")
public class Promotion implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="pro_id", unique=true, nullable=false)
	private Integer proId;

	@Column(name="pro_nom", length=100)
	private String proNom;

	//bi-directional many-to-one association to Cursus
	@ManyToOne
	@JoinColumn(name="cur_id")
	private Cursus cursus;
	
	//bi-directional many-to-one association to UniteFormationPromotion
	@OneToMany(mappedBy="promotion")
	@OrderBy("ufp_ordre ASC")
	private List<UniteFormationPromotion> uniteFormationPromotions;
	
	//bi-directional many-to-one association to Periode
	@OneToMany(mappedBy="promotion")
	private List<PeriodePromotion> periodes;

	public Promotion() {
	}


	public Integer getProId() {
		return proId;
	}


	public void setProId(Integer proId) {
		this.proId = proId;
	}


	public String getProNom() {
		return proNom;
	}


	public void setProNom(String proNom) {
		this.proNom = proNom;
	}


	public List<UniteFormationPromotion> getUniteFormationPromotions() {
		return uniteFormationPromotions;
	}


	public void setUniteFormationPromotions(
			List<UniteFormationPromotion> uniteFormationPromotions) {
		this.uniteFormationPromotions = uniteFormationPromotions;
	}


	public Cursus getCursus() {
		return cursus;
	}


	public void setCursus(Cursus cursus) {
		this.cursus = cursus;
	}

	public UniteFormationPromotion addUniteFormationPromotion(UniteFormationPromotion uniteFormationPromotion) {
		getUniteFormationPromotions().add(uniteFormationPromotion);
		uniteFormationPromotion.setPromotion(this);

		return uniteFormationPromotion;
	}

	public UniteFormationPromotion removeUniteFormationPromotion(UniteFormationPromotion uniteFormationPromotion) {
		getUniteFormationPromotions().remove(uniteFormationPromotion);
		uniteFormationPromotion.setPromotion(null);

		return uniteFormationPromotion;
	}

	public List<PeriodePromotion> getPeriodes() {
		return periodes;
	}

	public void setPeriodes(List<PeriodePromotion> periodes) {
		this.periodes = periodes;
	}
}