  
  //leaving lobby
 

  
  //making accept request
   function requestThing(){ 
	  document.getElementById("buttonAccept").style.visibility="visible";
	  document.getElementById("message").style.visibility="visible";
	   }
   
  
  //declinig request
  function declineThing(){ 
	  document.getElementById("buttonAccept").style.visibility="hidden";
	  document.getElementById("buttonDecline").style.visibility="hidden";
	  document.getElementById("message").style.visibility="hidden";
	  document.getElementById("button").style.visibility="visible";
  }
  
 