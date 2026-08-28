// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

// Example 1:
// Input: n = 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown.

// Example 2:
// Input: n = 1
// Output: 1

// Constraints:

// 1 <= n <= 9

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let count = 0;

    const cols = new Set();
    const leftDiags = new Set();
    const rightDiags = new Set();

    function backtrack(row) {
        if (row === n) {
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols.has(col)) continue;
            if (leftDiags.has(row - col)) continue;
            if (rightDiags.has(row + col)) continue;

            cols.add(col);
            leftDiags.add(row - col);
            rightDiags.add(row + col);

            backtrack(row + 1);

            cols.delete(col);
            leftDiags.delete(row - col);
            rightDiags.delete(row + col);
        }
    }

    backtrack(0);
    return count;
};