// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.

// Follow up: Could you find an algorithm that runs in O(m + n) time?

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let left = 0;
    let minLength = Infinity;
    let minStart = 0;
    const charMap = new Map();

    for (const char of t) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    let required = charMap.size;
    let formed = 0;
    const windowCounts = new Map();

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);
        if (charMap.has(char) && windowCounts.get(char) === charMap.get(char)) {
            formed++;
        }
        while (left <= right && formed === required) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minStart = left;
            }
            const leftChar = s[left];
            windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);
            if (charMap.has(leftChar) && windowCounts.get(leftChar) < charMap.get(leftChar)) {
                formed--;
            }
            left++;
        }
    }
    return minLength === Infinity ? "" : s.substring(minStart, minStart + minLength);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));