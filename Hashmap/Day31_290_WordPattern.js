// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.
 
// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"

// Output: true

// Explanation:

// The bijection can be established as:

// 'a' maps to "dog".
// 'b' maps to "cat".
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"

// Output: false

// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"

// Output: false

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const charMap = new Map();
    const wordMap = new Map();
    const patternArr = pattern.split("");
    const sArr = s.split(" ");

    if (patternArr.length !== sArr.length) return false;

    for (let i = 0; i < patternArr.length; i++) {
        const ch = patternArr[i];
        const word = sArr[i];

        if (charMap.has(ch) && charMap.get(ch) !== word) {
            return false;
        }
        if (wordMap.has(word) && wordMap.get(word) !== ch) {
            return false;
        }

        charMap.set(ch, word);
        wordMap.set(word, ch);
    }
    return true;
};

console.log(wordPattern("abba","dog cat cat dog"))