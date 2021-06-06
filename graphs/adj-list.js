class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // bidirectional edge creation
    addEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            if (!this.adjacencyList[v1].includes(v2)) {
                this.adjacencyList[v1].push(v2);
            }
            if (!this.adjacencyList[v2].includes(v1)) {
                this.adjacencyList[v2].push(v1);
            }
        }
    }

    removeEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            if (this.adjacencyList[v1].includes(v2)) {
                this.adjacencyList[v1] = this.adjacencyList[v1].filter((vertex) => vertex != v2);
            }
            if (this.adjacencyList[v2].includes(v1)) {
                this.adjacencyList[v2] = this.adjacencyList[v2].filter((vertex) => vertex != v1);
            }
        }
    }

    removeVertex(v) {
        if (this.adjacencyList[v]) {
            const vertices = this.adjacencyList[v];
            const length = vertices.length;
            for (let i = 0; i < length; i++) {
                const v2 = vertices[i];
                this.removeEdge(v, v2);
            }
            delete this.adjacencyList[v];
        }
    }

    dfsRecursive(vertex) {
        const list = [];
        const visitedVertices = {};

        const dfs = (vertex) => {
            if (!vertex) return;
            list.push(vertex);
            visitedVertices[vertex] = true;

            const vertices = this.adjacencyList[vertex];
            const length = vertices.length;

            for (let i = 0; i < length; i++) {
                if (!visitedVertices[vertices[i]]) {
                    dfs(vertices[i]);
                }
            }

            return;
        };

        dfs(vertex);
        return list;
    }

    dfsIterative(vertex) {
        const stack = [vertex];
        const list = [];
        const visitedVertices = {};

        visitedVertices[vertex] = true;

        while (stack > 0) {
            let v = stack.pop();
            list.push(v);

            const vertices = this.adjacencyList[v];
            const length = vertices.length;

            for (let i = 0; i < length; i++) {
                const neighbor = vertices[i];
                if (!visitedVertices[neighbor]) {
                    visitedVertices[neighbor] = true;
                    stack.push(vertices[i]);
                }
            }
        }

        return list;
    }

    bfs(vertex) {
        if (!this.adjacencyList[vertex]) return [];
        const queue = [vertex];
        const list = [];
        const visited = {};

        while (queue.length) {
            const v = queue.shift();
            if (!visited[v]) {
                list.push(v);
                this.adjacencyList[v].forEach((item) => {
                    queue.push(item);
                });
                visited[v] = true;
            }
        }
        return list;
    }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph);
// console.log(graph.dfsRecursive('A'));
// console.log(graph.dfsIterative('A'));
console.log(graph.bfs('A'));
