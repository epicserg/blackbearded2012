<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
   <title>Score</title>
  <meta name="generator" content=
  "HTML Tidy for Linux/x86 (vers 11 February 2007), see www.w3.org" />
  <link rel="stylesheet" type="text/css" href="css/score.css" />

</head>

<body>
  <script type="text/javascript" src="jquery.js">
</script><script type="text/javascript">
//<![CDATA[
                
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
                                                '<\/td><td>' + "Loser" + '<\/td><\/tr>');
                                for(var i in responseArray){
                                        var game=responseArray[i];
                                        
                                        var player=game.split("++");
                                        
                                        document.write('<tr align="center"><td>' +player[0] + 
                                                        '<\/td><td>' + player[1] + '<\/td><\/tr>');
                                }
                                document.write('<\/table><\/center>');
                
                        }
  //]]>
  </script>
</body>
</html>
