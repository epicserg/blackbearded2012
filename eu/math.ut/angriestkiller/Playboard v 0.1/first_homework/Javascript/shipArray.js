function shipArray(){
	this.shipCoords=MultiArray(10,10);
	this.getTruth=getTruth;
	this.setTruth=setTruth;
}
function getTruth(i,j){
	return this.shipCoords[i][j];
	}
function setTruth(i,j,Boolean){
	this.shipCoords[i][j]=Boolean;
	}	
	
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

//var tempX = 0;
//var tempY = 0;
//document.captureEvents(Event.MOUSEMOVE);
//document.onmousemove = getMouseXY;
//var globalId=' ';
var active=0;
var diagonal=1;
var myShips =new shipArray();//after confirm button pressed we'll need to load our ship possitions
var enemyShips= new shipArray();//after confirm  button pressed we'll need to load enemy's positions from net
myShips.setTruth(0,0,new Boolean(1));
myShips.setTruth(0,1,new Boolean(1));
myShips.setTruth(0,2,new Boolean(1));
//shipDragged("4ship");

	