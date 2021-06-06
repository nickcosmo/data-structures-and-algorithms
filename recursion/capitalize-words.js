// Write a recursive function that accepts an array of words and returns a new array of the words capitalized

function capitalizeWords(arr) {
    // base case is an array with length of 1
    if (arr.length === 1) {
        return [arr[0].toUpperCase()];
    }
    let returnArr = capitalizeWords(arr.slice(0, -1));
    returnArr.push(arr.slice(arr.length - 1)[0].toUpperCase());
    return returnArr;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']