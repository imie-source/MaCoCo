package filter.security;

import java.io.IOException;
import java.security.MessageDigest;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.registry.infomodel.User;

import entities.userIdentity.UserIdentity;

/**
 * Servlet Filter implementation class SecurityFilter
 */
public class SecurityFilter implements Filter {

    /**
     * Default constructor. 
     */
    public SecurityFilter() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		// TODO Auto-generated method stub
		// place your code here

		// pass the request along the filter chain
		
		Boolean resourceAllow = true;
		HttpServletRequest httpServletRequest = (HttpServletRequest) request;
		HttpServletResponse httpServletResponse = (HttpServletResponse) response;
		
		String url = httpServletRequest.getRequestURI();
		if(!url.contains("css") && !url.contains("js") && !url.contains("login") && !url.contains("Login")){
			resourceAllow = false;
		}
		
		UserIdentity connectedUser = (UserIdentity)httpServletRequest.getSession().getAttribute("connectedUser");
		if(!resourceAllow && connectedUser==null){
			
			httpServletResponse.sendRedirect("Login");
		}else {
			chain.doFilter(request, response);
		}
		
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
