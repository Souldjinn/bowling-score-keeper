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
			var playerRow = this.allPlayersScores.playerList[player]

			this.allPlayersScores.saveScores(player, turn, roundScores)
			this.allPlayersScores.calculateStrikeSpareTotal(player, turn)
			this.allPlayersScores.updateCumulativeScores(player, turn)

			var updatedFrame = this.allPlayersScores.playerList[player][turn]

			this.display.updateScoreBoard(player, turn, updatedFrame)
			this.display.updateTotalsOnBoard(player, turn, playerRow)
		}
	},

	askForPlayerTurn: function(playersName){
		var thisRoundsScore = []
		thisRoundsScore.push( prompt( "Player " + playersName + "'s turn, ball 1", "1-9, ST for Strike") )
		
		if (thisRoundsScore[0] == "ST" || thisRoundsScore[0] == 10){
				thisRoundsScore[0] = 10
			return thisRoundsScore
		}else{
			thisRoundsScore.push( prompt( "Player" + playersName + "'s turn, ball 2", "1-10, 10 will count as spare") )
		}
		thisRoundsScore = this.stringsToInts(thisRoundsScore)

		return thisRoundsScore		
	},
	stringsToInts: function(thisRoundsScore){
		var modifiedArray = []
		for(var y = 0; y<thisRoundsScore.length; y++){
			modifiedArray.push( parseInt( thisRoundsScore[y], 10 ) )
		}
		return modifiedArray
	},

	playerAmountPrompt: function(){
		this.numberOfPlayers = prompt("Enter the number of players", "1")
		this.numberOfPlayers = parseInt( this.numberOfPlayers, 10 )
		this.display.setUpColumns( this.numberOfPlayers )	
	},

	playerNamesPrompt: function(){
		for(var i=0; i<this.numberOfPlayers; i++){
			this.playersNames.push( prompt( "Enter a name for player " + ( i+1 ), "Name") )
		}
		this.display.setUpPlayerNames(this.playersNames)
	}
}

