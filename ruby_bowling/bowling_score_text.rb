def ask_to_start_or_quit
	puts "Welcome, this application will keep track of your bowling scores"
	puts "Here you may start a game or quit \n\n"
	puts "1. Start a match"
	puts "2. quit the game \n"

	return gets.chomp
end

def ask_for_number_of_players
	puts "World Championship bowling has commenced:"
	puts "Please enter the number of players \n"
	return gets.chomp.to_i
end

def list_all_players player_array
	print "\n"
	puts "Great! The players on the list are:"
	player_array.each_with_index{|player, index| puts "#{index+1}. #{player.name}"}
	print "\n"
end

def final_turn_disclaimer
	puts "This is the final turn for each player"
	puts "You can score up to 30 points if you score"
	puts "Three strikes in a row"
	puts "you will have 3 chances to input scores." 
end

def ask_for_pins_hit(player)
	puts "Its #{player.name}'s turn!"
	puts "How many pins did #{player.name} hit? (Dont lie now)"
	puts "ST for strike, 10 for spare"
	return gets.chomp
end

def reveal_score_results(score_list)
	score_list.each_with_index do |player, index|
		puts "#{player.name}'s score is: "
		print "#{player.final_score} \n"
	end

	puts "\n"
end