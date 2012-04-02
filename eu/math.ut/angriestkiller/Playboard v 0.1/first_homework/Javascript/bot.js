function randomStrategyBot(){
	this.bombPlayer=bombPlayer;
	this.cellsToBomb=100;
}
//selects which cell should be bombed and calls the bomb command
function bombPlayer(){
	var randomFactor= Math.floor(Math.random()*this.cellsToBomb);
	var randomChoiseX=0;var randomChoiseY=0;
	var loopBreak=new Boolean(0);
	for(i=0;i<10;i++){
		for(j=0;j<10;j++){
			if(engine.getMyFieldHistory(i,j)==false){
				randomFactor--;
				if(randomFactor==0){

					randomChoiseX=i;randomChoiseY=j;
					loopBreak=new Boolean(1);
					break;
				}
			}
		}
		if(loopBreak==true){
			break;
		}
		
	}
	this.cellsToBomb--;
	bombedByBot(randomChoiseX,randomChoiseY);
	
	
}	
var theBot=new randomStrategyBot();
