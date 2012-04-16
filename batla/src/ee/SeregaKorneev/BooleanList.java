package ee.SeregaKorneev;
import java.util.ArrayList;
import java.util.List;

//Simple datastructure
public class BooleanList {
	
	
	private int lastX=-1;
	private int lastY=-1;
	
	public int getLastX() {
		return lastX;
	}
	public void setLast(int lastX,int lastY) {
		this.lastY = lastY;
		this.lastX = lastX;
	}
	public int getLastY() {
		return lastY;
	}



	Boolean[][] target;
	BooleanList(){
		target =createListWithFalse();
	}
	synchronized  void setTruth(int i,int j){
		 target[i][j]=true;
		 
		 System.out.println(target[i][j]+ " uploaded at "+i+ " and  "+ j);
		
		 
		 
	 }
	Boolean[][] createListWithFalse(){
		Boolean[][] returnValue = new Boolean[10][10]; 
		for(int i=0;i<10;i++){
			Boolean[] locList=new Boolean[10];
			for(int j=0;j<10;j++){
				locList[j]=false;
			}
			returnValue[i]=locList;
		}
		return returnValue;
	}
	
	 
	 Boolean getTruth(int i , int j){
		 if(i>9||j>9||i<0||j<0){
			 return false;
		 }
		 return target[i][j];
	 }
	 

}
