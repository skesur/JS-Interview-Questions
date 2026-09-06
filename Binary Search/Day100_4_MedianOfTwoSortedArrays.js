// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n))

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    const half = Math.floor((m + n + 1) / 2);

    let left = 0;
    let right = m;

    while (left <= right) {
        const i = Math.floor((left + right) / 2);
        const j = half - i;

        const nums1Left  = i === 0 ? -Infinity : nums1[i - 1];
        const nums1Right = i === m ?  Infinity : nums1[i];
        const nums2Left  = j === 0 ? -Infinity : nums2[j - 1];
        const nums2Right = j === n ?  Infinity : nums2[j];

        if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
            const maxLeft = Math.max(nums1Left, nums2Left);

            if ((m + n) % 2 === 1) return maxLeft;

            const minRight = Math.min(nums1Right, nums2Right);
            return (maxLeft + minRight) / 2;
        } else if (nums1Left > nums2Right) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }
};