function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    let index = i;
    for (let j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
      index = j;
    }
    // console.log(i, j);
    arr[index] = currVal;
  }
  return arr;
}

console.log(insertionSort([5, 3, 4, 8, 1, 78, 2, 1]));
