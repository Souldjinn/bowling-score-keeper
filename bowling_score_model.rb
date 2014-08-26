class Bowling_Score
	attr_reader :name, :score, :final_score
	attr_writer :score

	def initialize(player_name)
		@name = player_name
		@score = []
		@final_score = []
	end

	def count_score

		self.score.map!.with_index do |frame, index|
				end_value = 0

			if frame == "ST"
				end_value +=10
				end_value += check_frame(index+1)
				end_value += check_frame(index+2)
			elsif frame == "10"
				end_value +=10
				end_value += check_frame(index+1)
			else
				end_value = frame.to_i
			end

			end_value
		end

	end

	def check_frame(next_step)
		base = 0
	
		if @score[next_step] == "ST" || @score[next_step] == "10"
			base +=10
		else
			base += @score[next_step].to_i
		end
		return base 
	end

	def generate_final_score 
		10.times{@final_score << @score.shift}
		@final_score = @final_score.inject(:+)
	end

end