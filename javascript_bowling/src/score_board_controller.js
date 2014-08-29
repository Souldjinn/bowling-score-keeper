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
}

Game.prototype = { 
	startGame: function(){
		this.allPlayersScores.addAllPlayers(this.numberOfPlayers)
		for(var x=0; x<10; x++){
			this.gameSequence()
		}
	},

	gameSequence: function(){
		// initialize model that will hold state of the game(player rows and frames)
		// ask the player for the first set of pins knocked down
		//check to see if it was a strike
			//if not a strike 
			//ask the player for the second set of pins knocked down
		//

	},

	playerAmountPrompt: function(){
		this.numberOfPlayers = prompt("Enter the number of players", "1")
		this.display.setUpColumns(this.numberOfPlayers)	
	},

	playerNamesPrompt: function(){
		var playersNames = []
		for(var i=0; i<this.numberOfPlayers; i++){
			playersNames.push( prompt( "Enter a name for player " + ( i+1 ), "Name") )
		}
		this.display.setUpPlayerNames(playersNames)
	}
}

