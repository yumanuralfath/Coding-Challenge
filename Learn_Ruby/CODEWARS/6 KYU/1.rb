# [1, 2, 3, 4]  should return [[1, 3], [2, 4]]

# [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

# [1, 23, 3, 4, 7] should return [[1, 3]]


def two_difference(list)
  # code here
  listSort = list.sort
  arrayNew = Array.new
  listSort.each do |el|
    if listSort.include?(el + 2)
      arrayNew << [el, el + 2]
    end
  end
  arrayNew
end

puts "Result1: #{two_difference([4, 1, 2, 3])}"
puts "Result2: #{two_difference([1, 23, 3, 4, 7])}"
