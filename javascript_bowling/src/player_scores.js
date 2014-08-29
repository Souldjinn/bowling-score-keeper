var PlayerScores = function(){
	this.playerList = []
}

PlayerScores.prototype = {
	addAllPlayers: function(numberOfPlayers){
		blank_array = [0,0,0,0,0,0,0,0,0,0]
		for(i=0; i<numberOfPlayers; i++){
			this.playerList.push(blank_array)
		}
	}
}