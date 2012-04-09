package ee.SeregaKorneev;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;

import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;

@WebServlet(asyncSupported = false, name = "BattleServlet", urlPatterns = {"/"})
public class BattleServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	private ListOfGames games;
	int numberOfId=0;
	
	public BattleServlet(){
		super();
		games=new ListOfGames();
		System.out.println("Battleservlet created");
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	
			System.out.println("doPost activated");
			response.setContentType("text/plain");
			//showGamers();
			
			
			String action = request.getParameter("action");
			
			
			if (action != null && action.equals("LeaveGame")) {
				int id=Integer.parseInt(request.getParameter("id"));
				System.out.println(id+" has just left the game.");
				int secondPlayerId=games.destroyGameQuit(id);
				
				//TODO inform Second player
			}
			if(action.equals("bombPermision")){
				int id=Integer.parseInt(request.getParameter("id"));
				System.out.println(id+" has sent permision to bomb opponent.");
				Game game=games.getGameById(id);
				while(game.getBombingPlayerId()!=id){
					try {
						Thread.sleep(10);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
				}
				
				
				
				response.getWriter().print("uGo");
				response.getWriter().print("%%"+game.getLastBombedX(id));
				response.getWriter().print("%%"+game.getLastBombedY(id));
				response.getWriter().print("%%"+game.detectDestroyedShipsOrigin(id,game.getLastBombedX(id),game.getLastBombedY(id)));
				System.out.println("Bomb Permition :ship owner is "+id + " Server saz destroyed ship size is "
								+game.detectDestroyedShipsOrigin(id,game.getLastBombedX(id),game.getLastBombedX(id)));
				if(game.getEnemyStreak(id)>19){
					response.getWriter().print("%%he won");
					//kill this game session
					
					//TODO save some info in database
					games.destroyGameQuit(id);
					System.out.println("Game session destroyed");
				}
				else{
					response.getWriter().print("%%nothing");
				}
				
			}
			if(action.equals("Shoot")){
				int id=Integer.parseInt(request.getParameter("id"));
				int xCoord=Integer.parseInt(request.getParameter("xCoord"));
				int yCoord=Integer.parseInt(request.getParameter("yCoord"));
				Game game=games.getGameById(id);
				boolean didHeWon=game.BombPlayer(id,xCoord,yCoord);
				Boolean isItBombed=game.checkForShip(id,xCoord,yCoord);
				game.changeBomber();
				if(isItBombed){
					//TODO add info if ship was destroyed
					response.getWriter().print("bingo");
					
				}
				else{
					response.getWriter().print("fail");
					
				}
				int eId=game.getanotherPlayerId(id);
				response.getWriter().print("%%"+game.detectDestroyedShipsOrigin(eId,game.getLastBombedX(eId),game.getLastBombedY(eId)));
				
				if(didHeWon){
					response.getWriter().print("%%won");
				}
				else{
					response.getWriter().print("%%nothing");
				}
				
				
				
				System.out.println("Shoot:ship owner is "+game.getanotherPlayerId(id) +" server saiz destroyed ship size is  "+game.detectDestroyedShipsOrigin(game.getanotherPlayerId(id),game.getLastBombedX(id),game.getLastBombedX(id)));
			}
			
			if (action != null && action.equals("register")) {
				response.getWriter().print(numberOfId); // send ID				
				if(games.setId(numberOfId)){
					response.getWriter().print("%%game finally created");
				}
				else{
					response.getWriter().print("%%waiting for another player");
				}
				numberOfId++;
				
			}
			if (action != null && action.equals("uploadShip")) {
				int id=Integer.parseInt(request.getParameter("id"));
				System.out.println("Upload ships :id is "+request.getParameter("id")+" x is " +request.getParameter("xCoord")+" y is " +request.getParameter("yCoord"));
				
				int xCoord=Integer.parseInt(request.getParameter("xCoord"));
				int yCoord=Integer.parseInt(request.getParameter("yCoord"));
				
				games.uploadShip(id, xCoord, yCoord);
			}
			
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("doGet activated");
		response.setContentType("text/plain");
		String action = request.getParameter("action");
		
		
		if (action.equals("ListenToPlace")) {
			
			int id=Integer.parseInt(request.getParameter("id"));
			try{	
				while(!games.getGameById(id).bombingStarted){
					
					try {
					Thread.sleep(10);}
					catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
				response.getWriter().print("we're ready to bomb");
			}
			catch(ArrayIndexOutOfBoundsException ex){
				response.getWriter().print("%%EXIT");
			}
				
				
		}
		
		
		if (action.equals("ListenToEnd")) {
			
			int id=Integer.parseInt(request.getParameter("id"));
			System.out.println(games.getGameById(id).gameEnded);
			
			try{
				while(!games.getGameById(id).gameEnded){
					
					try {
						Thread.sleep(10);}
					catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			}
				catch(ArrayIndexOutOfBoundsException ex){
					response.getWriter().print("game ended");
				}
				
		}
		else{
			response.getWriter().print("nohing");
		}
	}
}
 
