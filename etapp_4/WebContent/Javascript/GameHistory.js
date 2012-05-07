	console.log(" Loging to BattleServlett");
	var data = {
			'action':"seeGameHistory",

		};

	$.post("BattleServlet", data, function(response) {
		
		
		drawTable(response);
		
	});
	/*
	function drawTable(response){
		serverResponse=response.split("^^");
		
		document.write('<center><table width="75%" border="1">');
		document.write('<tr align="center"><td>' + row1col1var + '</td><td>' + row1col2var + '</td></tr>');
		document.write('<tr align="center"><td>' + row2col1var + '</td><td>' + row2col2var + '</td></tr>');
		for(var game in serverResponse){
			
		}
		document.write('</table></center>');
		
	  	for(var i in serverResponse){
	  		document.write("<tr>");
	  		var ji=i.split("++");
	  		for(j=0;j<2;j++){
	  			document.write("<th>"+ji[j]+"</th>");
	  		}
	  		document.write("</tr>");
	  	}
	  	
	}
	
	
  	
  	for(var i in serverResponse){
  		document.write("<tr>");
  		for(j=0;j<2;j++){
  			document.write("<th>"+i[j]+"</th>");
  		}
  		document.write("</tr>");
  	}
*/