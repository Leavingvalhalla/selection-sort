# require 'pry'

def selection_sort(arr)
  ans = []
  arr.length.times do
    lowest = arr[0]
  arr.each do |num|
    if num < lowest
      lowest = num
      end
    end
    ans << lowest
    arr.delete(lowest)
  end
  ans
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])

  puts

  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []

  100.times { long_input << rand }
end

Please add your pseudocode to this file
And a written explanation of your solution
