window.addEventListener('load', function(){
	newBoard = new ScoreBoard()
	newBoard.setUpFirstRow()	
})

function ScoreBoard(){
	this.player_row = document.querySelector('.player-row')
	this.score_frame = document.querySelector('.score-frame')
}

ScoreBoard.prototype = {
	setUpFirstRow: function(){
		for(var i=1; i<10; i++){
			this.player_row.appendChild(this.score_frame.cloneNode(true,true))
		}
	}
}