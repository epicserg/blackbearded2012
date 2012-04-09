package ee.SeregaKorneev;

import java.util.ArrayList;
import java.util.List;

public class Game {
	
	int firstPlayerId, secondPlayerId;
	BooleanList firstPositions  ,secondPositions,firstHistory,secondHistory;//= new ArrayList();
	public boolean gameEnded =false;
	boolean firstPlayersTurn =true;
	int firstPlacedCells=0;
	int secondPlacedCells=0;
	public boolean bombingStarted=false;
	int firstPlayerStreak=0;
	int secondPlayerStreak=0;
	
	public Game(int id1){
		this.firstPlayerId=id1;
		this.secondPlayerId=-1;
		firstPositions=new BooleanList();
		secondPositions=new BooleanList();
		firstHistory=new BooleanList();
		secondHistory=new BooleanList();
		
	}
	public int getEnemyStreak(int id){
		if(id==firstPlayerId){
			return secondPlayerStreak;
		}
		else{
			return firstPlayerStreak;
		}
	}
	
	boolean checkForShip(int id , int xCoord,int yCoord){
		BooleanList enemyShips=getEnemyField(id);
		return enemyShips.getTruth(xCoord,yCoord);
	}
	
	
	
	synchronized boolean BombPlayer(int bomberPlayerId, int xCoord ,int yCoord){
		boolean winDetected=false;
		
		if(bomberPlayerId==firstPlayerId){
			if(secondPositions.getTruth(xCoord,yCoord)){
				 firstPlayerStreak++;
				 if(firstPlayerStreak==20){
					 winDetected=true;
					 //TODO call a win function
				 }
			}
			secondHistory.setTruth(xCoord,yCoord);
			secondHistory.setLast(xCoord,yCoord);

		}
		else{
			if(firstPositions.getTruth(xCoord,yCoord)){
				 secondPlayerStreak++;
				 if(secondPlayerStreak==20){
					 winDetected=true;
					//TODO call a win function
				 }
			}
			firstHistory.setLast(xCoord,yCoord);
			firstHistory.setTruth(xCoord,yCoord);
		}
		return winDetected;
	}
	
	public int getLastBombedX(int callerId){
		if(callerId==firstPlayerId){
			return firstHistory.getLastX();
		}
		else{
			return secondHistory.getLastX();
		}
	}
	public int getLastBombedY(int callerId){
		if(callerId==firstPlayerId){
			return firstHistory.getLastY();
		}
		else{
			return secondHistory.getLastY();
		}
	}
	
	
	public BooleanList getEnemyField(int id){
		if(id==firstPlayerId){
			return secondPositions;
		}
		else{
			return firstPositions;
		}
	}
	
	
	synchronized public int getBombingPlayerId(){
		if(firstPlayersTurn){
			return firstPlayerId;
		}
		else{
			return  secondPlayerId;
		}
	}
	synchronized void changeBomber(){
		if(firstPlayersTurn){
			firstPlayersTurn=false;
		}
		else{
			firstPlayersTurn=true;
		}
	}
	

	void setSecondPlayer(int id2){
		this.secondPlayerId=id2;
		System.out.println("second player has joined the hub ");
		//TODO tell the first player about this
	}

	public boolean doesFirstPlayerGo(){
		return firstPlayersTurn;
	}
	public boolean idIsfirstPlayers(int id){
		if (id==firstPlayerId){
			return true;
		}
		return false;
	}
	
	int getanotherPlayerId(int id){
		if(firstPlayerId==id){
			return secondPlayerId;
			
		}
		else{
			return firstPlayerId;
		}
	}
	
	 void LoadFirstPostions(int coordX,int coordY){
		//TODO this will build positions of first player
		firstPlacedCells++;
		firstPositions.setTruth(coordX,coordY);
		checkForBombing();
	}
	
	 void LoadSecondPositions(int coordX,int coordY){
		secondPlacedCells++;
		secondPositions.setTruth(coordX,coordY);
		checkForBombing();
	}
	void checkForBombing(){
		if(firstPlacedCells>19 && secondPlacedCells>19){
			System.out.println("all players have placed all their ships");
			 bombingStarted=true;
			//TODO initiate game start sequence
		}
	}

	
	public int getFirstPlayerId() {
		return firstPlayerId;
	}

	public int getSecondPlayerId() {
		return secondPlayerId;
	}



