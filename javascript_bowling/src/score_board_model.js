window.addEventListener('load', function(){
	var newBoard = new ScoreBoard()
	newBoard.setUpFirstRow()
	var numberOfPlayers = prompt("Enter the number of players", "1")
	newBoard.setUpColumns(numberOfPlayers)
})

function ScoreBoard(){
	this.playerRow = document.querySelector('.player-row')
	this.scoreFrame = document.querySelector('.score-frame')
	this.scoreBoard = document.querySelector('.score-board')
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
	}
}