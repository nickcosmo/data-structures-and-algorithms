// Dijkstras Algorithm Pseudo Code
// create an object containing all items from adjacency list with a value of infinity except for starting value which gets a value of 0 - for storing the shortest distances
// create an object to store the previous node for each node, initialize to null
// create a priority queue for each item in the object from the previous step, set the first vertex to be 0 so that we start there
// start looping as long as the priority queue has items
// dequeue a vertex from the priority queue
// if the vertex is the same as the ending vertex, were done
// else loop throuch each value in the adjacency list at that vertex
// calculate the distance to that vertex from the starting vertex
// if the distance is less than what is currently stored in our distances object
// update the distances object with new lower distance
// update the previous object to contain that vertex
// enqueue the vertex with the total distance from the start node

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(val) {
        this.queue.push(val);
        this.sort();
    }

    dequeue() {
        return this.queue.shift();
    }

    sort() {
        this.queue.sort((a, b) => a.priority - b.priority);
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight });
    }

    dijkstras(v1, v2) {
        const distances = {};
        const previous = {};
        const pq = new PriorityQueue();

        for (let vertex in this.adjacencyList) {
            if (vertex === v1) {
                distances[vertex] = 0;
                pq.enqueue({ node: vertex, priority: 0 });
            } else {
                distances[vertex] = Infinity;
                pq.enqueue({ node: vertex, priority: Infinity });
            }
            previous[vertex] = null;
        }

        while (pq.queue.length) {
            const smallest = pq.dequeue();
            const connections = this.adjacencyList[smallest.node];
            if (smallest.node === v2) break;
            for (let i = 0; i < connections.length; i++) {
                let neighbor = connections[i];
                let distance = distances[smallest.node] + neighbor.weight;

                if (distance < distances[neighbor.node]) {
                    distances[neighbor.node] = distance;
                    previous[neighbor.node] = smallest.node;
                    pq.enqueue({ node: neighbor.node, priority: distance });
                }
            }
        }

        const finalPath = [v2];
        let prev = previous[v2];
        while (prev) {
            finalPath.push(prev);
            prev = previous[prev];
        }
        return finalPath.reverse();
    }
}

const wg = new WeightedGraph();

wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');
wg.addVertex('D');
wg.addVertex('E');
wg.addVertex('F');

wg.addEdge('A', 'C', 2);
wg.addEdge('A', 'B', 4);
wg.addEdge('B', 'E', 3);
wg.addEdge('C', 'D', 2);
wg.addEdge('C', 'F', 4);
wg.addEdge('D', 'F', 1);
wg.addEdge('D', 'E', 3);
wg.addEdge('F', 'E', 1);

console.log('shortest path: ', wg.dijkstras('A', 'E'));
