
$(function(){
		var myId = null;
	
		$.post("Lobby", {"action":"register"}, function(data) {
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
			console.log("teade saadetud");
		});		
	});
	
	
	$("#button").click(function(){
		var data = {
			'id' : myId,
			'msg': "offer"
				};
		
		$.post("Lobby", data, function(response) {
			console.log("teade saadetud");
		});		
	});
	
	$("#buttonQuit").click(function(){
		var data = {
			'action':"LeaveLobby",
		     'id' : $('#item1 span').text()
				};
		
		$.post("Lobby", data, function(response) {
			console.log("QUIT teade saadetud");
		});		
	});
	
	$("#buttonAccept").click(function(){
		var data = {
			'id' : myId,
			'msg': "confirmed"
			};
				$.post("Lobby", data, function(response) {
				console.log("teade saadetud");
		});		
	});
	
function getNextMessage() {
		$.get("Lobby?id=" + myId, 
		function (msg) {
			if (msg=="offer"){
				requestThing();}
		
		    else if(msg=="confirmed"){
		    	requestThing();
			}
		    
		    else 
		    $("#enemy").append("<option>" + msg + "</option>");
			getNextMessage();
	
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
	 console.log("QUIT teade saadetud");
			var data = {
				'action':"LeaveLobby",
			     'id' : $('#item1 span').text()
					};
			
			$.post("Lobby", data, function(response) {
				console.log("QUIT teade saadetud");
			});	
		};
		

  
  function requestAdd(){
		$.post("Lobby", {"action":"addName"}, function(data) {
			names2 = data;
			var myArray= names2.split(',');
			
			for(i=0;i<=myArray.length-1;i++){
				if (myArray[i]=="null"){
					$("#enemy").append("<option>" + "There is no one here, be patient"+ "</option>");
					}
				else
				$("#enemy").append("<option onClick='dm();'>" + myArray[i] + "</option>");
			}

			
		});
		}
  