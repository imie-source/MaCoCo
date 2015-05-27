package userIdentity;

import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import entities.userIdentity.UserIdentity;


@Stateless
@LocalBean
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class UserIdentityService implements UserIdentityServiceLocal{
	@PersistenceContext
	EntityManager em;
    /**
     * Default constructor. 
     */
	public UserIdentityService() {
        // TODO Auto-generated constructor stub
    }
	@Override
	public Boolean checkAuthentification(UserIdentity user) {
		// TODO Auto-generated method stub
		Boolean ret = false;
		String userName = user.getUserIdentityName();
		String userPwd = user.getUserIdentityPwd();
		@SuppressWarnings("unchecked")
		List<UserIdentity> users = em.createNamedQuery("UserIdentity.findAll").getResultList();
		for (UserIdentity userIdentity : users) {
			if(userName.equals(userIdentity.getUserIdentityName()) && userPwd.equals(userIdentity.getUserIdentityPwd())){
				ret = true;
			}
		}
		return ret;
	}
}
