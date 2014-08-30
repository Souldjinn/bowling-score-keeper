var PlayerScores = function(){
	this.playerList = []
}

PlayerScores.prototype = {
	makeFullRow: function(){
		var rowToFill = []
		for(var x=0; x<=10; x++){
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
	},
	calculateStrikeSpareTotal: function(player, turn){
		var playerRow = this.playerList[player]

		for(var frame = 0; frame<=turn; frame++){
			if (playerRow[frame].ballOne == 10){
				playerRow[frame].total = 10 + this.calculateStrikeScore(player, frame+1)
			}else if (playerRow[frame].total==10){
				playerRow[frame].total = 10 + playerRow[turn+1].ballOne
			}
		}
	},
	calculateStrikeScore: function(player, frameStep){
		var turnTotal = 0
		var nextFrame = this.playerList[player][frameStep]

		if(nextFrame.ballOne == 10){
			turnTotal = 10 + this.playerList[player][frameStep+1].ballOne
		}else if(nextFrame.ballOne) {	
			turnTotal = nextFrame.ballOne + nextFrame.ballTwo 
		}
		return turnTotal
	},
	updateCumulativeScores: function(player, turn){
		var playerRow = this.playerList[player]

		playerRow[0].cumulativeTotal = playerRow[0].total

		for(var n =1; n<=turn; n++){
			playerRow[n].cumulativeTotal= playerRow[n-1].cumulativeTotal + playerRow[n].total
		}

	}

}

var FrameCell = function(){
	this.ballOne = null
	this.ballTwo = null
	this.total	= null
	this.turn = null
	this.cumulativeTotal = null
}