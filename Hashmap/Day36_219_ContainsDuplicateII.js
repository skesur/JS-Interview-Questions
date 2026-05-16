// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const lastSeen = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (lastSeen.has(nums[i]) && i - lastSeen.get(nums[i]) <= k) {
            return true; 
        }
        lastSeen.set(nums[i], i); 
    }

    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1],3));
console.log(containsNearbyDuplicate([1,0,1,1],1));
console.log(containsNearbyDuplicate([1,2,3,1,2,3],2));