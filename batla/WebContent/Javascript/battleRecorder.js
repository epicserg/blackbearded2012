
function EventList(){
		var readerCurrentNumber;
		this.readerCurrentNumber= readerCurrentNumber;
		readerCurrentNumber=-1;
		this.mainList=new Array();
		this.getEventNumber=function getEventNumber(){
			return this.mainList.length;
		}
		this.addNewEvent= function addNewEvent(x,y,sucess){
			
			var data=new Array;
					data.push(x);
					data.push(y);
					data.push(sucess);
					
					
			console.log("DATA saved "+JSON.stringify(data));
			this.mainList.push(data);
			}	

		this.getNextEvent=function getNextEvent(){			
			readerCurrentNumber++;
			//console.log("LOL "+mainList[0][0]);
			if(readerCurrentNumber>this.mainList.length-1){
				var returnValue= new Array();
				returnValue.push(-1);
				returnValue.push(-1);
				console.log("epic fail -- there are no more events");
				returnValue.push(false);
				return returnValue;
				
			}
			else{
				return this.mainList[readerCurrentNumber];
			}
		}	
		this.setNewEventArray=function setNewEventArray(newArray){
			this.mainList=newArray;
		}
		this.resetPosition=function resetPosition(){
				readerCurrentNumber=-1;
			}

	}

function Recorder(){
	
	this.myShipArray=0;
	this.iAmFirst=false;
	this.myMovementsHistory=new EventList();
	this.enemyMovementsHistory=new EventList();
	/*
	this.didIWentFirst=function didIWentFirst(){
		if(this.myMovementHistory.length>this.enemyMovementHistory.length){
			return true;
		}
		else{
			return false;
		}
	}*/
	
	this.setIAmFirst=function setIAmFirst(){
		this.iAmFirst=true;
	}
	this.loadMyShips=function loadMyShips(myShips){
		this.myShipArray=myShips;
	}
	this.loadMyEvents=function loadMyEvents(myEvents){
		this.myMovementsHistory.setNewEventArray(myEvents);
	}
	this.loadEnemyEvents=function loadEnemyEvents(enemyEvents){
		this.enemyMovementsHistory.setNewEventArray(enemyEvents);
	}
	
	
	
	this.getMyMovementsHistory=function getMyMovementsHistory(){
		return this.myMovementsHistory;
	}
	this.getEnemyMovementsHistory=function getEnemyMovementsHistory(){
		return this.enemyMovementsHistory;
	}
	
	
	

	this.registerEnemyTurn= function registerEnemyTurn(x,y,sucess){
		this.enemyMovementsHistory.addNewEvent(x,y,sucess);
	}
	this.registerMyTurn= function registerMyTurn(x,y,sucess){
		this.myMovementsHistory.addNewEvent(x,y,sucess);
	}
	this.getMyNextTurn=function getMyNextTurn(){
		return this.myMovementsHistory.getNextEvent();
	}
	this.getEnemyNextTurn=function getEnemyNextTurn(){
		return this.enemyMovementsHistory.getNextEvent();
	}
	
}
//TODO add function which will save this in browser memory
function saveBattleRecordInBrowserMemory(recorder){
	
	if(typeof(Storage)!=="undefined")
	  {
		localStorage.setItem('didIGoFirst',recorder.iAmFirst);
		var myShipCoordsString=JSON.stringify(engine.myShips.shipCoords);
		console.log("saving "+myShipCoordsString);
     	localStorage.setItem('recordMyShipPositionObject',myShipCoordsString);
     	
    	var myEvents=JSON.stringify(recorder.getMyMovementsHistory().mainList);
     	console.log("SAVE myEvents:"+myEvents);
     	
     	
     	var enemyEvents=JSON.stringify(recorder.getEnemyMovementsHistory().mainList);
     	console.log("SAVE enemyEvents"+enemyEvents);
     	localStorage.setItem('myEventsObject',myEvents);
     	localStorage.setItem('enemyEventsObject',enemyEvents);
     	//localStorage.setItem('myEventhistory',recorder.);
	  }
	else
	  {
	  document.getElementById("result").innerHTML="Sorry, your browser does not support web storage...";
	  }
	
}
function buildRecorderFromLocalStorage(){
	var recorder1=new Recorder();
	if(localStorage.getItem('didIGoFirst')==true){
		//recorder1.setIAmFirst();
		console.log("i am first to go");
	}
	else{
		console.log("i am second to go");
	}
	
	var myShips=JSON.parse(localStorage.getItem('recordMyShipPositionObject'));
	recorder1.loadMyShips(myShips);
	
	
	var myEvents=JSON.parse(localStorage.getItem('myEventsObject'));
	console.log("Building My events " +localStorage.getItem('myEventsObject'));
	recorder1.loadMyEvents(myEvents);
	
	
	var enemyEvents=JSON.parse(localStorage.getItem('enemyEventsObject'));
	console.log("Building Enemy events " +localStorage.getItem('enemyEventsObject'));
	recorder1.loadEnemyEvents(enemyEvents);
	
	
	console.log("my event len is "+myEvents.length+" enemyEvent len is "+ enemyEvents.length);
	if(myEvents.length>enemyEvents.length){
		recorder1.iAmFirst=true;
		console.log("value changed to i am first");
	}
	recorder1.loadMyShips(myShips);
	return recorder1;
}
