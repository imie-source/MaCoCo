package entities.referentiel;

import java.io.Serializable;

import javax.persistence.*;

import java.util.List;


/**
 * The persistent class for the referentiel database table.
 * 
 */
@Entity
@Table(name="referentiel")
@NamedQuery(name="Referentiel.findAll", query="SELECT r FROM Referentiel r")
public class Referentiel implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ref_id", unique=true, nullable=false)
	private Integer refId;

	@Column(name="ref_nom", length=100)
	private String refNom;

	//bi-directional many-to-one association to ActiviteType
	@OneToMany(mappedBy="referentiel")
	private List<ActiviteType> activiteTypes;

	public Referentiel() {
	}

	public Integer getRefId() {
		return this.refId;
	}

	public void setRefId(Integer refId) {
		this.refId = refId;
	}

	public String getRefNom() {
		return this.refNom;
	}

	public void setRefNom(String refNom) {
		this.refNom = refNom;
	}

	public List<ActiviteType> getActiviteTypes() {
		return this.activiteTypes;
	}

	public void setActiviteTypes(List<ActiviteType> activiteTypes) {
		this.activiteTypes = activiteTypes;
	}

	public ActiviteType addActiviteType(ActiviteType activiteType) {
		getActiviteTypes().add(activiteType);
		activiteType.setReferentiel(this);

		return activiteType;
	}

	public ActiviteType removeActiviteType(ActiviteType activiteType) {
		getActiviteTypes().remove(activiteType);
		activiteType.setReferentiel(null);

		return activiteType;
	}

}