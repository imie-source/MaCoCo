package entities.promotion;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


/**
 * The persistent class for the periode database table.
 * 
 */
@Entity
@Table(name="periode_promotion")
@NamedQuery(name="PeriodePromotion.findAll", query="SELECT p FROM PeriodePromotion p")
public class PeriodePromotion implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="perpro_id", unique=true, nullable=false)
	private Integer perproId;

	@Column(name="perpro_nom")
	private String perproNom;
	
	@Temporal(TemporalType.DATE)
	@Column(name="perpro_debut")
	private Date perproDebut;

	@Temporal(TemporalType.DATE)
	@Column(name="perpro_fin")
	private Date perproFin;

	@Column(name="perpro_nbjours")
	private Integer perproNbjours;

	//bi-directional many-to-one association to Promotion
	@ManyToOne
	@JoinColumn(name="pro_id")
	private Promotion promotion;

	public PeriodePromotion() {
	}

	public Integer getPerproId() {
		return this.perproId;
	}

	public void setPerproId(Integer perproId) {
		this.perproId = perproId;
	}

	public Date getPerproDebut() {
		return this.perproDebut;
	}

	public void setPerproDebut(Date perproDebut) {
		this.perproDebut = perproDebut;
	}

	public Date getPerproFin() {
		return this.perproFin;
	}

	public void setPerproFin(Date perproFin) {
		this.perproFin = perproFin;
	}

	public Integer getPerproNbjours() {
		return this.perproNbjours;
	}
	
	public void setPerproNbjours(Integer perproNbjours) {
		this.perproNbjours = perproNbjours;
	}

	public Promotion getPromotion() {
		return this.promotion;
	}

	public void setPromotion(Promotion promotion) {
		this.promotion = promotion;
	}

	public String getPerproNom() {
		return perproNom;
	}

	public void setPerproNom(String perproNom) {
		this.perproNom = perproNom;
	}

	

}