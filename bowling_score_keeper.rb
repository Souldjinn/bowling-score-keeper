def start_game_and_menu
	user_choice = 0

	until user_choice.to_i == 2
		puts "Welcome, this application will keep track of your bowling scores"
		puts "Here you may start a game or quit \n\n"
		puts "1. Start a match"
		puts "2. quit the game"

		user_choice = gets.chomp
		game_setup if user_choice.to_i == 1
	end

end

def game_setup
	puts "World Championship bowling has commenced:"
	puts "Please enter the number of players"
	number_of_players = gets.chomp.to_i
	all_scores = []
	number_of_players.times{|index| all_scores << Bowling_Score.new}

end

class Bowling_Score

	def initialize
		@player_score = []
	end

end





start_game_and_menu