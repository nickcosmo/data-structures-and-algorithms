class HashTable {
    constructor(size = 50) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let SOME_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * SOME_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        //hash key
        let index = this._hash(key);
        //store the key value pair in the hash table via separate chaining
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        //hash the key
        let index = this._hash(key);
        //retrieve the key-value pair in the hash table
        if (this.keyMap[index]) {
            const item = this.keyMap[index].filter((item) => item[0] === key);
            if (item.length > 0) {
                return item[0][1];
            }
            return undefined;
        }
        //if the key isnt found, return undefined
        return undefined;
    }

    keys() {
        // loop through hash table
        let arr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (arr.find((item) => item === this.keyMap[i][j][0])) {
                        break;
                    }
                    arr.push(this.keyMap[i][j][0]);
                }
            }
        }
        // return array of unique keys in the table
        return arr;
    }

    values() {
        // loop through hash table
        let arr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (arr.find((item) => item === this.keyMap[i][j][1])) {
                        break;
                    }
                    arr.push(this.keyMap[i][j][1]);
                }
            }
        }
        // return array of unique values in the table
        return arr;
    }
}

let ht = new HashTable(4);
ht.set('h', 34);
ht.set('i', 60);
ht.set('j', 500);
ht.set('k', 7);
ht.set('z', 7);
ht.set('l', 2);
ht.set('l', 32);

// for (let i = 0; i < ht.keyMap.length; i++) {
//     console.log(ht.keyMap[i]);
// }

// console.log('h =>', ht.get('h'));

console.log(ht.values());
