// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example 1:
// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 4

// Example 2:
// Input: matrix = [["0","1"],["1","0"]]
// Output: 1

// Example 3:
// Input: matrix = [["0"]]
// Output: 0

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 300
// matrix[i][j] is '0' or '1'.

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let maxSide = 0;

    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let r = 1; r <= m; r++) {
        for (let c = 1; c <= n; c++) {
            if (matrix[r - 1][c - 1] === '1') {
                dp[r][c] = Math.min(dp[r-1][c], dp[r][c-1], dp[r-1][c-1]) + 1;
                maxSide = Math.max(maxSide, dp[r][c]);
            }
        }
    }

    return maxSide * maxSide;
};