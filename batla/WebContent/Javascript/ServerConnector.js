var myId = null;
var myTag=0;
var connectionOpen=new Boolean(1);
var bombingIsOn=new Boolean(0);
var myTurnToBomb=new Boolean(0);
var shipsUploaded=new Boolean(0);
var recorder=new Recorder();


function show_prompt()
{
	myTag=prompt("Please enter your name");

	return myTag;
}

$(function(){
	console.log(" Loging to BattleServlett");
	
	myTag=prompt("Please enter your tag","0");
	
	var data = {
			'action':"register",
			'tag' : myTag,

		};
	
	console.log("tag is "+data.tag);
	
	$.post("BattleServlet", data, function(data) {
		var serverResponse=data.split("%%");
		
		console.log("tag saved as "+ myTag);
		myId = serverResponse[0];
		console.log("var myId = "+myId);
		console.log(serverResponse[1]);
		getPlaceMessage();
		getEndGameMessage();
	});


	//recieves a message
	function getEndGameMessage(){
		var data = {
				'action':"ListenToEnd",
				'id' : myId,

			};
		$.get("BattleServlet", data,function (msg) {
			
			if(msg="game ended"){
				//console.log("The game has ended server says : "+msg);
				alert("Game ended");
				connectionOpen=new Boolean(0);
				
			}

				
		});
	}
	
	function getPlaceMessage() {
		var data = {
				'action':"ListenToPlace",
				'id' : myId,

			};
		$.get("BattleServlet", data,function (msg) {
			//$("#list").append("<li>" + msg + "</li>");
			if(msg="we're ready to bomb"){
				//console.log("intro accepted "+msg);
				if(connectionOpen==true){
					bombingIsOn=new Boolean(1);
					askServerToBomb();
				}
			}

				
		});
	}
});
function askServerToBomb(){
	console.log("Bomb permition called");
	var data ={
			'action':"bombPermision",
			'id' : myId
				}
	if(connectionOpen==true){
	$.post("BattleServlet", data, function(response) {
		
		console.log("clicked +teade saadetud+ response is AAAAAAAAAA "+ response);
		var serverResponse= response.split("%%");
		console.log("server response second part is "+serverResponse[2]);
		if(serverResponse[0]=="uGo"){
			 myTurnToBomb=new Boolean(1);
			 if(serverResponse[2]=="-1"){
				 recorder.setIAmFirst();
				 alert ("you are first to bomb");	
			 }
			 if(serverResponse[3]>0){
				// alert("your ship is destroyed");
			 }
			 if(serverResponse[3]!="-1"){
				 bombedByEnemy(serverResponse[1],serverResponse[2],serverResponse[3]);			
			 }

			 if(serverResponse[4]=="he won"){
				 alert("hew won");
				 //////////////////////////////////////////////////////////////////////////////
				 saveBattleRecordInBrowserMemory(recorder);
				 //close connections
				 connectionOpen=new Boolean(0);
			 }
		}
	});	
	}
	
}
function uploadShipPosition(x,y){

	if(shipsUploaded==false && connectionOpen==true){
	var data = {
			'action':"uploadShip",
			'id' : myId,
			'xCoord': x,
			'yCoord':y
		};
	console.log("ships  pos sent to server: coords x is "+x +" y is "+y+" id is "+myId);
		$.post("BattleServlet", data, function(response) {
			
			//console.log("clicked +teade saadetud+ response is "+ response);
			shipsUploaded=new Boolean(1);
			
		});	
	
	}
	
}
function shootTheEnemy(a,b){
	var success=new Boolean(0);
	////////////////////////////////////////////////////////////////////////////////////////////////
	/*
 	var myEvents=JSON.stringify(recorder.getMyMovementsHistory().mainList);
 	console.log("SAVE myEvents:"+myEvents);
 	var enemyEvents=JSON.stringify(recorder.getEnemyMovementsHistory().mainList);
 	console.log("SAVE enemyEvents"+enemyEvents);*/
	var data = {
			'action':"Shoot",
			'id' : myId	,
			"xCoord": a,
			"yCoord" :b
		};
	if(connectionOpen==true){
	$.post("BattleServlet", data, function(response) {
		
		//console.log("ShootTheEnemy: Recieved message from server: "+response );
		var serverResponse= response.split("%%");
		if(serverResponse[0]=="bingo"){
			success=new Boolean(1);
			console.log("ShootTheEnemy: Shot result:: "+ success );
			if(serverResponse[1]>0){
				//alert("Enemy ship destroyed "+serverResponse[1]);
			}
		}

		myTurnToBomb=new Boolean(0);
		 askServerToBomb();
		
		 //console.log("Shot new result :: "+ success );
		 bombedContinued(success,a,b,serverResponse[1]);
			if(serverResponse[2]=="won"){
				alert("you won!");
				////////////////////////////////////////////////////////////////////////////////////////////////////
				saveBattleRecordInBrowserMemory(recorder);
				
				connectionOpen=new Boolean(0);
				
				
			}
	});	
	}

}

function closeGame(){
	var data = {
			'action':"LeaveGame",
			'id' : myId		
		};
	console.log(myId);
	
		$.post("BattleServlet", data, function(response) {
			
			console.log("You 've said a server that you 've just left a game");
			
		});	
}

$(window).unload(function() {
	closeGame();
});
