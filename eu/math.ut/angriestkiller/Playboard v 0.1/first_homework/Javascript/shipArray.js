// A constuctor -- stores data on ships' coordinates.Stores function on retrieving and editing this information
function shipArray(){
	this.shipCoords=MultiArray(10,10);
	this.getTruth=getTruth;
	this.setTruth=setTruth;
}
//checks if there is a ship in a given cell
function getTruth(i,j){
	if(i>9||j>9||i<0||j<0){
		return new Boolean(0);
	}	
	return this.shipCoords[i][j];
	}
function setTruth(i,j,Boolean){
	this.shipCoords[i][j]=Boolean;
	//alert(Boolean +" is set at x " +j+ " y at "+ i) ; 
	}	
	
//Creates array in an array and gives every element	boolean false
function MultiArray(iRows,iCols) 
{ 
var i; 
var j; 
   var a = new Array(iRows); 
   for (i=0; i < iRows; i++) 
   { 
       a[i] = new Array(iCols); 
       for (j=0; j < iCols; j++) 
       { 
           a[i][j] = new Boolean(0); 
       } 
   } 
   return(a); 
} 


//positions enemy ships on an enemy board --- only in version 0.2
 function positionEnemyShips(){
	//3ship
	enemyShips.setTruth(0,0,new Boolean(1));
	enemyShips.setTruth(0,1,new Boolean(1));
	enemyShips.setTruth(0,2,new Boolean(1));
	//4ship
	enemyShips.setTruth(9,9,new Boolean(1));
	enemyShips.setTruth(9,8,new Boolean(1));
	enemyShips.setTruth(9,7,new Boolean(1));
	enemyShips.setTruth(9,6,new Boolean(1));
	//3ship
	enemyShips.setTruth(9,4,new Boolean(1));
	enemyShips.setTruth(9,3,new Boolean(1));
	enemyShips.setTruth(9,2,new Boolean(1));
	//1ship
	enemyShips.setTruth(9,0,new Boolean(1));
	//2ship
	enemyShips.setTruth(7,4,new Boolean(1));
	enemyShips.setTruth(7,3,new Boolean(1));
	//2ship
	enemyShips.setTruth(5,3,new Boolean(1));
	enemyShips.setTruth(5,2,new Boolean(1));
	//2ship
	enemyShips.setTruth(5,9,new Boolean(1));
	enemyShips.setTruth(5,8,new Boolean(1));
	//1ship
	enemyShips.setTruth(0,9,new Boolean(1));
	//1ship
	enemyShips.setTruth(0,7,new Boolean(1));
	//1ship
	enemyShips.setTruth(0,5,new Boolean(1));
	
	
	
}



var gameIsPlayed=new Boolean(0);
var myResourses=new Array(4,3,2,1);
var active=0;
var diagonal=1;
var myShips =new shipArray();//after confirm button pressed we'll need to load our ship possitions
var enemyShips= new shipArray();//after confirm  button pressed we'll need to load enemy's positions from net
positionEnemyShips();




	