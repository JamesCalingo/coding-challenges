import "slices"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    merged := append(nums1, nums2...)
    slices.Sort(merged)
    middle := len(merged) / 2
    isOddLength := len(merged) % 2
    if isOddLength == 1 {return float64(merged[middle])}
    return (float64(merged[middle]) + float64(merged[middle - 1])) / 2
}

// Go is probably the strictest of the languages I've used to solve this problem when it comes to numbers - hence all the conversions I did AND checking the actual value of isOddLength (as it's an int and NOT a bool).

// Also, I'm a bit surprised LeetCode let me use the "slices" package without directly importing it, so I added the import to be "proper" (though I probably should have also added a package name).
