// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

// Example 1:
// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]
// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0

// Constraints:
// -105 <= num <= 105
// There will be at least one element in the data structure before calling findMedian.
// At most 5 * 104 calls will be made to addNum and findMedian.

// Follow up:
// If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
// If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?


var MedianFinder = function() {
    this.left = new MedianMaxHeap();
    this.right = new MedianMinHeap();
};

MedianFinder.prototype.addNum = function(num) {
    this.left.push(num);

    if (this.right.size() > 0 && this.left.peek() > this.right.peek()) {
        this.right.push(this.left.pop());
    }

    if (this.left.size() > this.right.size() + 1) {
        this.right.push(this.left.pop());
    } else if (this.right.size() > this.left.size()) {
        this.left.push(this.right.pop());
    }
};

MedianFinder.prototype.findMedian = function() {
    if (this.left.size() > this.right.size()) {
        return this.left.peek();
    }
    return (this.left.peek() + this.right.peek()) / 2;
};

class MedianMaxHeap {
    constructor() { this.heap = []; }
    size() { return this.heap.length; }
    peek() { return this.heap[0]; }
    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }
    pop() {
        const max = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) { this.heap[0] = last; this.sinkDown(0); }
        return max;
    }
    bubbleUp(i) {
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (this.heap[p] < this.heap[i]) {
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]; i = p;
            } else break;
        }
    }
    sinkDown(i) {
        const n = this.heap.length;
        while (true) {
            let largest = i;
            const l = 2*i+1, r = 2*i+2;
            if (l < n && this.heap[l] > this.heap[largest]) largest = l;
            if (r < n && this.heap[r] > this.heap[largest]) largest = r;
            if (largest === i) break;
            [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]]; i = largest;
        }
    }
}

class MedianMinHeap {
    constructor() { this.heap = []; }
    size() { return this.heap.length; }
    peek() { return this.heap[0]; }
    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }
    pop() {
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) { this.heap[0] = last; this.sinkDown(0); }
        return min;
    }
    bubbleUp(i) {
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (this.heap[p] > this.heap[i]) {
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]; i = p;
            } else break;
        }
    }
    sinkDown(i) {
        const n = this.heap.length;
        while (true) {
            let smallest = i;
            const l = 2*i+1, r = 2*i+2;
            if (l < n && this.heap[l] < this.heap[smallest]) smallest = l;
            if (r < n && this.heap[r] < this.heap[smallest]) smallest = r;
            if (smallest === i) break;
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]]; i = smallest;
        }
    }
}