var record=buildRecorderFromLocalStorage();
var nextOneIsMe=record.iAmFirst;
console.log(nextOneIsMe);
var reproductionHasEnded=false;
/*
console.log(record.myShipArray[0]);
console.log(" my turns");
console.log(record.getMyNextTurn());
console.log(record.getMyNextTurn());
console.log(record.getMyNextTurn());
console.log(record.getMyNextTurn());



console.log("enemy turns");
console.log(record.getEnemyNextTurn());
console.log(record.getEnemyNextTurn());
console.log(record.getEnemyNextTurn());
console.log(record.getEnemyNextTurn());
*/

function drawMyShips(){
	for(i=0;i<10;i++){
		
		for(j=0;j<10;j++){
			if(record.myShipArray[i][j]==true){
				document.getElementById("pic"+1+"."+i+"."+j).src="pictures/1shidboard.jpg";
			}
		}
	}
}
function showNextTurn(){
	if(!reproductionHasEnded){
		 showNextTurnContinue();
	}
}
function showNextTurnContinue(){
	var a;
	var workingObject;
	if(nextOneIsMe){
		a=2;
		workingObject=record.getMyMovementsHistory();
		nextOneIsMe=false;
	}
	else{
		a=1;
		workingObject=record.getEnemyMovementsHistory();
		nextOneIsMe=true;
	}
	
	var event=workingObject.getNextEvent();
	console.log(event[0]+" "+event[1]+" "+ event[2]);
	if(event[0]!=-1){
		if(event[2]==true){
			document.getElementById("pic"+a+"."+event[0]+"."+event[1]).src="pictures/boom.jpg";
		}
		else{
			document.getElementById("pic"+a+"."+event[0]+"."+event[1]).src="pictures/missed.jpg";
		}
	}
	else{
		alert("the battle has ended at this point");
		reproductionHasEnded=true;
	}
	
	
}
drawMyShips();
