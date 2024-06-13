# Input = "The sunset sets at twelve o' clock."
# Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

def alphabet_position(text)
  def abjad_position(letter)
    letter.downcase.ord - 'a'.ord + 1
  end

  # Map each character to its alphabet position if it's a letter
  result = text.chars.map do |char|
    if char.match?(/[a-zA-Z]/)
      abjad_position(char)
    else
      nil
    end
  end

  # Filter out nil values and join the numbers with space
  result.compact.join(' ')
end


puts "#{alphabet_position("Yumana")}"
