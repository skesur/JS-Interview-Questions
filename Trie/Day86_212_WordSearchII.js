// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// Example 1:
// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

// Example 2:
// Input: board = [["a","b"],["c","d"]], words = ["abcb"]
// Output: []

// Constraints:
// m == board.length
// n == board[i].length
// 1 <= m, n <= 12
// board[i][j] is a lowercase English letter.
// 1 <= words.length <= 3 * 104
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// All the strings of words are unique.

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const root = { children: {}, word: null };

    for (const word of words) {
        let node = root;
        for (const ch of word) {
            if (!node.children[ch]) {
                node.children[ch] = { children: {}, word: null };
            }
            node = node.children[ch];
        }
        node.word = word;
    }

    const rows = board.length;
    const cols = board[0].length;
    const result = [];

    function dfs(r, c, node) {
        if (r < 0 || r >= rows || c < 0 || c >= cols) return;

        const ch = board[r][c];
        if (ch === '#' || !node.children[ch]) return;

        const nextNode = node.children[ch];

        if (nextNode.word) {
            result.push(nextNode.word);
            nextNode.word = null;
        }

        board[r][c] = '#';

        dfs(r + 1, c, nextNode);
        dfs(r - 1, c, nextNode);
        dfs(r, c + 1, nextNode);
        dfs(r, c - 1, nextNode);

        board[r][c] = ch;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, root);
        }
    }

    return result;
};