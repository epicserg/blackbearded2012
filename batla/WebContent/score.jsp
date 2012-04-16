
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/score.css" />
</head>

<body>		

			<script type="text/javascript" src="jquery.js"></script>
       		<script type="text/javascript" >
       		
       		var data = {
       				'action':"seeGameHistory",

       			};

       		$.post("BattleServlet", data, function(response) {
       			
       			
       			drawTable(response);
       			
       		});
       		
			function drawTable(response){
				var editedResponse=response.substring(0, response.length-2);
				var responseArray=editedResponse.split("^^");

				document.write('<center><table width="75%" border="1">');
				document.write('<tr align="center"><td>' +"winner"  + 
						'</td><td>' + "Loser" + '</td></tr>');
				for(var i in responseArray){
					var game=responseArray[i];
					
					var player=game.split("++");
					
					document.write('<tr align="center"><td>' +player[0] + 
							'</td><td>' + player[1] + '</td></tr>');
				}
				document.write('</table></center>');
       		
       			}
       		</script>

</body>
</html>
