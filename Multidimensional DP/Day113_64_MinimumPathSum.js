// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example 1:
// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

// Example 2:
// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 200
// 0 <= grid[i][j] <= 200

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    for (let c = 1; c < n; c++) {
        grid[0][c] += grid[0][c - 1];
    }

    for (let r = 1; r < m; r++) {
        grid[r][0] += grid[r - 1][0];
    }

    for (let r = 1; r < m; r++) {
        for (let c = 1; c < n; c++) {
            grid[r][c] += Math.min(grid[r - 1][c], grid[r][c - 1]);
        }
    }

    return grid[m - 1][n - 1];
};