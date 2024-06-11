# # Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

# # Examples
# # Input: [1, 5.2, 4, 0, -1]
# # Output: 9.2

# # Input: []
# # Output: 0

# # Input: [-2.398]
# # Output: -2.398


# # sum Numbers
# def sum(array)
#   if array == []
#     return 0
#   else
#     return array.reduce(:+)
#   end
# end
# OR
def Tambuah(angka)
  angka.sum
end

input = Tambuah([1, 5.2, 4, 0, -1])
input2 = Tambuah([])

puts "Hasil: #{input}"
puts "Hasil2: #{input2}"
