package entities.enseignement;

import java.io.Serializable;

import javax.persistence.*;


/**
 * The persistent class for the prerequis_enseignement database table.
 * 
 */
@Entity
@Table(name="prerequis_enseignement")
@NamedQuery(name="RPrerequisEnseignement.findAll", query="SELECT r FROM RPrerequisEnseignement r")
public class RPrerequisEnseignement implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private RPrerequisEnseignementPK id;

	//bi-directional many-to-one association to Enseignement
	@ManyToOne
	@JoinColumn(name="ent_id_enseignement", nullable=false, insertable=false, updatable=false)
	private Enseignement prerequis;

	public RPrerequisEnseignement() {
	}

	public RPrerequisEnseignementPK getId() {
		return this.id;
	}

	public void setId(RPrerequisEnseignementPK id) {
		this.id = id;
	}

	public Enseignement getEnseignement() {
		return this.prerequis;
	}

	public void setEnseignement(Enseignement enseignement) {
		this.prerequis = enseignement;
	}

}