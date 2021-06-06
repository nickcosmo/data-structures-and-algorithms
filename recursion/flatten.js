// Write a recursive function called flatten which accepts an array of arrays and returns a
// new array with all values flatened

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// my steps
// check to see if theres an array nested
// if found then destructure the array
// if no arrays found return the array

function flatten(arr) {
  let arrCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      const foundArr = arr[i];
      arr.splice(i, 1);
      if (foundArr.length <= 1) {
        arr.splice(i, 0, foundArr[0]);
      } else {
        for (let j = foundArr.length - 1; j >= 0; j--) {
          arr.splice(i, 0, foundArr[j]);
        }
      }
      arrCount++;
    }
  }

  if (arrCount === 0) return arr;
  return flatten(arr);
}

console.log(flatten([1, [2, [3, 4], [[5]]]]));


// Instructor Solution
// function flatten(oldArr){
//     var newArr = []
//         for(var i = 0; i < oldArr.length; i++){
//           if(Array.isArray(oldArr[i])){
//                 newArr = newArr.concat(flatten(oldArr[i]))
//           } else {
//                 newArr.push(oldArr[i])
//           }
//     } 
//     return newArr;
//   }