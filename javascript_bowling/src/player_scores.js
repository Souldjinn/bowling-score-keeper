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
	saveScores: function(player, turn, roundScores){
		var currentRoundFrame = this.playerList[player][turn]

		currentRoundFrame.ballOne = roundScores[0]
		currentRoundFrame.total = 10

		if (roundScores[1]){
			currentRoundFrame.ballTwo = roundScores[1]
			currentRoundFrame.total = roundScores[0] + roundScores[1]
		}
		return currentRoundFrame
	}
}

var FrameCell = function(){
	this.ballOne = null
	this.ballTwo = null
	this.total	= null
}