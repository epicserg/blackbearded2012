//Responds to an attempt of the player to bomb the enemy ship
function bombed(c,a,b)
{	
	if(gameIsPlayed==true && engine.getEnemyFieldHistory(a,b)==false){
		engine.setEnemyFieldToBombed(a,b);
		if(engine.enemyShips.getTruth(a,b)==true){
			
			changeElementPicture(c,a,b,"pictures/boom.jpg");
			//TODO add animation when the enemy ship is blown up!!!			
			var destroyedShipSize=engine.detectDestroyedShipsOrigin(2,a,b)-1;
			if(destroyedShipSize>(-1)){
				markDestroyedShips(2,a,b,20,20,engine.enemyShips);
				engine.enemyResourses[destroyedShipSize]=engine.enemyResourses[destroyedShipSize]-1;
				engine.enemyShipDestroyed();
			}
						
			}
		else{
			changeElementPicture(c,a,b,"pictures/missed.jpg");
			
		}


		theBot.bombPlayer();
	}
  }
//simulation of bombing players ships by enemy
function bombedByBot(a,b){	
	if(gameIsPlayed==true && engine.getMyFieldHistory(a,b)==false){
		engine.setMyFieldToBombed(a,b);
		if(engine.myShips.getTruth(a,b)==true){
			changeElementPicture(1,a,b,"pictures/boom.jpg");
						
			var destroyedShipSize=engine.detectDestroyedShipsOrigin(1,a,b)-1;
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
	this.enemyShips= new shipArray();//after confirm  button pressed we'll need to load enemy's positions from net
	
	this.setMyFieldToBombed=function setMyFieldToBombed(i,j){
		this.myHistory.setTruth(i,j,new Boolean(1));
	}
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
	
	this.detectDestroyedShipsOrigin=detectDestroyedShipsOrigin;
	this.detectDestroyedShips=detectDestroyedShips;
	
	
}


function checkForCell(pos,a,b,shipObject,historyObject,diag,up){
	var scannedShipSize=0;
	
		if(shipObject.getTruth(a,b)==true && historyObject.getTruth(a,b)==true){
			scannedShipSize++;
			scannedShipSize=scannedShipSize+engine.detectDestroyedShips(pos,a,b,diag,up);
		}
	return scannedShipSize;
}
function detectDestroyedShipsOrigin(pos,a,b){
	var scannedShipSize=0;
	var disrupt=0;
	if(pos==1){
		var ships=this.myShips;
		var history=this.myHistory;
	}
	else{
		var ships=this.enemyShips;
		var history=this.enemyHistory;
	}
	
	
		if(ships.getTruth(a,b)==true && history.getTruth(a,b)==true){
			scannedShipSize++;
		}
		
		var indexA=a+1
		var indexB=b;
		scannedShipSize=scannedShipSize+checkForCell(pos,indexA,indexB,ships,history,0,new Boolean(1));
		indexA=a-1;
		scannedShipSize=scannedShipSize+checkForCell(pos,indexA,indexB,ships,history,0,new Boolean(0));
		indexB=b+1;
		indexA=a;
		scannedShipSize=scannedShipSize+checkForCell(pos,indexA,indexB,ships,history,1,new Boolean(1));
		indexB=b-1;
		scannedShipSize=scannedShipSize+checkForCell(pos,indexA,indexB,ships,history,1,new Boolean(0));
	
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



function detectDestroyedShips(pos,a,b,diag,up){
	
	var scannedShipSize=0;//
		if(pos==1){
		var ships=this.myShips;
		var history=this.myHistory;
	}
	else{
		var ships=this.enemyShips;
		var history=this.enemyHistory;
	}
	
	
		if(diag==0 && up==true){
			var indexA=a+1;
			if(ships.getTruth(indexA,b)==true && history.getTruth(indexA,b)==true){
				scannedShipSize++;

				scannedShipSize=scannedShipSize+this.detectDestroyedShips(pos,indexA,b,diag,new Boolean(1));
			}
		}
		if(diag==0 && up==false){
		var indexA=a-1;
			if(ships.getTruth(indexA,b)==true && history.getTruth(indexA,b)==true){
				scannedShipSize++;
				scannedShipSize=scannedShipSize+this.detectDestroyedShips(pos,indexA,b,diag,new Boolean(0));
			}
		}
		
		
		if(diag==1 && up==true){
		var indexB=1+b;
			if(ships.getTruth(a,indexB)==true && history.getTruth(a,indexB)==true){
				scannedShipSize++;
				scannedShipSize=scannedShipSize+this.detectDestroyedShips(pos,a,indexB,diag,new Boolean(1));
			}
		}
		if(diag==1 && up==false){
				var indexB=b-1;
			if(ships.getTruth(a,indexB)==true && history.getTruth(a,indexB)==true){
				scannedShipSize++;
				scannedShipSize=scannedShipSize+this.detectDestroyedShips(pos,a,indexB,diag,new Boolean(0));
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
			
			bombed(2,i,j);
		}}
}
*/
var engine=new theEngine();

positionEnemyShips();

	