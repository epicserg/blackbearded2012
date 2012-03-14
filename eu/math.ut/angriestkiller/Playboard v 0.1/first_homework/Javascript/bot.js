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
var theBot=new randomStrategyBot();
