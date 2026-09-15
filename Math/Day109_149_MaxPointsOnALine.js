// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

// Example 1:
// Input: points = [[1,1],[2,2],[3,3]]
// Output: 3

// Example 2:
// Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4

// Constraints:
// 1 <= points.length <= 300
// points[i].length == 2
// -104 <= xi, yi <= 104
// All the points are unique.

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length <= 2) return points.length;

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    let maxCount = 2;

    for (let i = 0; i < points.length; i++) {
        const slopeMap = new Map();

        for (let j = i + 1; j < points.length; j++) {
            let dy = points[j][1] - points[i][1];
            let dx = points[j][0] - points[i][0];

            if (dx === 0) {
                const key = 'vertical';
                slopeMap.set(key, (slopeMap.get(key) || 0) + 1);
            } else {
                const g = gcd(Math.abs(dy), Math.abs(dx));
                if (dx < 0) { dy = -dy; dx = -dx; }
                dy /= g;
                dx /= g;
                const key = `${dy}/${dx}`;
                slopeMap.set(key, (slopeMap.get(key) || 0) + 1);
            }
        }

        for (const count of slopeMap.values()) {
            maxCount = Math.max(maxCount, count + 1);
        }
    }

    return maxCount;
};