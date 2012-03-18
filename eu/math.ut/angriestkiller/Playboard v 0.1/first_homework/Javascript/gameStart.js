//c stands for which part of board.  a,b for cell coordinates.
function changeElementPicture(c,a,b,pictureSource){
	document.getElementById("pic"+c+"."+a+"."+b).src=pictureSource;
}
//Set's selected ship to be dragged.
function shipDragged(n){	
	active=n; 
  }
  
  
 //Makes checks , if the game can begin and starts one
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
				
				if(horisontalPlacement==1){
					if(engine.myShips.getTruth(i,j)==true){
						returnValue=new Boolean(1);
					}
				}
				else{
					if(engine.myShips.getTruth(j,i)==true){
						returnValue=new Boolean(1);
					}
				}
			}		
		}
		return returnValue;
	
}

//Edit's ship position object and changes pic on the board
function addShip(a,y,x){
	document.getElementById("pic"+a+"."+y+"."+x).src="pictures/1shidboard.jpg";
	engine.myShips.setTruth(y,x,new Boolean(1));
	
}
//A recursive function. Deletes presence of ship,
	//and asks nearby cells which have ship part to do the same thing 
function removePosition(y,x){
	var nShip=1;
	engine.myShips.setTruth(y,x,new Boolean(0));
	document.getElementById("pic"+1+"."+y+"."+x).src="pictures/cell.jpg";
	if(engine.getmyShipsPosition(y+1,x)==true){
		nShip=nShip+removePosition(y+1,x);
	}
	if(engine.getmyShipsPosition(y-1,x)==true){
		nShip=nShip+removePosition(y-1,x);
	}
	if(engine.getmyShipsPosition(y,1+x)==true){
		nShip=nShip+removePosition(y,1+x);
	}
	if(engine.getmyShipsPosition(y,x-1)==true){
		nShip=nShip+removePosition(y,x-1);
	}
	return nShip;
}

function removeTheShip(a,y,x){

	if(engine.getmyShipsPosition(y+1,x)==true||engine.getmyShipsPosition(y-1,x)==true){
			horisontalPlacement=0;
		}
		if(engine.getmyShipsPosition(y,x+1)==true||engine.getmyShipsPosition(y,x-1)==true){
			horisontalPlacement=1;
		}
		var position=removePosition(y,x)-1;
		var idi=position+1;
		if(myResourses[position]==-1){
			myResourses[position]=myResourses[position]+2;	
		}
		else{
			myResourses[position]=myResourses[position]+1;	
		}
		if(myResourses[position]==1){
			document.getElementById(idi+'ship').style.visibility = 'visible'; 
			active=idi;
		}
	
}
//places your ships on your field
function released(a,y,x){
	if(engine.getmyShipsPosition(y,x)==true && gameIsPlayed==false){	
		 removeTheShip(a,y,x)
	}
	else{
	if(horisontalPlacement==1){
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
}
//deletes a ship picture in a centre if all ships of this kind are placed
function clearShips(){
	for(i=0;i<4;i++){
		if(myResourses[i]==0){
			var number=i+1;
			document.getElementById(number+'ship').style.visibility = 'hidden'; 
			myResourses[i]--;
			if(active>1){
				active--;
			}
		}
	}

}

//calculates where ship should be placed
//TODO we may make this function more advanced , 
		//so it may take positioned ships into an account.
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
//changes var horisontalPlacement ,so ship's axis is rotated 90 degrees.
function rotate(){
	if(horisontalPlacement==1){
		horisontalPlacement=0;
	}
	else{
		horisontalPlacement=1;
	}
}

var gameIsPlayed=new Boolean(0);
var myResourses=new Array(4,3,2,1);
var active=4;
var horisontalPlacement=1;


