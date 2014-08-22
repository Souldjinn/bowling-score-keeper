class Bowling_Score
	attr_reader :player_name
	def initialize(player_name)
		@player_name = player_name
		@player_score = []
	end

end

def start_game_and_menu
	user_choice = 0

	until user_choice.to_i == 2
		puts "Welcome, this application will keep track of your bowling scores"
		puts "Here you may start a game or quit \n\n"
		puts "1. Start a match"
		puts "2. quit the game \n"

		user_choice = gets.chomp
		game_setup if user_choice.to_i == 1
	end

end

def game_setup
	puts "World Championship bowling has commenced:"
	puts "Please enter the number of players \n"
	number_of_players = gets.chomp.to_i
	all_scores = []

		number_of_players.times do |player| 
			puts "Enter a name for player " + "#{player+1}"
			new_player = gets.chomp
			all_scores << Bowling_Score.new(new_player)
		end

	print "\n"
	puts "Great! The players on the list are:"
	all_scores.each_with_index{|player, index| puts "#{index+1}. #{player.player_name}"}
	print "\n"

end






start_game_and_menu