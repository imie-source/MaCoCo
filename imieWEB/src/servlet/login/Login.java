package servlet.login;

import java.io.IOException;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import userIdentity.UserIdentityServiceLocal;
import entities.userIdentity.UserIdentity;

/**
 * Servlet implementation class Login
 */
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
	@EJB 
	UserIdentityServiceLocal userIdentityService;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Login() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//request.getRequestDispatcher("/WEB-INF/login.jsp").forward(request, response);
		request.getRequestDispatcher("/login.html").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String login = request.getParameter("loginInput");
		String pwd = request.getParameter("pwdInput");
		UserIdentity user = new UserIdentity();
		user.setUserIdentityName(login);
		user.setUserIdentityPwd(pwd);
		
		Boolean accurateAuthentification = userIdentityService.checkAuthentification(user);
		if (accurateAuthentification){
			request.getSession().setAttribute("connectedUser", user);
			response.sendRedirect("");
		} else{
			
			request.getRequestDispatcher("/login.html").forward(request, response);
		}
		
	}

}
