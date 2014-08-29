window.addEventListener('load', function(){
	var newGame = new Game()
	newGame.display.setUpFirstRow()
	newGame.playerAmountPrompt()	
	newGame.playerNamesPrompt()
	newGame.startGame()
})

function Game(){
	this.display = new ScoreBoardDisplay()
	this.numberOfPlayers = 0
}

Game.prototype = { 
	starGame: function(){

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

