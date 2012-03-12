//Responds to an attempt of the player to bomb the ship


function bombed(c,a,b)
{	
	if(gameIsPlayed==true){
		if(enemyShips.getTruth(a,b)==true){
		document.getElementById("pic"+c+"."+a+"."+b).src="pictures/boom.jpg";
			//TODO add animation when the enemy ship is blown up!!!
			bombedBot(1,Math.floor(Math.random()*10),Math.floor(Math.random()*10));
			}
		else{
			document.getElementById("pic"+c+"."+a+"."+b).src="pictures/missed.jpg";
			bombedBot(1,Math.floor(Math.random()*10),Math.floor(Math.random()*10));
		}
	}
  }


//simulation of bombing players ships by enemy
function bombedBot(a,b,c)
  {	
	if(gameIsPlayed==true){
		if(myShips.getTruth(b,c)==true){
		  document.getElementById("pic"+a+"."+b+"."+c).src="pictures/boom.jpg";
			//TODO add animation when my ship is blown up!!!
			}
		else{
			document.getElementById("pic"+a+"."+b+"."+c).src="pictures/missed.jpg";
		  
		}
	}
  }

//TODO this function should highlight cells where the ship can be placed. Should be called when mouse is above the cell
/*
function highlight(x,y){

}

*/

//TODO this function should unhighlight cells where the ship can be placed. Should be called when mouse ismoved outward the cell
/*
function unHighlight(x,y){

}

*/


//Set's selected ship to be dragged.
function shipDragged(n){
	
	//TODO Highlight this kind of ship
	alert(n);
	active=n;   
	
  }
  
  
 //Makes checks , so the game would begin 
 function startGame(){
	var checkBool=0;
	for(i =0;i<4;i++){
		if(myResourses[i]>0){
			checkBool=1;
		}
	}
	if(checkBool==0){
		gameIsPlayed=new Boolean(1);
		alert("round 1 - fight");
	}
	else{
		alert("You didn't plase all ships");
	}
 }
//this function will check if you can insert a ship on the field
function checkValidityDiag(y,x1,x2){
	var returnValue=new Boolean(0);
		for(i=y-1;i<y+2;i++){
			for(j=x1-1;j<x2+2;j++){
				//alert("x is "+j+" y is " +i+"  " +myShips.getTruth(i,j));
				if(diagonal==1){
					if(myShips.getTruth(i,j)==true){
						returnValue=new Boolean(1);
					}
				}
				else{
					if(myShips.getTruth(j,i)==true){
						returnValue=new Boolean(1);
					}
				}
			}		
		}
		return returnValue;
	
}

//Edit's ship position object and chaanges pic on the board
function addShip(a,y,x){
	document.getElementById("pic"+a+"."+y+"."+x).src="pictures/1shidboard.jpg";
	myShips.setTruth(y,x,new Boolean(1));

}
function released(a,y,x){
	
	if(diagonal==1){
		var info= countCoord(active,x);
		if(checkValidityDiag(y,info[0],info[1])==false){
			if(active==4 && myResourses[3]>0){
				var point1=info[0]+1;
				addShip(a,y,info[0]);
				addShip(a,y,point1);
				point1++;
				addShip(a,y,point1);
				addShip(a,y,info[1]);
				myResourses[3]--;
			}
				if(active==3 && myResourses[2]>0){
				var point1=info[0]+1;
				addShip(a,y,info[0]);
				addShip(a,y,point1);
				addShip(a,y,info[1]);
				myResourses[2]--;
			}
				if(active==2 && myResourses[1]>0){
				addShip(a,y,info[0]);
				addShip(a,y,info[1]);
				myResourses[1]--;
			}
			if(active==1 && myResourses[0]>0){
				addShip(a,y,info[0]);
				myResourses[0]--;
			}
		
		
		}
	}
	else{
		var info= countCoord(active,y);
		if(checkValidityDiag(x,info[0],info[1])==false){
			if(active==4 && myResourses[3]>0){
				var point1=info[0]+1;
				addShip(a,info[0],x);
				addShip(a,point1,x);
				point1++;
				addShip(a,point1,x);
				addShip(a,info[1],x);
				myResourses[3]--;
			}
				if(active==3 && myResourses[2]>0){
				var point1=info[0]+1;
				addShip(a,info[0],x);
				addShip(a,point1,x);
				addShip(a,info[1],x);
				myResourses[2]--;
			}	
				if(active==2 && myResourses[1]>0){
				addShip(a,info[0],x);
				addShip(a,info[1],x);
				myResourses[1]--;
			}
			if(active==1 && myResourses[0]>0){
				addShip(a,info[0],x);
				myResourses[0]--;
			}
		
		
		}
	}
	clearShips();
}
//deletes a ship picture if all ships of this kind are placed
function clearShips(){
	for(i=0;i<4;i++){
		if(myResourses[i]==0){
			var number=i+1;
			document.getElementById(number+'ship').style.visibility = 'hidden'; 
			myResourses[i]--;
		}
	}

}

//calculates where ship should be placed
function countCoord(n,coordinate){
	var returnValue;
	
	if(n+coordinate>9){
		returnValue=new Array(9-n+1,9);
		return returnValue;
	}
	else{
		returnValue=new Array(coordinate,coordinate+n-1);
		return returnValue;
	}
}
//changes var rotate ,so ship's axis is rotated 90 degrees.
function rotate(){
	if(diagonal==1){
		diagonal=0;
	}
	else{
		diagonal=1;
	}
}



