package ee.SeregaKorneev;

import java.io.IOException;
import java.util.Calendar;
import java.util.GregorianCalendar;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletResponse;

// Natuke kavalama variandi leiab siit:
// http://stackoverflow.com/questions/3374703/servlet-filter-for-browser-caching


public class SimpleCachingFilter implements Filter {

	public void destroy() {
		System.out.println("filter destroy called");
	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
				throws IOException, ServletException {
		HttpServletResponse resp = (HttpServletResponse)response;
		
        Calendar inTwoMonths = new GregorianCalendar();
        inTwoMonths.add(Calendar.MONTH, 2);
        resp.setDateHeader("Expires", inTwoMonths.getTimeInMillis());
        
        // rakenda järgmine filter või, kui rohkem filtreid pole
        // siis rakenda tavatoiming (Servlet, JSP või staatilise fail lugemine) 
		chain.doFilter(request, response);
		System.out.println("Filter called");
	}

	public void init(FilterConfig fConfig) throws ServletException {
		System.out.println("flter init called");
	}

}
