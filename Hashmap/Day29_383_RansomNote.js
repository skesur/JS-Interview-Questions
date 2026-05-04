// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 
// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const charMap = new Map();

    for (const char of magazine) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    for (const char of ransomNote) {
        if (!charMap.get(char)) {
            return false;
        }
        charMap.set(char, charMap.get(char) - 1);
    }

    return true;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));   
console.log(canConstruct("aa", "aab")); 