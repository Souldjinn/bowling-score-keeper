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
			this.gameSequence()
		}
	},

	gameSequence: function(){
		for(var player=0; player<this.numberOfPlayers; player++){
			var roundScore = this.askForPlayerTurn(this.playersNames[player]) 
		// ask the player for the first set of pins knocked down
		//check to see if it was a strike
			//if not a strike 
			//ask the player for the second set of pins knocked down
		//
		}
	},

	askForPlayerTurn: function(playersName){
		var thisRoundsScore = []
		thisRoundsScore.push( prompt( "Player " + playersName + "'s turn, ball 1", "1-9, ST for Strike") )
		
		if (thisRoundsScore[0] == "ST" || thisRoundsScore[0] == 10){
			return "ST"
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

