class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQ {
    constructor(values) {
        this.values = values ? values : [];
    }

    enqueue(value, priority) {
        const newNode = new Node(value, priority);

        this.values.push(newNode);
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        if (this.values.length > 1) {
            while (newNode.priority < this.values[parentIndex].priority) {
                this.swapValues(index, parentIndex);
                index = parentIndex;
                parentIndex = Math.floor((index - 1) / 2);
                if (parentIndex < 0) break;
            }
        }
        return this;
    }

    dequeue() {
        if (this.values.length <= 1) {
            return this.values.pop();
        }
        const min = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;

        let index = 0;
        let minIndex;

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
                minIndex = 2 * index + 1;
            } else {
                minIndex = left.priority < right.priority ? 2 * index + 1 : 2 * index + 2;
            }

            // swap with smallest root
            if (root.priority > this.values[minIndex].priority) {
                this.swapValues(index, minIndex);
                index = minIndex;
            } else {
                break;
            }
        }
        return min;
    }

    swapValues(index1, index2) {
        [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
    }
}

let pq = new PriorityQ();

pq.enqueue('new', 34);
pq.enqueue('new', 23);
pq.enqueue('new', 45);
pq.enqueue('new', 32);
pq.dequeue();
pq.dequeue();
pq.dequeue();
pq.dequeue();

console.log(pq);
