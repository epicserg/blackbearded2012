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
function getMouseXY(e) {

  // grab the x-y pos.s if browser is NS
    tempX = e.pageX;
    tempY = e.pageY;
    
  // catch possible negative values in NS4
 
  // show the position values in the form named Show
  // in the text fields named MouseX and MouseY
	moveImage("ufo");
  return true
}
/*
function moveImage(id) {
	//Keep on moving the image till the target is achieved
	 x = tempX; 
	 y = tempY;
	document.getElementById(id).style.top  = y+'px';
	document.getElementById(id).style.left = x+'px';
}
//var globalId=' ';

var tempX = 0;
var tempY = 0;
*/
var active=0;
var diagonal=1;
var myShips =new shipArray();//after confirm button pressed we'll need to load our ship possitions
var enemyShips= new shipArray();//after confirm  button pressed we'll need to load enemy's positions from net
myShips.setTruth(0,0,new Boolean(1));
myShips.setTruth(0,1,new Boolean(1));
myShips.setTruth(0,2,new Boolean(1));
//shipDragged("4ship");

	