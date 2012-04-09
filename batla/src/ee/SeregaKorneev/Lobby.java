package ee.SeregaKorneev;
import java.util.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Lobby extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final List<BlockingQueue<String>> msgQueues = new ArrayList<BlockingQueue<String>>();
	
	StringBuffer puhver = new StringBuffer("");
	ArrayList<Object> names=new ArrayList<Object>();
    String nameList;
    HashSet HSet = new HashSet(names);
	ArrayList names2;
	
	
	 void addName(String nameList){            //adding nickname to list
		    	if (nameList.length()>0){
		    		puhver.append(nameList);
		    
	 }}
    

	 void addNameArray(String nameList){        //getting rid of dublicates in list
		 String offer=new String("offer");
		 String confirmed=new String("confirmed");
		 if(nameList.equals(offer)){
			 System.out.println("MESSAGE: cant add system message to namelist");
		      
	    		}
		 else{
	    		names.add(nameList);
	    		HashSet HSet = new HashSet(names);
	    		ArrayList names3 = new ArrayList(HSet) ;
	    		names2 = names3;
	    	
		 }
		 System.out.println("MESSAGE: Current players are: " + names2);
	 }
		
	    

  void deleteEquals(int id){               //Deleting player left
	  String offer=new String("offer");
	  String confirmed=new String("confirmed");
	  String aString = Integer.toString(id); // convert id to String
	  char[] aStringChar=aString.toCharArray(); //convert idString to char[]
	  if(aString.length()==1){                  //if string is 1,2,3...not 45,63
		  for(int i=0;i<names2.size();i++){
			  /**
			   * Get element from ArrayList to String
			   * Get String last character
			   * compare if last character is equal to left Player id
			   * if equal,remove element from names2
			   */
		     String names2Element=(String) names2.get(i);   //getting element from names2
		     int strLen = names2Element.length();            //getting element length
		     int lastIdx = strLen - 1;                       //getting last CHar index
		     char last = names2Element.charAt(lastIdx);      //getting last char from element
			 
			 if (last == aStringChar[0]) {            //if idString equals to element last char
				 System.out.println("MESSAGE: Players with id " +last+" is leaving");   //Test
				 names2.remove(i);                                //remove this element from names2
				 System.out.println("MESSAGE: After player with  id " +last+" left " + " current players are "+names2);   //test
		          }
		      }
		  }
	  
	  
	  else if(aString.length()==2){
		  System.out.println("MESSAGE: ToDo for xx type id's");  
	  }
	  
	  for(int i=0;i<names2.size();i++){  //deleting system messages
		  if(names2.get(i).equals(confirmed)|names2.get(i).equals(offer)){
			  names2.remove(i);
			  System.out.println("MESSAGE: deleting confirm and offer system messages"); 
			  
		  }
	  }
	  System.out.println("MESSAGE: after deleting player, current players are "+names2); 
      
    	}

	
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/plain");
		
		int id = Integer.parseInt(request.getParameter("id")); 
	
		
		try {
			BlockingQueue<String> q = msgQueues.get(id);
			response.getWriter().print(q.take());
		} catch (InterruptedException e) {
			throw new RuntimeException(e);
		}
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/plain");
		
		System.out.println(request.getParameterMap());
		String action = request.getParameter("action");
		
	   nameList=request.getParameter("msg"); //getting nickName
	    
	    
	    
	if (action != null && action.equals("register")) {
			int id = msgQueues.size();
			response.getWriter().print(id); // send ID
			msgQueues.add(new ArrayBlockingQueue<String>(100));
		}
	
	
	
	else if (action != null && action.equals("LeaveLobby")) {  //if player leaves lobby
		int id=Integer.parseInt(request.getParameter("id"));
		System.out.println("MESSAGE: Will now delete player with "+id+" id");
		deleteEquals(id);
		response.getWriter().print(names2); //sendedited nameList
		
	}
	
	
		
	   else if (action != null && action.equals("addName")) {   //getting playerList for player just arrived
			int id = msgQueues.size();
			System.out.println("MESSAGE: You joined the LOBBY, current players are "+names2);
			response.getWriter().print(names2); // send nameList
			msgQueues.add(new ArrayBlockingQueue<String>(100));
		}
		
		
		else {
			
			
			int id = Integer.parseInt(request.getParameter("id"));
			
			
			
			try {
				// post in all queues
				for (int i=0; i < msgQueues.size(); i++) {
					if (i != id)
					{
						msgQueues.get(i).put(request.getParameter("msg"));
						addName(nameList); //aading names to list
						addNameArray(nameList);//getting rid of dublicates in playerList
					
				
						
			        		}
				}  
				
		
				response.getWriter().print("OK");
			}
			catch (InterruptedException e) {
				throw new RuntimeException(e); 
			}
		}
	}

}
