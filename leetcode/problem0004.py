class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        merged = nums1 + nums2
        merged.sort()
        middle = len(merged) // 2
        isOddLength = len(merged) % 2
        if isOddLength:
            return merged[middle]
        return (merged[middle] + merged[middle - 1]) / 2

# This one's quite similar to its JS buddy with a bit of a trade-off: Python's sorting doesn't convert to strings (so you don't have to run that comparator function), but its type strictness with numbers means that you have to convert the "middle" index to an int because getting an index requires an int (diision produces a float unless you do something like what's here - it's an operation that returns the "floor" of the division as an int). I won't go into the theory of rounding right now however...

# This code originally had middle = int(len(merged) / 2), but then I did the above and got a runtime of 0 ms!
