package ee.SeregaKorneev;

import java.util.ArrayList;
import java.util.List;

public class PlayedGames {
	public static List <PlayedGame> playedGames;
	PlayedGames(){
		playedGames=new  ArrayList();
	}
	public static List<PlayedGame> getPlayedGames() {
		return playedGames;
	}
	public static void setPlayedGames(List<PlayedGame> playedGames) {
		PlayedGames.playedGames = playedGames;
	}
	public static void addGame(boolean hasFirstWon,String tag1,String tag2){
		playedGames.add(new PlayedGame(hasFirstWon,tag1,tag2));
	}
	public static String getAllGames(){
		StringBuffer returnValue =new StringBuffer();
		
		for (PlayedGame game : playedGames){
			if(game.hasFirstWon()){
				
				returnValue.append(game.getFirstGamerTag());
				returnValue.append("++");
				returnValue.append(game.getSecondGamerTag());
				returnValue.append("^^");
			}
			else{
				returnValue.append(game.getSecondGamerTag());
				returnValue.append("++");
				returnValue.append(game.getFirstGamerTag());
				returnValue.append("^^");
			}
		}
		
		return returnValue.toString();
	}
	
}
class PlayedGame{
	public boolean firstWon;
	public String firstGamerTag ,secondGamerTag;
	PlayedGame(boolean id1,String tag1,String tag2){
		this.firstWon=id1;
		
		this.firstGamerTag=tag1;
		this.secondGamerTag=tag2;
	}
	
	public boolean hasFirstWon() {
		return firstWon;
	}



	public void setFirstWon(boolean firstWon) {
		this.firstWon = firstWon;
	}
	
	public String getWinnerTag(){
		if(this.firstWon){
			return firstGamerTag;
		}
		else{
			return secondGamerTag;
		}
	}
	
	public String getLooserTag(){
		if(!this.firstWon){
			return firstGamerTag;
		}
		else{
			return secondGamerTag;
		}
	}

	public String getFirstGamerTag() {
		return firstGamerTag;
	}

	public void setFirstGamerTag(String firstGamerTag) {
		this.firstGamerTag = firstGamerTag;
	}

	public String getSecondGamerTag() {
		return secondGamerTag;
	}

	public void setSecondGamedrTag(String seconGamedrTag) {
		this.secondGamerTag = seconGamedrTag;
	}
}
