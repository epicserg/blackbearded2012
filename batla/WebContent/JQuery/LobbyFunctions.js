var theName=0;
$(function(){
		var myId = null;
		var ConirmBoolen=0;
	
		$.post("Lobby", {"action":"register"}, function(data) {
			myId = data;
			$("#myidd").text(myId);
			getNextMessage();
			getCurrentPlayers()
			console.log("MESSAGE(Enter):Your current ID is "+ $('#item1 span').text()+"srvr thinks that "+myId);
		});
		
	
		$("#but").click(function(){
			var data = {
				'id' : myId,
				'msg': $("#teade").val()+$('#item1 span').text()
				
					};
			theName=$("#teade").val();
		$.post("Lobby", data, function(response) {
			console.log("MESSAGE(EnterNickName): Sending your ID and nickname to another players " +$("#teade").val()+$('#item1 span').text());
		});		
	});
		
		
	
		//find concret player
		$("#findPlayer").click(function(){
			
			var h1Loc = document.getElementById("modetitle");
			 document.getElementById("modetitle").innerHTML = "1";
			 
			for (var i = 0; i < document.form1.myList.length; i++) {
				console.log("MESSAGE(EnterNickName): Sending request to special player "+document.form1.myList.options[i].value);
		         if (document.form1.myList.options[i].selected == true) {
		        	 
		        	 console.log("JS initiated for add concrete player");
		        	 
		        	 
		        	 var data = {
		     				'id' : myId,
		     				'msg': "r"+document.form1.myList.options[i].value
		     					};
		        	 
		        	 $.post("Lobby", data, function(response) {
		        			console.log("wurkz");
		        		});	
		         }
		        	 
		         }
		});	
		
	
	
	$("#button").click(function(){
		var data = {
			'id' : myId,
			'msg': "offer"
				};
		
		$.post("Lobby", data, function(response) {
			console.log("MESSAGE(Offer): Offering another player to play the game");
		});		
	});
	
	$("#buttonQuit").click(function(){
		var data = {
			'action':"LeaveLobby",
		     'id' : $('#item1 span').text()
				};
		
		$.post("Lobby", data, function(response) {
			console.log("MESSAGE(Quit): Leaving the lobby. Your id "+$('#item1 span').text()+" will be deleted");
		});		
	});
	
	$("#buttonAccept").click(function(){
		var data = {
			'id' : myId,
			'msg': "confirmed"
			};
				$.post("Lobby", data, function(response) {
			console.log("MESSAGE(ConfirmGame): You have accepted the game. You are going to enter playboardnewgame.jsp");
		});		
	});
	
function getCurrentPlayers(){
	var data={
			'id':myId,
			'action':"getCurrent"
	}
	$.post("Lobby",data,function(response){
		console.log("message recieved");
	});
}
function getNextMessage() {
		$.get("Lobby?id=" + myId, 
				
		function (msg) {
			
			msgLength=msg.length;
	    	lastIndex=msgLength-1;
	    	prelastIndex=msgLength-2;
	    	 var idchar=msg.charAt(lastIndex);
	    	 var idchar2=$('#item1 span').text();
	    	 var xxidchar1msg=msg.charAt(lastIndex);
	         var xxidchar2msg=msg.charAt(prelastIndex);
	    	 var xxidchar1id=$('#item1 span').text().charAt(0);
	         var xxidchar2id=$('#item1 span').text().charAt(1);
	    		 
	    	 var h1Loc = document.getElementById("modetitle");
	    	  console.log(idchar+idchar2);
	    	
			if (msg=="offer"){
				console.log("MESSAGE(OfferRecieved): Offer Recieved from another player");
				requestThing();}
		
		    else if(msg=="confirmed"){
		    	console.log("confirmed recieved");
		    	if(  $('#modetitle').html() == "1"){
		    	console.log("MESSAGE(ConfirmRecieved): Cofirmation reciveded from another player");
		    	requestThing();
			}
		    }
			
		    
		    else if(msg.charAt(0)=="r" &&idchar2.length==1) {
		    	console.log("for x tpye id request")
		    		console.log("for x tpye id request 2")
		    	if(idchar==idchar2.charAt(0)){
		    	if(xxidchar2msg!=idchar2.charAt(0)){
		    	console.log("MESSAGE: Recieved request from concrete player");
		    	requestThing();
			}}}
			
		    else  if(msg.charAt(0)=="r" && idchar2.length==2) {
		    	if(xxidchar2msg==xxidchar1id){
		    	console.log("MESSAGE: 1 etapp");
		    	console.log("MESSAGE: 2 PREetapp: "+ xxidchar2msg+xxidchar1id);
		    		console.log("MESSAGE: 2 etapp");
		    		console.log("MESSAGE: 3 PREetapp: "+xxidchar1msg+xxidchar2id);
		    		if(xxidchar1msg==xxidchar2id){
		    			console.log("MESSAGE: 3 etapp");
				    	requestThing();
		    			
		    			
		    		}}}
		    		
	
		    
		    else  if (msg!="confirmed" & msg!="offer"){
		    $("#enemy").append("<option>" + msg + "</option>");
			console.log("MESSAGE(NewPlayerCame): New player added to your name list: " +msg)
			getNextMessage();
		    }
	
		});
	}
});



	 
		
//passing players id and nickname to playboardnewgame.jsp
function gettingId(){
	 closeLobdySession();
	console.log("MESSAGE(NextPageData): Passing players id and nickname to playboardnewgame.jsp");
	$("#teade").val($("#teade").val()+";"+$('#item1 span').text());
}  


function deleteGonePlayers(){

	 
	for (var i = 0; i < document.form1.myList.length; i++) {
		console.log("MESSAGE(EnterNickName): deleting players left "+document.form1.myList.options[i].value);
        document.write.form1.myList.options[i]=="";
      
         }
        	 
         }

	
	
	


function refreshArray(){
	var data = {
			'action':"refresh",
		     'id' : $('#item1 span').text()
				};
		
		$.post("Lobby", data, function(response) {
			console.log("MESSAGE(Quit): refresh");
		});		
	}


  function requestAdd(){
		$.post("Lobby", {"action":"addName"}, function(data) {
			names2 = data;
			var myArray= names2.split(',');
			
			for(i=0;i<=myArray.length-1;i++){
				if (myArray[i]=="null"){
					$("#enemy").append("<option>" + "There is no one here, be patient"+ "</option>");
					console.log("MESSAGE(requestAdd): Getting player list for those who came before you: NO ONE IS HERE YET");
					}
				else if(myArray[i]=="[]"){
					refreshArray();
					$("#enemy").append("<option>" + "There is no one here, be patient"+ "</option>");
				
				}
				else
				$("#enemy").append("<option onClick='dm();'>" + myArray[i] + "</option>");
				console.log("MESSAGE(requestAdd): Getting player list for those who came before you: "+myArray[i]+ " added to list");
			}

			
		});
		}
  