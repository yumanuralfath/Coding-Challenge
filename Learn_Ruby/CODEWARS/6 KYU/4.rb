# frozen_string_literal: true

def what_century(year)
  year = year.to_i # Convert the string to an integer
  century = year % 100 == 0 ? (year / 100) : (year / 100) + 1

  # Determine the correct suffix
  suffix = case century % 10
           when 1
             century % 100 == 11 ? 'th' : 'st'
           when 2
             century % 100 == 12 ? 'th' : 'nd'
           when 3
             century % 100 == 13 ? 'th' : 'rd'
           else
             'th'
           end

  "#{century}#{suffix}"
end
