# Make a program that filters a list of strings and returns a list with only your friends name in it.
#
# If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
#
# Input = {"Ryan", "Kieran", "Jason", "Yous"}
# Output = {"Ryan", "Yous"}
#
# Input = {"Peter", "Stephen", "Joe"}
# Output = {}

def friend(friends)
  friends.select { |name| name.length == 4 }
end

puts friend(%w[Ryan Kieran Jason Yous])
