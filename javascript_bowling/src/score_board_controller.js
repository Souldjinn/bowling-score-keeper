window.addEventListener('load', function(){
	var newGame = new Game()
	newGame.display.setUpFirstRow()
	newGame.playerAmountPrompt()	
	newGame.playerNamesPrompt()
	newGame.startGame()
})

function Game(){
	this.display = new ScoreBoardDisplay()
	this.allPlayersScores = new PlayerScores()
	this.numberOfPlayers = 0
	this.playersNames = []
}

Game.prototype = { 
	startGame: function(){
		this.allPlayersScores.addAllPlayers(this.numberOfPlayers)
		for(var turn=0; turn<10; turn++){
			this.gameSequence(turn)
		}
	},

	gameSequence: function(turn){
		for(var player=0; player<this.numberOfPlayers; player++){
			var roundScores = this.askForPlayerTurn(this.playersNames[player]) 
			var updatedFrame = this.allPlayersScores.saveScores(player, turn, roundScores)
			this.display.updateScoreBoard(player, turn, updatedFrame)
			// this.allPlayerScores.checkStrikesAndSpares()
		}
	},

	askForPlayerTurn: function(playersName){
		var thisRoundsScore = []
		thisRoundsScore.push( prompt( "Player " + playersName + "'s turn, ball 1", "1-9, ST for Strike") )
		
		if (thisRoundsScore[0] == "ST" || thisRoundsScore[0] == 10){
			return thisRoundsScore
		}else{
			thisRoundsScore.push( prompt( "Player" + playersName + "'s turn, ball 2", "1-10, 10 will count as spare") )
		}

		return thisRoundsScore		
	},

	playerAmountPrompt: function(){
		this.numberOfPlayers = prompt("Enter the number of players", "1")
		this.display.setUpColumns(this.numberOfPlayers)	
	},

	playerNamesPrompt: function(){
		for(var i=0; i<this.numberOfPlayers; i++){
			this.playersNames.push( prompt( "Enter a name for player " + ( i+1 ), "Name") )
		}
		this.display.setUpPlayerNames(this.playersNames)
	}
}

