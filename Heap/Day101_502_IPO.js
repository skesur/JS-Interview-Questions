// Suppose LeetCode will start its IPO soon. In order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the IPO. Since it has limited resources, it can only finish at most k distinct projects before the IPO. Help LeetCode design the best way to maximize its total capital after finishing at most k distinct projects.

// You are given n projects where the ith project has a pure profit profits[i] and a minimum capital of capital[i] is needed to start it.

// Initially, you have w capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.

// Pick a list of at most k distinct projects from given projects to maximize your final capital, and return the final maximized capital.

// The answer is guaranteed to fit in a 32-bit signed integer.

// Example 1:
// Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
// Output: 4
// Explanation: Since your initial capital is 0, you can only start the project indexed 0.
// After finishing it you will obtain profit 1 and your capital becomes 1.
// With capital 1, you can either start the project indexed 1 or the project indexed 2.
// Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
// Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.

// Example 2:
// Input: k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
// Output: 6

// Constraints:
// 1 <= k <= 105
// 0 <= w <= 109
// n == profits.length
// n == capital.length
// 1 <= n <= 105
// 0 <= profits[i] <= 104
// 0 <= capital[i] <= 109

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */

class IPOHeap {
    constructor() { this.heap = []; }

    size() { return this.heap.length; }

    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        const max = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.sinkDown(0);
        }
        return max;
    }

    bubbleUp(i) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] < this.heap[i]) {
                [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
                i = parent;
            } else break;
        }
    }

    sinkDown(i) {
        const n = this.heap.length;
        while (true) {
            let largest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            if (left < n && this.heap[left] > this.heap[largest]) largest = left;
            if (right < n && this.heap[right] > this.heap[largest]) largest = right;
            if (largest === i) break;
            [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]];
            i = largest;
        }
    }
}

var findMaximizedCapital = function(k, w, profits, capital) {
    const n = profits.length;

    const projects = profits.map((p, i) => [capital[i], p]);
    projects.sort((a, b) => a[0] - b[0]);
    const maxHeap = new IPOHeap();
    let i = 0;

    for (let j = 0; j < k; j++) {
        while (i < n && projects[i][0] <= w) {
            maxHeap.push(projects[i][1]);
            i++;
        }

        if (maxHeap.size() === 0) break;

        w += maxHeap.pop();
    }

    return w;
};