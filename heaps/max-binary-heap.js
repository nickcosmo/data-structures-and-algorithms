class MaxBinaryHeap {
    constructor(values) {
        this.values = values ? values : [];
    }

    insert(value) {
        this.values.push(value);

        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        while (value > this.values[parentIndex]) {
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
        return this;
    }

    extractMax() {
        if (this.values.length === 1) {
            return this.values.pop();
        }
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;

        let index = 0;
        let maxIndex;

        // do until root is bigger than childer or no children
        while (true) {
            let root = this.values[index];
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let left = null;
            let right = null;

            if (leftIndex < this.values.length) {
                left = this.values[2 * index + 1];
            }

            if (rightIndex < this.values.length) {
                right = this.values[2 * index + 2];
            }

            // compare root to children
            if (!left && !right) {
                break;
            } else if (!right) {
                maxIndex = 2 * index + 1;
            } else {
                maxIndex = left > right ? 2 * index + 1 : 2 * index + 2;
            }

            if (root < this.values[maxIndex]) {
                // swap with largest root
                this.swapValues(index, maxIndex);
                index = maxIndex;
            } else {
                break;
            }
        }
        return max;
    }

    swapValues(index1, index2) {
        [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
    }
}

let mbh = new MaxBinaryHeap([46, 3, 2, 1]);

mbh.insert(2);
console.log(mbh);
mbh.insert(4);
console.log(mbh);
mbh.insert(1);
console.log(mbh);
mbh.insert(6);
console.log(mbh);
mbh.extractMax();
console.log(mbh);
mbh.extractMax();
console.log(mbh);

let mbh2 = new MaxBinaryHeap([55, 39, 41, 18, 27, 12, 33]);
mbh2.extractMax();
console.log(mbh2);
mbh2.extractMax();
console.log(mbh2);
mbh2.extractMax();
console.log(mbh2);
mbh2.extractMax();
console.log(mbh2);
mbh2.extractMax();
console.log(mbh2);
mbh2.extractMax();
console.log(mbh2);
mbh2.extractMax();
console.log(mbh2);

