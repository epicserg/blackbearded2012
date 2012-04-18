<html>
<head>
<!-- head stuff -->


<head><link rel="stylesheet" type="text/css" href="css/playboardnewgame.css">


</head>
<body>



	<table width="500" border="0">
		<tr>
			<td id="firstd"colspan="4">
				<hide id="front"><h1>Battleships v 0.2</h1></hide>
			</td>
		</tr>
		
		<tr valign="top">
			<td id="secondtd" style="background-color:#FFD720;height:300px;width:100px;text-align:top;">
	
				<input name="New Game" type="button" value="New Game" onclick="top.location.href='NewPlayer.jsp'" /> <br  />
				<input name="Scoreo" type="button" value="Score" onclick="top.location.href='score.jsp'" /> <br />
				<input name="Rules" type="button" value="Rules" onclick="top.location.href='rules.jsp'" /> <br />
				<input name="Exit" type="button" value="Exit" onclick="closeGame()" " /> <br />
				<input name="New Game" type="button" value="next turn" onclick="showNextTurn()" /> <br  />
			</td>


		<td id="secondtd">


	<div id="table" style="width:300px;">

<script type="text/javascript">
	var a=" src='pictures/cell.jpg' "
	for(i=0;i<10;i++){
		for(j=0;j<10;j++){
			document.write("<div class='cell'><center><img id= 'pic1."+i+"."+j+"''"+a+" alt='cell' width='28' height='30' /></div>");
		}
}
</script>
	
	</td>

	<td style="background-color:#EEEEEE;height:200px;width:60px;text-align:top;">
		<div id="table" style="width:300px;">


	<script type="text/javascript">
	var a=" src='pictures/cell.jpg' "
	for(i=0;i<10;i++){
		for(j=0;j<10;j++){
			document.write("<div class='cell'><center><img id= 'pic2."+i+"."+j+"'' "+a+" alt='cell' width='28' height='30' /></div>");
		}
}
</script>
		</div>
	</td>
<tr>
	<td colspan="4" style="background-color:#FFA500;text-align:center;">
		<hide id ="end" >Blackbearded 2012</hide>
	</td>
</tr>
</table>
	<script type="text/javascript" src="Javascript/shipArray.js"></script> 
	<script type="text/javascript" src="Javascript/battleRecorder.js"></script> 
	<script type="text/javascript" src="Javascript/BattleViewer.js"></script> 
	<script type="text/javascript" src="jquery.js"></script>

		

	<script type="text/javascript" src="JQuery/jQuery.js"></script>

	 		
</body>
</html>
