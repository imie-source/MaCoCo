package userIdentity;

import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
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
	
		String queryString = "SELECT u FROM UserIdentity u WHERE u.userName = '".concat(userName).concat("' AND u.userPassword = '").concat(userPwd).concat("'");
		Query query = em.createQuery(queryString);
		List<UserIdentity> users = query.getResultList();

		if(!users.isEmpty()){
			ret = true;
		}
		
		return ret;
	}
}
