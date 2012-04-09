<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">

<html>
<head>
<link rel="stylesheet" type="text/css" href="css/playboard.css" />
</head>
<body>
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
        <h1>Battleship rules</h1>

        <p class="date">February, 2012</p>

        <p class="main"><br>
        Players take turns firing a shot to attack enemy ships.<br>
        <br>
        On your turn, call out a letter and a number of a row and column on the grid.
        Your opponent checks that space on their lower grid, and says "miss" if there are
        no ships there, or "hit" if you guessed a space that contained a ship.<br>
        <br>
        Mark your shots on your upper grid, with white pegs for misses and red pegs for
        hits, to keep track of your guesses.<br>
        <br>
        When one of your ships is hit, put a red peg into that ship on your lower grid at
        the location of the hit. Whenever one of your ships has every slot filled with
        red pegs, you must announce to your opponent that he has sunk your ship.<br>
        <br>
        The first player to sink all opposing ships wins.<br></p>
      </td>
    </tr>

    <tr>
      <td id="fourthtd"colspan="2">
Blackbearded 2012</td>
  </tr>
    </tr>
  </table>
</body>
</html>
