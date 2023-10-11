
class TwoStack {
    constructor() {}

    twoStacksHelper(x, a, b, sum, count) {
        if (sum > x || (a.length === 0 && b.length === 0)) {
            return count - 1;
        }

        let ans1 = 0;
        if (a.length > 0) {
            ans1 = this.twoStacksHelper(x, a.slice(1), b, sum + a[0], count + 1);
        }

        let ans2 = 0;
        if (b.length > 0) {
            ans2 = this.twoStacksHelper(x, a, b.slice(1), sum + b[0], count + 1);
        }

        return Math.max(ans1, ans2);
    }

    twoStacks(x, a, b) {
        return this.twoStacksHelper(x, a, b, 0, 0);
    }
}

const twoStack = new TwoStack();
const a = [4, 2, 4, 6, 1];
const b = [2, 1, 8, 5];
const x = 10;

const maxCount = twoStack.twoStacks(x, a, b);
console.log("Maximum count of elements from both stacks:", maxCount);

