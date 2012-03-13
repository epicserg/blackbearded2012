function randomStrategyBot(){
	this.bombPlayer=bombPlayer;
	this.cellsToBomb=100;
}
function bombPlayer(){
	var randomFactor= Math.floor(Math.random()*this.cellsToBomb);
	var randomChoise1=0;var randomChoise2=0;
	var loopBreak=new Boolean(0);
	for(i=0;i<10;i++){
		for(j=0;j<10;j++){
			if(engine.getMyFieldHistory(i,j)==false){
				randomFactor--;
				if(randomFactor==0){

					randomChoise1=i;randomChoise2=j;
					loopBreak=new Boolean(1);
					break;
				}
				
			}
		}
		if(loopBreak==true){
			break;
		}
		
	}
	//alert(randomFactor+" "+randomChoise1+" "+randomChoise2);
	this.cellsToBomb--;
	bombedByBot(randomChoise1,randomChoise2);
	
	
}	

//simulation of bombing players ships by enemy
function bombedByBot(b,c)
  {	



	
		if(engine.myShips.getTruth(b,c)==true){
		  document.getElementById("pic1"+"."+b+"."+c).src="pictures/boom.jpg";
		  engine.myShipBombed();
			//TODO add animation when my ship is blown up!!!
			}
		else{
			document.getElementById("pic1"+"."+b+"."+c).src="pictures/missed.jpg";
		  
		}
		engine.setMyFieldToBombed(b,c);
	

  }
var theBot=new randomStrategyBot();