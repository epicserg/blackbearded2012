<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta name="generator" content=
  "HTML Tidy for Linux/x86 (vers 11 February 2007), see www.w3.org" />
  <meta http-equiv="Content-Type" content="text/html; charset=us-ascii" />

  <title>History</title>
</head>

<body>
  <h1>Here you can see list of old battles</h1><script type="text/javascript">
//<![CDATA[

  var battleHistory=localStorage.getItem("TagArray");
  var historyArray=JSON.parse(battleHistory);
  console.log(battleHistory);



                
  function drawTable(historyArray){


                document.write('<center><table width="75%" border="1">');
                document.write('<tr align="center"><td>' +"game number"  + 
                                '<\/td><td>' + "your tag" + '<\/td><\/tr>');
                for(var i in historyArray){

                        document.write('<tr align="center"><td>' +i + 
                                        '<\/td><td>' +historyArray[i]+ '<\/td><\/tr>');
                }
                document.write('<\/table><\/center>');
                
                        }
  drawTable(historyArray);
  //]]>
  </script>
</body>
</html>
