class Solution:
    def isPalindrome(self, x: int) -> bool:
        string_x = str(x)
        reversed = string_x[::-1]
        return reversed == string_x
      
# This looks a bit neater than the JS solution I feel - it's just that you need to know how to make a reversed string in Python, which is a little unorthodox.

# https://leetcode.com/problems/palindrome-number/

