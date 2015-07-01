package entities.enseignement;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;

import entities.cursus.CoursCursus;
import entities.promotion.CoursPromotion;


/**
 * The persistent class for the enseignement database table.
 * 
 */
@Entity
@Table(name="enseignement")
@NamedQuery(name="Enseignement.findAll", query="SELECT e FROM Enseignement e")
public class Enseignement {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ent_id", unique=true, nullable=false)
	private Integer entId;
	
	@Column(name="ent_nom", length=100)
	private String entNom;
	
	@Column(name="ent_contenu", length=500)
	private String entContenu;
	
	@Column(name="ent_objet", length=500)
	private String entObjet;
	
	@Column(name="ent_contrainte", length=500)
	private String entContrainte;
	
	@Column(name="ent_materiel", length=500)
	private String entMateriel;
	

	//bi-directional many-to-many association to CoursCursus
	@ManyToMany
	@JoinTable(
		name="r_courscursus_enseignement"
		, joinColumns={
			@JoinColumn(name="ent_id", nullable=false)
			}
		, inverseJoinColumns={
			@JoinColumn(name="coc_id", nullable=false)
			}
		)
	private List<CoursCursus> coursCursuses;
	
	//bi-directional many-to-many association to CoursPromotion
		@ManyToMany
		@JoinTable(
			name="r_courspromo_enseignement"
			, joinColumns={
				@JoinColumn(name="ent_id", nullable=false)
				}
			, inverseJoinColumns={
				@JoinColumn(name="cop_id", nullable=false)
				}
			)
		private List<CoursPromotion> coursPromotions;

		//bi-directional many-to-many association to Enseignement
				@ManyToMany
				@JoinTable(
					name="prerequis_enseignement"
					, joinColumns={
						@JoinColumn(name="ent_id", nullable=false)
						}
					, inverseJoinColumns={
						@JoinColumn(name="ent_id_enseignement", nullable=false)
						}
					)
				private List<Enseignement> prerequis;
	
		
	public Enseignement() {
		// TODO Auto-generated constructor stub
	}

	public Integer getEntId() {
		return entId;
	}

	public void setEntId(Integer entId) {
		this.entId = entId;
	}

	public String getEntNom() {
		return entNom;
	}

	public void setEntNom(String entNom) {
		this.entNom = entNom;
	}

	public List<Enseignement> getPrerequis() {
		return prerequis;
	}

	public void setPrerequis(List<Enseignement> prerequis) {
		this.prerequis = prerequis;
	}

	public String getEntContenu() {
		return entContenu;
	}

	public void setEntContenu(String entContenu) {
		this.entContenu = entContenu;
	}

	public String getEntObjet() {
		return entObjet;
	}

	public void setEntObjet(String entObjet) {
		this.entObjet = entObjet;
	}

	public String getEntContrainte() {
		return entContrainte;
	}

	public void setEntContrainte(String entContrainte) {
		this.entContrainte = entContrainte;
	}

	public String getEntMateriel() {
		return entMateriel;
	}

	public void setEntMateriel(String entMateriel) {
		this.entMateriel = entMateriel;
	}

	public List<CoursCursus> getCoursCursuses() {
		return coursCursuses;
	}

	public void setCoursCursuses(List<CoursCursus> coursCursuses) {
		this.coursCursuses = coursCursuses;
	}

	public List<CoursPromotion> getCoursPromotions() {
		return coursPromotions;
	}

	public void setCoursPromotions(List<CoursPromotion> coursPromotions) {
		this.coursPromotions = coursPromotions;
	}

}
