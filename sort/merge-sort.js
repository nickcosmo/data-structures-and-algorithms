  function merge(arr1, arr2) {
    let returnArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] > arr2[j]) {
        returnArr.push(arr2[j]);
        j++;
      } else {
        returnArr.push(arr1[i]);
        i++;
      }
    }
    while (i < arr1.length) {
      returnArr.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      returnArr.push(arr2[j]);
      j++;
    }
    return returnArr;
  }

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let half = Math.floor(arr.length / 2);
  let firstHalf = mergeSort(arr.slice(0, half));
  let secondHalf = mergeSort(arr.slice(half));
  return merge(firstHalf, secondHalf);
}

console.log(mergeSort([445, 3, 8, 15, 2]));
