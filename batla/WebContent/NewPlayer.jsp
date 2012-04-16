<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>

<!DOCTYPE html>
<html>
<head>
<title>lobby</title>
<meta charset="UTF-8">
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="JQuery/LobbyFunctions.js"></script>
<script type="text/javascript" src="Javascript/lobby.js"></script> 
</script>
<link rel="stylesheet" type="text/css" href="css/playboard.css" />
</head>
<body onload="requestAdd() ;">

 <table>
  <tr>
    <td id="firstd" colspan="2">
    <h1>Battleships v 0.1</h1>
  </td>
    </tr>

    <tr valign="top">
      <td id="secondtd"><input name=
      "New Game" type="button" value="New Game" onclick=
      "top.location.href='NewPlayer.jsp'"><br>
      <input name="Score" type="button" value="Score" onclick=
      "top.location.href='score.jsp'"><br>
      <input name="Rules" type="button" value="Rules" onclick=
      "top.location.href='rules.jsp'"><br>
      <input name="Exit" type="button" value="Exit" onclick=
      "top.location.href='playboard.jsp'"><br></td>

      <td id="thirdtd">        
			
			<!-- <form name="theform" action="playboardnewgame.jsp" method="get">-->
			<div id='item1'>
   		    <h1>Your id: <span id="myidd" name="userId">???</span></h1>
   		    <h5 id="modetitle" style="visibility:hidden">0</h2>
   		    </div>
   		    <h2>Enter your NickName</h2>
			<input id="teade" name="user"/>
			<button type="submit" value="show" id="buttonAccept" onclick ="gettingId();" style="visibility:hidden">Accept request</button>
			</form>
			<button type="submit" id="but">Submit</button>

			<h2>Enemy list</h2>
			<ul id="list"></ul>
			

			<div id="select">
				<FORM name=form1>
					<select name= "myList" id="enemy" size="10" class="list">

					</select><br>
				</FORM>
				
				<h2>Current Battles</h2>
			<ul id="list"></ul>
			
				<div id="select">	
			<FORM>
					<select id="CurrentBattles" size="10" class="list">

					</select><br>
			</FORM>
			
				
			<button id="findPlayer">Offer to play</button>		
			<!--<button id="button">Offer to play</button>-->
			<button id="buttonQuit">Quit Game</button>
		<!--	<button id="deleteGonePlayers">Delete players left</button>-->
			<form name="theform" action="playboardnewgame.jsp" method="get">
			<button id="buttonQuit">Join Started Battle</button>
			</form>
			

			<!--/*<button id="findPlayer" onclick=ConcretPlayer()>Choose ivar0</button>*/-->
			<button id="buttonDecline" style="visibility:hidden" onclick=declineThing()>Decline request</button>
			<h2 id="message" style="visibility:hidden">You were offered to play a game. Press Accept or Decline button</h2>
		<tr>
     	 <td id="fourthtd"colspan="2">Blackbearded 2012</td>
 		 </tr>
  		  </tr>
  	</table>
  	
  	
  	
  
 


</body>
</html>