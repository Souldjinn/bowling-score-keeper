window.addEventListener('load', function(){
	var newBoard = new ScoreBoard()
	newBoard.setUpFirstRow()
	newBoard.playerAmountPrompt()	
	newBoard.playerNamesPrompt()
})

function ScoreBoard(){
	this.playerRow = document.querySelector('.player-row')
	this.scoreFrame = document.querySelector('.score-frame')
	this.scoreBoard = document.querySelector('.score-board')
	this.numberOfPlayers = 0
}

ScoreBoard.prototype = {
	setUpFirstRow: function(){
		for(var i=1; i<10; i++){
			this.playerRow.appendChild(this.scoreFrame.cloneNode(true,true))
		}
	},
	setUpColumns: function(numberOfPlayers){
		this.playerRow = document.querySelector('.player-row')
		for(var i=1; i<numberOfPlayers; i++){
			this.scoreBoard.appendChild(this.playerRow.cloneNode(true,true))
		}
	}, 
	playerAmountPrompt: function(){
		this.numberOfPlayers = prompt("Enter the number of players", "1")
		this.setUpColumns(this.numberOfPlayers)	
	},
	playerNamesPrompt: function(){
		var playersNames = []
		for(var i=0; i<this.numberOfPlayers; i++){
			playersNames.push( prompt( "Enter a name for player" + ( i+1 ), "Name") )
		}
		this.setUpPlayerNames(playersNames)
	},
	setUpPlayerNames: function(playersNames){
		for(var i=0; i<playersNames.length; i++){
			document.querySelectorAll('.player-name')[i].innerHTML = playersNames[i]
		}
	}
}

