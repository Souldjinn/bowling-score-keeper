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
	
	}
}

var FrameCell = function(){
	this.ballOne = null
	this.ballTwo = null
	this.total	= null
}