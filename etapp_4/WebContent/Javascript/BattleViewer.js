var battles =getNumberOfRecordedBattles();
var askedNumberOfBattle=ask();

var record=buildRecorderFromLocalStorage(askedNumberOfBattle);
var nextOneIsMe=record.iAmFirst;
console.log(nextOneIsMe);
var reproductionHasEnded=false;

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
		console.log("last event is "+event[0]+" "+event[1]+" "+event[2]);
		reproductionHasEnded=true;
	}
	
	
}


function ask(){
	
	var askedNumberOfBattle=prompt("there are "+battles+" battles recorded. Which one would you like to see","1");
	if(askedNumberOfBattle>0 && askedNumberOfBattle<battles+1 && battles!=0){
		return askedNumberOfBattle;
	}
	else{
		alert("no battles in history");
		ask();
	}
}
drawMyShips();
