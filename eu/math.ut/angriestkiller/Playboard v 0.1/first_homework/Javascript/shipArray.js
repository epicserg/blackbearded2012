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




//var engine=new theEngine(0,0);



	