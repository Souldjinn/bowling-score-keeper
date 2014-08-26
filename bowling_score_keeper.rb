require_relative 'bowling_score_model.rb'
require_relative 'bowling_score_text.rb'


def setup_game_menu
	user_choice = 0

	until user_choice.to_i == 2
		user_choice = ask_to_start_or_quit
		game_setup if user_choice.to_i == 1
	end

end

def game_setup
	number_of_players = ask_for_number_of_players
	all_scores = []

		number_of_players.times do |player| 
			puts "Enter a name for player " + "#{player+1}"
			new_player = gets.chomp
			all_scores << Bowling_Score.new(new_player)
		end

	list_all_players all_scores

	game_logic(all_scores)
end

def game_logic(score_list)
	9.times do 
		all_players_turns(score_list)
	end

	complete_final_turn(score_list)
	compute_scores(score_list)
	reveal_score_results(score_list)
end

def complete_final_turn(score_list)
	final_turn_disclaimer	

	score_list.each do |player|
		3.times do |x|
			puts "How much did #{player.name} score for final frame throw #{x+1} \n"
			player.score<< gets.chomp
		end
	end
end

def compute_scores(score_list)
	score_list.each{|player| player.count_score}
	score_list.each{|player| player.generate_final_score}
end

def all_players_turns(score_list)
	score_list.each do |player|
		player.score << ask_for_pins_hit(player)
	end
end

setup_game_menu