	synchronized Boolean checkForWin(int playerId){
		//TODO use algorithm in javascript
		return false;
	}

	
	//id -- is a target Id
	int checkForCell(int Id,int a,int b,BooleanList shipObject,BooleanList historyObject, boolean diag, boolean up){
		int scannedShipSize=0;
		
			if(shipObject.getTruth(a,b)==true && historyObject.getTruth(a,b)==true){
				scannedShipSize++;
				scannedShipSize=scannedShipSize+detectDestroyedShips(Id,a,b,diag,up);
			}
		return scannedShipSize;
	}
	
	
	int detectDestroyedShipsOrigin(int Id, int a, int b){
		int scannedShipSize=0;
		int disrupt=0;
		BooleanList ships;
		BooleanList history;
		if(Id==firstPlayerId){
			 ships=this.firstPositions;
			 history=this.firstHistory;
		}
		else{
			 ships=this.secondPositions;
			 history=this.secondHistory;
		}
		
		
			if(ships.getTruth(a,b)==true && history.getTruth(a,b)==true){
				scannedShipSize++;
			}
			
			int indexA=a+1;
			int indexB=b;
			
			scannedShipSize=scannedShipSize+checkForCell(Id,indexA,indexB,ships,history,false,true);
			indexA=a-1;
			scannedShipSize=scannedShipSize+checkForCell(Id,indexA,indexB,ships,history,false,false);
			indexB=b+1;
			indexA=a;
			scannedShipSize=scannedShipSize+checkForCell(Id,indexA,indexB,ships,history,true,true);
			indexB=b-1;
			scannedShipSize=scannedShipSize+checkForCell(Id,indexA,indexB,ships,history,true,false);
		
			if(ships.getTruth(a+1,b)==true && history.getTruth(a+1,b)==false){
				scannedShipSize=-10;
			}
					
			if(ships.getTruth(a-1,b)==true && history.getTruth(a-1,b)==false){
				scannedShipSize=-10;
			}
					
			if(ships.getTruth(a,1+b)==true && history.getTruth(a,1+b)==false){
				scannedShipSize=-10;
			}
					
			if(ships.getTruth(a,b-1)==true && history.getTruth(a,b-1)==false){
				scannedShipSize=-10;
			}
		return scannedShipSize;
	}

	
	int detectDestroyedShips(int Id,int a, int b,boolean diag, boolean up){
		
		int scannedShipSize=0;//
		BooleanList ships;
		BooleanList history;
		if(Id==firstPlayerId){
			 ships=this.firstPositions;
			 history=this.firstHistory;
		}
		else{
			 ships=this.secondPositions;
			 history=this.secondHistory;
		}
		
		
			if(diag==false && up==true){
				int indexA=a+1;
				if(ships.getTruth(indexA,b)==true && history.getTruth(indexA,b)==true){
					scannedShipSize++;

					scannedShipSize=scannedShipSize+this.detectDestroyedShips(Id,indexA,b,diag,true);
				}
			}
			if(diag==false && up==false){
			int indexA=a-1;
				if(ships.getTruth(indexA,b)==true && history.getTruth(indexA,b)==true){
					scannedShipSize++;
					scannedShipSize=scannedShipSize+this.detectDestroyedShips(Id,indexA,b,diag,false);
				}
			}
			
			
			if(diag==true && up==true){
			int indexB=1+b;
				if(ships.getTruth(a,indexB)==true && history.getTruth(a,indexB)==true){
					scannedShipSize++;
					scannedShipSize=scannedShipSize+this.detectDestroyedShips(Id,a,indexB,diag,true);
				}
			}
			if(diag==true && up==false){
					int indexB=b-1;
				if(ships.getTruth(a,indexB)==true && history.getTruth(a,indexB)==true){
					scannedShipSize++;
					scannedShipSize=scannedShipSize+this.detectDestroyedShips(Id,a,indexB,diag,false);
				}
			}
			if(ships.getTruth(a+1,b)==true && history.getTruth(a+1,b)==false){
				scannedShipSize=-10;
			}
			if(ships.getTruth(a-1,b)==true && history.getTruth(a-1,b)==false){
				scannedShipSize=-10;
			}
			if(ships.getTruth(a,1+b)==true && history.getTruth(a,1+b)==false){
				scannedShipSize=-10;
			}
			if(ships.getTruth(a,b-1)==true && history.getTruth(a,b-1)==false){
				scannedShipSize=-10;
			}
			
			return scannedShipSize;
	}
	
	
}