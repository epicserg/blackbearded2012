  
  //leaving lobby
  function  closeLobdySession(){
	  var data = {
			   'action':"LeaveLobby",
			   'id' : myId  
			  };
	  
	     }
 
  //leaving if leaving without entering the game
  window.onbeforeunload = function(){ 
	  quitOnUnload();
	 
  }
  
  //making accept request
   function requestThing(){ 
	  document.getElementById("button").style.visibility="hidden";
	  document.getElementById("buttonAccept").style.visibility="visible";
	  document.getElementById("buttonDecline").style.visibility="visible";
	  document.getElementById("message").style.visibility="visible";
  
  }
  
  //declinig request
  function declineThing(){ 
	  document.getElementById("buttonAccept").style.visibility="hidden";
	  document.getElementById("buttonDecline").style.visibility="hidden";
	  document.getElementById("message").style.visibility="hidden";
	  document.getElementById("button").style.visibility="visible";
  }
  