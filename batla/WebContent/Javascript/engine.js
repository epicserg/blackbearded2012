
  
//Stores info on every player and bot action and ship placement.
//Stores info on ships left for both sides.
//Stores functions on retrieving and editing that info in different ways.
function theEngine(){
//alerts player if he won if every rnemy ship's destroyed

	
	this.enemyShipDestroyed=function enemyShipDestroyed(){

		if(this.enemyResourses[0]<1 && this.enemyResourses[1]<1 && this.enemyResourses[2]<1 && this.enemyResourses[3]<1 ){
			alert("you won");
		}
	}
	this.myShipDestroyed=function myShipDestroyed(){

		if(this.myResourses[0]<1 && this.myResourses[1]<1 && this.myResourses[2]<1 && this.myResourses[3]<1 ){
			alert("he won");
		}
	}
	
	this.myResourses=new Array(4,3,2,1);
	this.enemyResourses=new Array(4,3,2,1);
	
	this.myHistory=new shipArray();
	this.enemyHistory=new shipArray();
	this.myShips =new shipArray();//after confirm button pressed we'll need to load our ship possitions
	
	this.enemyShips= new shipArray();
	
	this.setMyFieldToBombed=function setMyFieldToBombed(i,j){
		this.myHistory.setTruth(i,j,new Boolean(1));
	}
	//TODO
	this.setEnemyFieldToBombed=function setEnemyFieldToBombed(i,j){
		this.enemyHistory.setTruth(i,j,new Boolean(1));
	}
	this.getMyFieldHistory= function getMyFieldHistory(i,j){
		return this.myHistory.getTruth(i,j);
	}
	
	this.getEnemyFieldHistory=function getEnemyFieldHistory(i,j){
		return this.enemyHistory.getTruth(i,j);
	}
	
	this.getmyShipsPosition=function getmyShipsPosition(i,j){
		return this.myShips.getTruth(i,j);
	}
	

	
	
}

function markDestroyedShips(pos,a,b,callerA,callerB,shipMap){
	changeElementPicture(pos,a,b,"pictures/nuke.png");
	if(shipMap.getTruth(a+1,b)==true ){
		if( !((a+1)==callerA && b ==callerB)){
			markDestroyedShips(pos,a+1,b,a,b,shipMap);
			}
	}
	if(shipMap.getTruth(a-1,b)==true){
		if( !((a-1)==callerA && b ==callerB)){
			markDestroyedShips(pos,a-1,b,a,b,shipMap);
		}	
	}
	if(shipMap.getTruth(a,b+1)==true){
		if( !((a)==callerA && (b+1) ==callerB)){
			markDestroyedShips(pos,a,b+1,a,b,shipMap);
		}	
	}
	if(shipMap.getTruth(a,b-1)==true){
		if( !((a)==callerA && (b-1) ==callerB)){
			markDestroyedShips(pos,a,b-1,a,b,shipMap);
		}	
	}
}
//Responds to an attempt of the player to bomb the enemy ship
function bombedContinued(infoOnShot,a,b,shipSize){
		var c=2;
		console.log("here may be a fail"+a+" "+b);
 		if(infoOnShot==true){
 			changeElementPicture(c,a,b,"pictures/boom.jpg");
			engine.enemyShips.setTruth(a,b,new Boolean(1));
			var destroyedShipSize=shipSize-1;
 			if(destroyedShipSize>(-1)){
 				markDestroyedShips(2,a,b,20,20,engine.enemyShips);
 				engine.enemyResourses[destroyedShipSize]=engine.enemyResourses[destroyedShipSize]-1;
 				engine.enemyShipDestroyed();
 			}
 		}
 		else{
 			
 			changeElementPicture(c,a,b,"pictures/missed.jpg");
 		}
		
}
 function bombed(c,a,b){	
 	if(gameIsPlayed==true && engine.getEnemyFieldHistory(a,b)==false && myTurnToBomb==true){
 		
 		engine.setEnemyFieldToBombed(a,b);
 		shootTheEnemy(a,b);
 		
 		
 	}
   }

 //simulation of bombing players ships by enemy
 function bombedByEnemy(a,b,size){	
 	if(gameIsPlayed==true && engine.getMyFieldHistory(a,b)==false){
 		engine.setMyFieldToBombed(a,b);
 		if(engine.myShips.getTruth(a,b)==true){
 			changeElementPicture(1,a,b,"pictures/boom.jpg");
 			
 			
 			
 			
 					
 			var destroyedShipSize=size-1;
 			if(destroyedShipSize>(-1)){
 				markDestroyedShips(1,a,b,20,20,engine.myShips);
 				engine.myResourses[destroyedShipSize]=engine.myResourses[destroyedShipSize]-1;
 				engine.myShipDestroyed();
 			}
 						
 			}
 		else{
 			changeElementPicture(1,a,b,"pictures/missed.jpg");
 		}
 	}	
 }
function positionMyShips(){
	active=4;
	released(1,0,0);
	released(1,2,0);
	released(1,4,0);
	released(1,6,0);
	released(1,8,0);

	released(1,0,9);
	released(1,2,9);
	released(1,4,9);
	released(1,6,9);
	released(1,8,9);
	
	
} 
var engine=new theEngine();

positionMyShips();

	