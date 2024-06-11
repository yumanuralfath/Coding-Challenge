def set_alarm(employed, vacation)
  # Your code here
  employed && !vacation
end

puts set_alarm(true, true)
