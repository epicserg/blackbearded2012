package ee.SeregaKorneev;

import java.util.ArrayList;
import java.util.List;

public class ListOfGames {
	
	static List <Game> theList;
	boolean gamerWaiting=false;
	int gamerWaitingId=-1;
	
	
	 ListOfGames(){
		theList =new ArrayList();
	}	
	 
	 //Only for a beggining phase 
	 
	 
	 //returns a list of strings with active games. String content is:first and second id of gamers
	 public List getAllActiveGames(){
		 List returnList=new ArrayList();
		 for(int i=0;i<theList.size();i++){
			 if(theList.get(i).getFirstPlayerId()!=-1 && theList.get(i).getSecondPlayerId()!=-1){
				 returnList.add(new String(theList.get(i).getFirstPlayerId()+";"+theList.get(i).getSecondPlayerId()));
			 }
		 }
		 return returnList;
	 }
	 public List getAllGamesWithOnePlayer(){
		 List returnList=new ArrayList();
		 for(int i=0;i<theList.size();i++){
			 if(theList.get(i).getFirstPlayerId()==-1 ){
				 returnList.add(new String(" "+theList.get(i).getSecondPlayerId()));
			 }
			 if(theList.get(i).getSecondPlayerId()==-1 ){
				 returnList.add(new String(" "+theList.get(i).getFirstPlayerId()));
			 }
			 
		 }
		 return returnList;
	 }
	 void printAllGamesAsOneString(){
		 List allGames=getAllActiveGames();
		 for(int i=0;i<allGames.size();i++){
			 System.out.print(allGames.get(i)+" ");
		 }
		 System.out.println();
	 }
	 
	 synchronized boolean setId(int id,String tag){
		 //if id is not present , then add
		 if(!gamerWaiting){
			 gamerWaiting=true;
			 gamerWaitingId=id;
			 System.out.println("player rgistered- waiting for second to come");
			 theList.add(new Game(id,tag));
			 return false;
		 }
		 else{
			 
			 gamerWaiting=false;
			 gamerWaitingId=-1;
			 theList.get(theList.size()-1).setSecondPlayer(id,tag);

			 return true;
		 }
	 }
	 

	 
	
	 synchronized int destroyGameQuit(int id){
		 int secondPlayer=getGameById(id).getanotherPlayerId(id);
		 if(secondPlayer==(-1) && (gamerWaitingId == id)){
			 gamerWaiting=false;
			 gamerWaitingId=-1;
		 }
		 theList.remove(getIdGameById(id));
		 return secondPlayer;
		 
	 }
	 synchronized int getIdGameById(int id){
		 for(int i=0;i<theList.size();i++){
			 if(theList.get(i).getFirstPlayerId()==id || theList.get(i).getSecondPlayerId()==id){
				 return i;
				
			 }
			 
		 }
		 //TODO throw exception
		return -1; 
	 }
	 
	 synchronized Game getGameById(int id){
		 int pos=getIdGameById(id);
		 return  theList.get(pos);
	 }
	 void uploadShip(int id,int xCoord ,int yCoord){
		 Game game=getGameById(id);
		 if(game.idIsfirstPlayers(id)){
			 game.LoadFirstPostions(xCoord,yCoord);
		 }
		 else{
			 game.LoadSecondPositions(xCoord,yCoord);
		 }
	 }
}
