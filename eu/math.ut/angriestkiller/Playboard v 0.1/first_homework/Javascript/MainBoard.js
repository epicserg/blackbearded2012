function bombed(c,a,b)
  {
	//document.write(myShips.getTruth(a,b));
	
	if(myShips.getTruth(a,b)==true){
		//document.write("pic"+c+"."+a+"."+b);
		document.getElementById("pic"+c+"."+a+"."+b).src="pictures/boom.jpg";
		}
	else{
		document.getElementById("pic"+c+"."+a+"."+b).src="pictures/missed.jpg";
	}
	//document.write(a);
  }

