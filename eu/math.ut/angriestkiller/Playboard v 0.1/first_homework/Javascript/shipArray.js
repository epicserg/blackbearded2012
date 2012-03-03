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
var myShips =new shipArray();
myShips.setTruth(0,0,new Boolean(1));
myShips.setTruth(0,1,new Boolean(1));
myShips.setTruth(0,2,new Boolean(1));
document.write(myShips.getTruth(0,1));

	