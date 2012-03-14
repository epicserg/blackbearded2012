//Responds to an attempt of the player to bomb the enemy ship
function bombed(c,a,b)
{	
	if(gameIsPlayed==true && engine.getEnemyFieldHistory(a,b)==false){
		
		if(engine.enemyShips.getTruth(a,b)==true){
		document.getElementById("pic"+c+"."+a+"."+b).src="pictures/boom.jpg";
			//TODO add animation when the enemy ship is blown up!!!			
			engine.enemyShipBombed();			
			}
		else{
			document.getElementById("pic"+c+"."+a+"."+b).src="pictures/missed.jpg";
		}
		engine.setEnemyFieldToBombed(a,b);
		theBot.bombPlayer();
	}
  }
//simulation of bombing players ships by enemy
function bombedByBot(b,c)
  {	
			if(engine.myShips.getTruth(b,c)==true){
		  document.getElementById("pic1"+"."+b+"."+c).src="pictures/boom.jpg";
		  engine.myShipBombed();
			//TODO add animation when my ship is blown up!!!
			}
		else{
			document.getElementById("pic1"+"."+b+"."+c).src="pictures/missed.jpg";
		  
		}
		engine.setMyFieldToBombed(b,c);
	

  }

function theEngine(myShipsDestroyed1,enemyShipsDestroyed1){
	this.myShipsDestroyed=myShipsDestroyed1;
	this.enemyShipsDestroyed=enemyShipsDestroyed1;
	this.enemyShipBombed=enemyShipBombed;
	this.myShipBombed=myShipBombed;
	this.myHistory=new shipArray();
	this.enemyHistory=new shipArray();
	this.myShips =new shipArray();//after confirm button pressed we'll need to load our ship possitions
	this.enemyShips= new shipArray();//after confirm  button pressed we'll need to load enemy's positions from net
	this.setMyFieldToBombed=setMyFieldToBombed;
	this.setEnemyFieldToBombed=setEnemyFieldToBombed;
	this.getMyFieldHistory= getMyFieldHistory;
	this.getEnemyFieldHistory=getEnemyFieldHistory;
}

function setMyFieldToBombed(i,j){
	this.myHistory.setTruth(i,j,new Boolean(1));
}
function setEnemyFieldToBombed(i,j){
	this.enemyHistory.setTruth(i,j,new Boolean(1));
}
function getMyFieldHistory(i,j){
	return this.myHistory.getTruth(i,j);
}
function getEnemyFieldHistory(i,j){
	return this.enemyHistory.getTruth(i,j);
}
function myShipBombed(){
	engine.myShipsDestroyed++;
	if(engine.myShipsDestroyed>19){
		alert("he won");
	}
}

function enemyShipBombed(){
	
	engine.enemyShipsDestroyed++;
	if(engine.enemyShipsDestroyed>19){
		alert("you won");
	}
}

//positions enemy ships on an enemy board --- only in version 0.2
 function positionEnemyShips(){
	//3ship
	engine.enemyShips.setTruth(0,0,new Boolean(1));
	engine.enemyShips.setTruth(0,1,new Boolean(1));
	engine.enemyShips.setTruth(0,2,new Boolean(1));
	//4ship
	engine.enemyShips.setTruth(9,9,new Boolean(1));
	engine.enemyShips.setTruth(9,8,new Boolean(1));
	engine.enemyShips.setTruth(9,7,new Boolean(1));
	engine.enemyShips.setTruth(9,6,new Boolean(1));
	//3ship
	engine.enemyShips.setTruth(9,4,new Boolean(1));
	engine.enemyShips.setTruth(9,3,new Boolean(1));
	engine.enemyShips.setTruth(9,2,new Boolean(1));
	//1ship
	engine.enemyShips.setTruth(9,0,new Boolean(1));
	//2ship
	engine.enemyShips.setTruth(7,4,new Boolean(1));
	engine.enemyShips.setTruth(7,3,new Boolean(1));
	//2ship
	engine.enemyShips.setTruth(5,3,new Boolean(1));
	engine.enemyShips.setTruth(5,2,new Boolean(1));
	//2ship
	engine.enemyShips.setTruth(5,9,new Boolean(1));
	engine.enemyShips.setTruth(5,8,new Boolean(1));
	//1ship
	engine.enemyShips.setTruth(0,9,new Boolean(1));
	//1ship
	engine.enemyShips.setTruth(0,7,new Boolean(1));
	//1ship
	engine.enemyShips.setTruth(0,5,new Boolean(1));
	
	
	
}/*
function testPlay(){
	for(i=0;i<10;i++){
		for(j=0;j<10;j++){
			//setTimeout("alert("oooo");",1250);
			bombed(2,i,j);
		}}
}
*/
var engine=new theEngine(0,0);

positionEnemyShips();



