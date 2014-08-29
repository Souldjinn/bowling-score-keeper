var PlayerScores = function(){
	this.playerList = []
}

PlayerScores.prototype = {
	makeFullRow: function(){
		var rowToFill = []
		for(var x=0; x<10; x++){
			rowToFill.push(new FrameCell())
		}
		return rowToFill
	},

	addAllPlayers: function(numberOfPlayers){
		var fullRow = this.makeFullRow()
		for(var i=0; i<numberOfPlayers; i++){
			this.playerList.push(fullRow)
		}
	},
	saveScores: function(player, turn, turnScores){
		this.playerList[player][turn].ballOne = turnScores[0]
		if (turnScores[1]){
			this.playerList[player][turn].ballTwo = turnScores[1]
		}
	}
}

var FrameCell = function(){
	this.ballOne = null
	this.ballTwo = null
	this.total	= null
}