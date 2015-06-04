package entities.referentiel;

import java.io.Serializable;

import javax.persistence.*;

import entities.cursus.CoursCursus;
import entities.promotion.CoursPromotion;

import java.util.List;


/**
 * The persistent class for the savoir database table.
 * 
 */
@Entity
@Table(name="savoir")
@NamedQuery(name="Savoir.findAll", query="SELECT s FROM Savoir s")
public class Savoir implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="sav_id", unique=true, nullable=false)
	private Integer savId;

	@Column(name="sav_libelle", length=2147483647)
	private String savLibelle;
	
	//bi-directional many-to-one association to CompetencePro
	@ManyToOne
	@JoinColumn(name="com_id")
	private CompetencePro competencePro;

	//bi-directional many-to-many association to CoursCursus
	@ManyToMany
	@JoinTable(
		name="r_courscursus_savoir"
		, joinColumns={
			@JoinColumn(name="sav_id", nullable=false)
			}
		, inverseJoinColumns={
			@JoinColumn(name="coc_id", nullable=false)
			}
		)
	private List<CoursCursus> coursCursuses;
	
	//bi-directional many-to-many association to CoursPromotion
		@ManyToMany
		@JoinTable(
			name="r_courspromo_savoir"
			, joinColumns={
				@JoinColumn(name="sav_id", nullable=false)
				}
			, inverseJoinColumns={
				@JoinColumn(name="cop_id", nullable=false)
				}
			)
		private List<CoursPromotion> coursPromotions;

	public Savoir() {
	}

	public Integer getSavId() {
		return this.savId;
	}

	public void setSavId(Integer savId) {
		this.savId = savId;
	}

	public String getSavLibelle() {
		return this.savLibelle;
	}

	public void setSavLibelle(String savLibelle) {
		this.savLibelle = savLibelle;
	}
	
	public CompetencePro getCompetencePro() {
		return this.competencePro;
	}

	public void setCompetencePro(CompetencePro competencePro) {
		this.competencePro = competencePro;
	}

	public List<CoursCursus> getCoursCursuses() {
		return this.coursCursuses;
	}

	public void setCoursCursuses(List<CoursCursus> coursCursuses) {
		this.coursCursuses = coursCursuses;
	}

}