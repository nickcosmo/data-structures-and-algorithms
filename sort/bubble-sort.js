function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let swapCount = 0;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapCount++;
      }
    }
    if (swapCount === 0) break;
  }
  return arr;
}

console.log(bubbleSort([2, 5, 1, 41, 8]));
