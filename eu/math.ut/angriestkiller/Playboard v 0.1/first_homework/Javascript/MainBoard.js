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
function released(a,y,x){
	
	//if(diagonal==1){
	var info= countCoord(active,x);
	if(active==4){
		var point1=info[0]+1;
		document.getElementById("pic"+a+"."+y+"."+info[0]).src="pictures/1shidboard.jpg";
		document.getElementById("pic"+a+"."+y+"."+point1).src="pictures/1shidboard.jpg";
		point1++;
		document.getElementById("pic"+a+"."+y+"."+point1).src="pictures/1shidboard.jpg";
		document.getElementById("pic"+a+"."+y+"."+info[1]).src="pictures/1shidboard.jpg";
	}
		if(active==3){
		var point1=info[0]+1;
		document.getElementById("pic"+a+"."+y+"."+info[0]).src="pictures/1shidboard.jpg";
		document.getElementById("pic"+a+"."+y+"."+point1).src="pictures/1shidboard.jpg";

		document.getElementById("pic"+a+"."+y+"."+info[1]).src="pictures/1shidboard.jpg";
	}
		if(active==2){
		document.getElementById("pic"+a+"."+y+"."+info[0]).src="pictures/1shidboard.jpg";
		document.getElementById("pic"+a+"."+y+"."+info[1]).src="pictures/1shidboard.jpg";
	}
	if(active==1){
		document.getElementById("pic"+a+"."+y+"."+info[0]).src="pictures/1shidboard.jpg";
	}
	
	//alert(" ships will be placed at y  " +y+ "  and x between " +info[0]+ " and " + info[1]);
	//}
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

	/*
function getMouseXY(e) {
    tempX = e.pageX;
    tempY = e.pageY;
	document.getElementById('4ship').style.top  =  tempX +'px';
	document.getElementById('4ship').style.left = tempY+'px';
    return true;
}
*/


