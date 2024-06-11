def fake_bin(s)
  # Insert you code here...
  s.chars
  .map {|char| char.to_i >= 5 ? '1' : 0}
  .join
end

puts fake_bin('509321967506747')
