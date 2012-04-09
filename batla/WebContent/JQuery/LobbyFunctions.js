
$(function(){
		var myId = null;
	
		$.post("Lobby", {"action":"register"}, function(data) {
			console.log("MESSAGE:Your current ID is "+ $('#item1 span').text()+"srvr thinks that "+myId);
			myId = data;
			$("#myidd").text(myId);
			getNextMessage();
		});
		
	
		$("#but").click(function(){
			var data = {
				'id' : myId,
				'msg': $("#teade").val()+$('#item1 span').text()
					};
		$.post("Lobby", data, function(response) {
			console.log("MESSAGE: Sending your ID and nickname to another players " +$("#teade").val()+$('#item1 span').text());
		});		
	});
	
	
	$("#button").click(function(){
		var data = {
			'id' : myId,
			'msg': "offer"
				};
		
		$.post("Lobby", data, function(response) {
			console.log("MESSAGE: Offering another player to play the game");
		});		
	});
	
	$("#buttonQuit").click(function(){
		var data = {
			'action':"LeaveLobby",
		     'id' : $('#item1 span').text()
				};
		
		$.post("Lobby", data, function(response) {
			console.log("MESSAGE: Leaving the lobby. Your id "+$('#item1 span').text()+" will be deleted");
		});		
	});
	
	$("#buttonAccept").click(function(){
		var data = {
			'id' : myId,
			'msg': "confirmed"
			};
				$.post("Lobby", data, function(response) {
			console.log("MESSAGE: You have accepted the game. You are going to enter playboardnewgame.jsp");
		});		
	});
	
function getNextMessage() {
		$.get("Lobby?id=" + myId, 
		function (msg) {
			if (msg=="offer"){
				console.log("MESSAGE: Offer Recieved from another player");
				requestThing();}
		
		    else if(msg=="confirmed"){
		    	console.log("MESSAGE: Cofirmation reciveded from another player");
		    	requestThing();
			}
		    
		    else  if (msg!="confirmed" & msg!="offer"){
		    $("#enemy").append("<option>" + msg + "</option>");
			console.log("MESSAGE: New player added to your name list: " +msg)
			getNextMessage();
		    }
	
		});
	}
});

function askForLeaver(){
	console.log("JUST Asked server for leavers");
		 var data = {
		   'action':"AskForLeaver",
		   'id' :  $('#item1 span').text()
		  };
		 
		 
		  $.post("Lobby", data, function(response) {
		   
		  	 console.log("Asked server for leavers");
		   		//TODO refresh PlayerList
		   		console.log(response);
		   		askForLeaver();
		  }); 
		
}

 function quitOnUnload(){
	 console.log("MESSAGE: You are now leaving the lobby.");
			var data = {
				'action':"LeaveLobby",
			     'id' : $('#item1 span').text()
					};
			
			$.post("Lobby", data, function(response) {
				 console.log("");
			});	
		};
		
//passing players id and nickname to playboardnewgame.jsp
function gettingId(){
	console.log("MESSAGE: Passing players id and nickname to playboardnewgame.jsp");
	$("#teade").val($("#teade").val()+";"+$('#item1 span').text());
}  




/*
 * 
 * will add playing pare to list
function addingPair(){
	var data = {
			'action':"addPair",
		     'msg' : $("#teade").val()
				};
	
}*/

  function requestAdd(){
		$.post("Lobby", {"action":"addName"}, function(data) {
			names2 = data;
			var myArray= names2.split(',');
			
			for(i=0;i<=myArray.length-1;i++){
				if (myArray[i]=="null"){
					$("#enemy").append("<option>" + "There is no one here, be patient"+ "</option>");
					console.log("MESSAGE: Getting player list for those who came before you: NO ONE IS HERE YET");
					}
				else
				$("#enemy").append("<option onClick='dm();'>" + myArray[i] + "</option>");
				console.log("MESSAGE: Getting player list for those who came before you: "+myArray[i]+ " added to list");
			}

			
		});
		}
  