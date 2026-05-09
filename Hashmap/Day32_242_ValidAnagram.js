// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const charMap = new Map();

    for (const char of s) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    for (const char of t) {
        if (!charMap.get(char)) return false;
        charMap.set(char, charMap.get(char) - 1);
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram")); 
console.log(isAnagram("rat", "car"));         