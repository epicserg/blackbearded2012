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
    String nameList=new String();
    HashSet HSet = new HashSet(names);
	ArrayList names2;
	
	
	 void addName(String nameList){            //adding nickname to list
		    	if (nameList.length()>0){
		    		puhver.append(nameList);
		    
	 }}
	 
	 
	 void refreshList(){
		 names2.clear();
		 System.out.println("MESSAGE (refreshList):Array is reffreshed");
	 }
	 

	 void addNameArray(String nameList, int id){        //getting rid of dublicates in list
		 String offer=new String("offer");
		 String confirmed=new String("confirmed");
		 if(nameList.equals(offer)){
			 System.out.println("MESSAGE (addNameArray): cant add system message ( " +offer+ " )  to namelist");
			 System.out.println("MESSAGE (addNameArray): Game Offered to another player");
		      
	    		}
		 else if (nameList.equals(confirmed)){
			 System.out.println("MESSAGE (addNameArray): cant add system message( " +confirmed+ " ) to namelist");
			 System.out.println("MESSAGE (addNameArray): Game Request Accepted");
			 deleteEquals(id);
			 
			 
		 }
		 
	 else{
	    		names.add(nameList);
	    		HashSet HSet = new HashSet(names);
	    		ArrayList names3 = new ArrayList(HSet) ;
	    		names2 = names3;
	    	
		 }
		 System.out.println("MESSAGE (addNameArray): Current players are: " + names2);
		 System.out.println("MESSAGE (addNameArray): size of array " + names2.size());
	 }
	 
	 void deleteIdfromNick (String nameList){
		 
		 
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
				 System.out.println("MESSAGE(deleteEquals): Players with id " +last+" is leaving");   //Test
				 names2.remove(i);                                //remove this element from names2
				 System.out.println("MESSAGE(deleteEquals): After player with  id " +last+" left " + " current players are "+names2);   //test
		          }
		      }
		  }
	  
	  
	  else if(aString.length()==2){
		  for(int i=0;i<names2.size();i++){
			  String names2Element=(String) names2.get(i);  
			     int strLen = names2Element.length();            
			     int lastIdx = strLen - 1;        
			     int preLastIdx = strLen - 2;  
			     char last = names2Element.charAt(lastIdx);    
			     char preLast = names2Element.charAt(preLastIdx);  
			     System.out.println("MESSAGE(deleteEquals): id, preLast, last " + aString+ last+ preLast);  
			     if (preLast == aStringChar[0]) { 
			    	 if(last==aStringChar[1]){
			    	 System.out.println("MESSAGE(deleteEquals): Players with id xx type " +last+" is leaving");   //Test
					 names2.remove(i);                                //remove this element from names2
					 System.out.println("MESSAGE(deleteEquals): After player with  id xx type " +last+" left " + " current players are "+names2);   //test
			    	 }  
		  }
			     else
			    	 
		  System.out.println("MESSAGE(deleteEquals): is not working deleting");  
	  }
	  
	  for(int i=0;i<names2.size();i++){  //deleting system messages
		  if(names2.get(i).equals(confirmed)|names2.get(i).equals(offer)){
			  names2.remove(i);
			  System.out.println("MESSAGE(deleteEquals): deleting confirm and offer system messages"); 
			  
		  }
	  }
	  System.out.println("MESSAGE(deleteEquals): after deleting player, current players are "+names2); 
      
    	}
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
		 System.out.println("MESSAGE(closeLobdySession() initiated): Will now delete player with "+id+" id");
		deleteEquals(id);
		response.getWriter().print(names2); //sendedited nameList
		
	}
	
	else if (action != null && action.equals("refresh")){
		int id=Integer.parseInt(request.getParameter("id"));
		 System.out.println("refreshing list");
		refreshList();
		
		
	}
	
	
	else if (action != null && action.equals("findPlayer")) {  //if player leaves lobby
		int id=Integer.parseInt(request.getParameter("id"));
		 System.out.println("MESSAGE(closeLobdySession() initiated): Will now recieve offer message to another player, whose nickname is ");
		deleteEquals(id);
		response.getWriter().print(names2); //sendedited nameList
		
	}
	
	
		
	   else if (action != null && action.equals("addName")) {   //getting playerList for player just arrived
			int id = msgQueues.size();
			System.out.println("MESSAGE(addName): You joined the LOBBY, current players are "+nameList);
			System.out.println("response contains "+names2);
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
						addNameArray(nameList,id);//getting rid of dublicates in playerList
					
				
						
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
