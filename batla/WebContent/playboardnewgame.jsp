


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"



    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">







<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">



<head>



  <meta name="generator" content=



  "HTML Tidy for Linux/x86 (vers 11 February 2007), see www.w3.org" />



  <link rel="stylesheet" type="text/css" href="css/playboardnewgame.css" />







  <title>Game</title>



</head>







<body>



  <div id="fb-root"></div>







  <table width="500" border="0">



    <tr>



      <td id="firstd" colspan="4">



        <h1>Battleships v 0.2</h1>







        <div id="nameOfPlayer"></div>



      </td>



    </tr>







    <tr valign="top">



      <td id="secondtd" style=



      "background-color:#FFD720;height:300px;width:100px;text-align:top;"><input name=



      "New Game" id="newgame" type="button" value="New Game" onclick=



      "top.location.href='playboardnewgame.jsp'" /><br />



      <input name="Score" type="button" value="History" onclick=



      "top.location.href='Battlehistory.jsp'" /><br />



      <input name="Score" type="button" value="Watch Game Record" onclick=



      "top.location.href='WatchRecord.jsp'" /><br />



      <input name="Scoreo" type="button" value="Score" onclick=



      "top.location.href='score.jsp'" /><br />



      <input name="Rules" type="button" value="Rules" onclick=



      "top.location.href='rules.jsp'" /><br />



      <input name="Exit" type="button" value="Exit" onclick="closeGame()" /><br />



      <input name="New Game" type="button" value="UploadShips!" onclick=



      "startGame()" /><br /></td>







      <td id="secondtd">



        <div id="table" style="width:300px;">



          <script type="text/javascript">



//<![CDATA[



          var a=" src='pictures/cell.jpg' "



          for(i=0;i<10;i++){



                for(j=0;j<10;j++){



                        document.write("<div class='cell'><center><img id= 'pic1."+i+"."+j+"' onclick='released(1,"+i+","+j+")'"+a+" alt='cell' width='28' height='30' /><\/div>");



                }



          }



          //]]>



          </script>



        </div>



      </td>







      <td style="background-color:#EEEEEE;height:200px;width:60px;text-align:top;">



        <div class="highlightit"><img id="4ship" onclick="shipDragged(4)" src=



        "pictures/4ship.jpg" class="highlightit" alt="some_text" /></div>







        <div class="highlightit"><img id="3ship" onclick="shipDragged(3)" src=



        "pictures/3ship.jpg" class="highlightit" alt="some_text" /></div>







        <div class="highlightit"><img id="2ship" onclick="shipDragged(2)" src=



        "pictures/2ship.jpg" class="highlightit" alt="some_text" /></div>







        <div class="highlightit">



          <img id="1ship" onclick="shipDragged(1)" src="pictures/1ship.jpg" alt=



          "some_text" /><br />



        </div><input name="Rotate" type="button" value="Rotate" onclick=



        "rotate()" /><br />



        <!--<br><img src="pictures/boom.jpg" alt="some_text"/>



                <br><img src="pictures/missed.jpg" alt="some_text"/>-->



      </td>







      <td style="background-color:#EEEEEE;height:200px;width:60px;text-align:top;">



        <div id="table" style="width:300px;">



          <script type="text/javascript">



//<![CDATA[



          var a=" src='pictures/cell.jpg' "



          for(i=0;i<10;i++){



                for(j=0;j<10;j++){



                        document.write("<div class='cell'><center><img id= 'pic2."+i+"."+j+"' onclick='bombed(2,"+i+","+j+")'"+a+" alt='cell' width='28' height='30' /><\/div>");



                }



          }



          //]]>



          </script>



        </div>



      </td>



    </tr>







    <tr>



      <td colspan="4" style="background-color:#FFA500;text-align:center;">Blackbearded



      2012</td>



    </tr>



  </table><script type="text/javascript" src="Javascript/shipArray.js">



</script><script type="text/javascript" src="Javascript/battleRecorder.js">



</script><script type="text/javascript" src="jquery.js">



</script><script type="text/javascript" src="Javascript/mordokniga.js">



</script><script type="text/javascript" src="Javascript/ServerConnector.js">



</script><script type="text/javascript" src="JQuery/jQuery.js">



</script><script type="text/javascript" src="JQuery/functions.js">



</script><script type="text/javascript" src="Javascript/gameStart.js">



</script><script type="text/javascript" src="Javascript/engine.js">



</script>



</body>



</html>



