<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1>Here you can see list of old battles</h1> 
<script type="text/javascript" >

var battleHistory=localStorage.getItem("TagArray");
var historyArray=JSON.parse(battleHistory);
console.log(battleHistory);



		
function drawTable(historyArray){


		document.write('<center><table width="75%" border="1">');
		document.write('<tr align="center"><td>' +"game number"  + 
				'</td><td>' + "your tag" + '</td></tr>');
		for(var i in historyArray){

			document.write('<tr align="center"><td>' +i + 
					'</td><td>' +historyArray[i]+ '</td></tr>');
		}
		document.write('</table></center>');
		
			}
drawTable(historyArray);
</script>
</body>
</html>