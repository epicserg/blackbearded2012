function bombed(c,a,b)
  {	
	if(myShips.getTruth(a,b)==true){
		
		document.getElementById("pic"+c+"."+a+"."+b).src="pictures/boom.jpg";
		}
	else{
		document.getElementById("pic"+c+"."+a+"."+b).src="pictures/missed.jpg";
	}
	
  }

function shipDragged(n){
	//document.getElementById('4ship').style.visibility = 'hidden'; 
	//stavim galku
	alert(n);
	active=n;   
	/*
document.captureEvents(Event.MOUSEMOVE);
document.onmousemove = getMouseXY;	*/
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
	//alert(" ships will be placed at y  " +y+ "  and x between " +info[0]+ " and " + info[1]);
	//}
}
function clearShips(){
	for(i=0;i<4;i++){
		if(myResourses[i]==0){
			var number=i+1;
			document.getElementById(number+'ship').style.visibility = 'hidden'; 
			myResourses[i]--;
		}
	}

}


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
function rotate(){
	if(diagonal==1){
		diagonal=0;
	}
	else{
		diagonal=1;
	}
}



