class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        indicies = []
        length = len(nums)
        for x in range(length):
            for y in range(x + 1, length):
                if nums[x] + nums[y] == target:
                    indicies.append(x)
                    indicies.append(y)
                    return indicies
                  # I return the indicies immediately since we only want one solution.
                  
         
# This is my first Python solution for LeetCode. It's a LOT slower than JS, but takes up less than half the memory on average, so...
