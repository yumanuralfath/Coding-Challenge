def min(list)
  # list.min
  min = list[0]
  list.each do |el|
    if el < min
      min = el
    end
  end
  min
end


def max(list)
  # list.max
  max = list[0]
  list.each do |el|
    if el > max
      max = el
    end
  end
  max
end

puts "min : #{min([4,6,2,1,9,63,-134,566])}"
puts "max : #{max([4,6,2,1,9,63,-134,566])}"
