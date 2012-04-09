<html>
<head>
<!-- head stuff -->
<script type="text/javascript" >

/*
function getValue(varname)
{
  // First, we load the URL into a variable
  var url = window.location.href;

  // Next, split the url by the ?
  var qparts = url.split("?");

  // Check that there is a querystring, return "" if not
  if (qparts.length == 0)
  {
    return "";
  }

  var query = qparts[1];
  var vars = query.split("&");

  var value = "";

  for (i=0;i<vars.length;i++)
  {

    var parts = vars[i].split("=");

    if (parts[0] == varname)
    {
  
      value = parts[1];

      break;
    }
  }
  
  // Convert escape code
  value = unescape(value);

  // Convert "+"s to " "s
  value.replace(/\+/g," ");

  // Return the value
  return value;
}*/
</script>


<head><link rel="stylesheet" type="text/css" href="css/playboardnewgame.css">


</head>
<body>

<h1>Hello, 
<script type="text/javascript">
/*
var name = getValue("user");
var nameArray=name.split(";");
var myId =nameArray[1];
document.write(nameArray[0]+" Your id is "+id);*/
// end hide -->
</script>
</h1>


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
				<input name="New Game" type="button" value="UploadShips!" onclick="startGame()" /> <br  />
			</td>


		<td id="secondtd">


	<div id="table" style="width:300px;">

	<script type="text/javascript">
	var a=" src='pictures/cell.jpg' "
	for(i=0;i<10;i++){
		for(j=0;j<10;j++){
			document.write("<div class='cell'><center><img id= 'pic1."+i+"."+j+"' onclick='released(1,"+i+","+j+")'"+a+" alt='cell' width='28' height='30' /></div>");
		}
}
</script>
	
	</td>

	<td style="background-color:#EEEEEE;height:200px;width:60px;text-align:top;">
		<div class="highlightit"><img id="4ship"  onclick="shipDragged(4)" src="pictures/4ship.jpg" class="highlightit" alt="some_text"/></div>
		<div class="highlightit"><img id="3ship" onclick="shipDragged(3)" src="pictures/3ship.jpg" class="highlightit" alt="some_text"/></div>
		<div class="highlightit"><img id="2ship" onclick="shipDragged(2)" src="pictures/2ship.jpg" class="highlightit" alt="some_text"/></div>
		<div class="highlightit"><img id= "1ship" onclick="shipDragged(1)" src="pictures/1ship.jpg" alt="some_text"/> <br /> </div>
		<input name="Rotate" type="button" value="Rotate" onclick="rotate()" /> <br  />
		


		<!--<br><img src="pictures/boom.jpg" alt="some_text"/>
		<br><img src="pictures/missed.jpg" alt="some_text"/>-->

	</td>


	<td style="background-color:#EEEEEE;height:200px;width:60px;text-align:top;">
		<div id="table" style="width:300px;">


	<script type="text/javascript">
	var a=" src='pictures/cell.jpg' "
	for(i=0;i<10;i++){
		for(j=0;j<10;j++){
			document.write("<div class='cell'><center><img id= 'pic2."+i+"."+j+"' onclick='bombed(2,"+i+","+j+")'"+a+" alt='cell' width='28' height='30' /></div>");
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
	
	<script type="text/javascript" src="jquery.js"></script>
	<script type="text/javascript" src="Javascript/ServerConnector.js"></script> 
	
	<script type="text/javascript" src="Javascript/shipArray.js"></script> 
	<script type="text/javascript" src="JQuery/jQuery.js"></script>
	<script type="text/javascript" src="JQuery/functions.js"></script>
	<script type="text/javascript" src="Javascript/gameStart.js"></script>
	<script type="text/javascript" src="Javascript/engine.js"></script>
	 	
	 	
	
	
	 
	
</body>
</html>
