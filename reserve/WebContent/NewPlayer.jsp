<%@page import="java.util.List"%><%@page import="java.util.ArrayList"%>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta name="generator" content=
  "HTML Tidy for Linux/x86 (vers 11 February 2007), see www.w3.org" />

  <title>lobby</title>
  <meta charset="UTF-8" />
  <script type="text/javascript" src="jquery.js">
</script>
  <script type="text/javascript" src="JQuery/LobbyFunctions.js">
</script>
  <script type="text/javascript" src="Javascript/lobby.js">
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
      <td id="secondtd"><input name="New Game" type="button" value="New Game" onclick=
      "top.location.href='NewPlayer.jsp'" /><br />
      <input name="Score" type="button" value="Score" onclick=
      "top.location.href='score.jsp'" /><br />
      <input name="Rules" type="button" value="Rules" onclick=
      "top.location.href='rules.jsp'" /><br />
      <input name="Exit" type="button" value="Exit" onclick=
      "top.location.href='playboard.jsp'" /><br /></td>

      <td id="thirdtd">
        <!-- <form name="theform" action="playboardnewgame.jsp" method="get">-->

        <div id='item1'>
          <h1>Your id: <span id="myidd" name="userId">???</span></h1>

          <h5 id="modetitle" style="visibility:hidden">0</h5>
        </div>

        <h2>Enter your NickName</h2><input id="teade" name="user" /> <button type=
        "submit" value="show" id="buttonAccept" onclick="gettingId();" style=
        "visibility:hidden">Accept request</button> <button type="submit" id=
        "but">Submit</button>

        <h2>Enemy list</h2>

        <ul id="list"></ul>

        <div id="select">
          <form name="form1">
            <select name="myList" id="enemy" size="10" class="list">
              </select><br />
          </form>

          <h2>Current Battles</h2>

          <ul id="list"></ul>

          <div id="select">
            <form>
              <select id="CurrentBattles" size="10" class="list">
                </select><br />
            </form><button id="findPlayer">Offer to play</button> 
            <!--<button id="button">Offer to play</button>-->
             <button id="buttonQuit">Quit Game</button> 
            <!--    <button id="deleteGonePlayers">Delete players left</button>-->

            <form name="theform" action="playboardnewgame.jsp" method="get">
              <button id="buttonQuit">Join Started Battle</button>
            </form>
            <!--/*<button id="findPlayer" onclick=ConcretPlayer()>Choose ivar0</button>*/-->
            <button id="buttonDecline" style="visibility:hidden" onclick=
            "declineThing()">Decline request</button>

            <h2 id="message" style="visibility:hidden">You were offered to play a game.
            Press Accept or Decline button</h2>

            <table>
              <tr>
                <td id="fourthtd" colspan="2">Blackbearded 2012</td>
              </tr>
            </table>
          </div>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>