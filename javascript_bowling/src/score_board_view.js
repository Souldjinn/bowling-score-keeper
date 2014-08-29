var ScoreBoardDisplay = function(){
	this.playerRow = document.querySelector('.player-row')
	this.scoreFrame = document.querySelector('.score-frame')
	this.scoreBoard = document.querySelector('.score-board')
}

ScoreBoardDisplay.prototype = {
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
	setUpPlayerNames: function(playersNames){
		for(var i=0; i<playersNames.length; i++){
			document.querySelectorAll('.player-name')[i].innerHTML = playersNames[i]
		}
	}
}