package entities.userIdentity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/**
 * The persistent class for the cursus database table.
 * 
 */
@Entity
@Table(name="utilisateur")
@NamedQuery(name="UserIdentity.findAll", query="SELECT u FROM UserIdentity u")
public class UserIdentity implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_utilisateur", unique=true, nullable=false)
	private Integer userId;
	
	@Column(name="nom_utilisateur")
	private String userName;
	
	@Column(name="password_utilisateur")
	private String userPassword;
	
	
	
	public UserIdentity() {
		// TODO Auto-generated constructor stub
	}
	public String getUserIdentityName() {
		return this.userName;
	}
	public void setUserIdentityName(String userName) {
		this.userName = userName;
	}
	public String getUserIdentityPwd() {
		return this.userPassword;
	}
	public void setUserIdentityPwd(String userPassword) {
		this.userPassword = userPassword;
	}

}
