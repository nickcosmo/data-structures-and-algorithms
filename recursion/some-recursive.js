// Write a recursive functin called SomeRecursive which accepts an array and a callback.  The function returns true
// if a single value in the array returns true when passed to the callback.  Otherwise it returns false.


// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, cb) {
  const length = arr.length;
  if (cb(arr[0]) === true) {
    return true;
  }
  if (length === 1) return false;
  arr.splice(0, 1);
  return someRecursive(arr, cb);
}

console.log(someRecursive([4, 6, 8, 12], (val) => val > 10));

// Instructor Solution
// function someRecursive(array, callback) {
//     if (array.length === 0) return false;
//     if (callback(array[0])) return true;
//     return someRecursive(array.slice(1),callback);
// }