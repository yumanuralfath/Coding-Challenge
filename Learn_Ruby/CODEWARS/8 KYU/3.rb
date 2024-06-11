def remove_exclamation_mark(s)
  # write your code here
  s.gsub(/[!]/, '')
end

puts "Hasil: Hell! Nah!!"
puts "Hasil: #{remove_exclamation_mark("Hell! Nah!!")}"
