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
}

const wg = new WeightedGraph();

wg.addVertex('a');
wg.addVertex('b');
wg.addVertex('c');

wg.addEdge('a', 'b', 9);

console.log(wg.adjacencyList.a);
