package entities.userIdentity;


public class UserIdentityBis {


	private Integer userId;
	private String userName;
	private String userPassword;
	
	
	
	public UserIdentityBis() {
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
