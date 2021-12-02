class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        strings = []
        for i in range(1, n + 1):
            if i % 3 == 0 and i % 5 == 0:
                strings.append("FizzBuzz")
            elif i % 3 == 0:
                strings.append("Fizz")
            elif i % 5 == 0:
                strings.append("Buzz")
            else:
                strings.append(str(i))
        return strings
      
# Not the nicest solution, but it does work...
