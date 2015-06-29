package entities.cursus;

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
@Table(name="periode")
@NamedQuery(name="Periode.findAll", query="SELECT p FROM Periode p")
public class Periode implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="per_id", unique=true, nullable=false)
	private Integer perId;

	@Column(name="per_nom")
	private String perNom;

	@Temporal(TemporalType.DATE)
	@Column(name="per_debut")
	private Date perDebut;

	@Temporal(TemporalType.DATE)
	@Column(name="per_fin")
	private Date perFin;

	@Column(name="per_nbjours")
	private Integer perNbjours;

	//bi-directional many-to-one association to Cursus
	@ManyToOne
	@JoinColumn(name="cur_id")
	private Cursus cursus;

	public Periode() {
	}

	public Integer getPerId() {
		return this.perId;
	}

	public void setPerId(Integer perId) {
		this.perId = perId;
	}

	public Date getPerDebut() {
		return this.perDebut;
	}

	public void setPerDebut(Date perDebut) {
		this.perDebut = perDebut;
	}

	public Date getPerFin() {
		return this.perFin;
	}

	public void setPerFin(Date perFin) {
		this.perFin = perFin;
	}

	public Integer getPerNbjours() {
		return this.perNbjours;
	}

	public void setPerNbjours(Integer perNbjours) {
		this.perNbjours = perNbjours;
	}

	public Cursus getCursus() {
		return this.cursus;
	}

	public void setCursus(Cursus cursus) {
		this.cursus = cursus;
	}
	
	public String getPerNom() {
		return perNom;
	}

	public void setPerNom(String perNom) {
		this.perNom = perNom;
	}

}