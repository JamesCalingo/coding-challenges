class Solution:
    def reverse(self, x: int) -> int:
        string_x = str(x)
        reversed = string_x[::-1]
        
        # This step removes the negative sign; otherwise, we can't convert to int
        if reversed.endswith("-"):
            end = len(reversed) - 1
            reversed = reversed[0:end]
        reversed_int = int(reversed)
        
        if x < 0:
            reversed_int *= -1
            
        if reversed_int not in range(-2**31,  2**31-1):
            return 0
            
        return reversed_int
