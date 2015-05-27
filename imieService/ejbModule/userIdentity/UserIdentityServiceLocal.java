package userIdentity;

import javax.ejb.Local;

import entities.userIdentity.UserIdentity;
@Local
public interface UserIdentityServiceLocal {
	Boolean checkAuthentification(UserIdentity userIdentity);
}
