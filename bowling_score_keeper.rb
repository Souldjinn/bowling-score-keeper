class Bowling_Score
	attr_reader :name, :score
	attr_writer :score

	def initialize(player_name)
		@name = player_name
		@score = 0
	end

end

def setup_game_menu
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
	all_scores.each_with_index{|player, index| puts "#{index+1}. #{player.name}"}
	print "\n"

	game_logic(all_scores)
end

def game_logic(score_list)
	10.times do 
		all_players_turns(score_list)
	end

	reveal_score_results(score_list)
end

def all_players_turns(score_list)
	score_list.each do |player|
		player.score += ask_for_pins_hit(player)
	end
end

def ask_for_pins_hit(player)
	puts "Its #{player.name}'s turn!"
	puts "How many pins did #{player.name} hit? (Dont lie now)"
	pins_hit = gets.chomp.to_i
	return pins_hit
end

def reveal_score_results(score_list)
	score_list.each_with_index do |player, index|
		puts "#{player.name}'s score is: #{player.score}"
	end
	puts "\n"
end

setup_game_menu