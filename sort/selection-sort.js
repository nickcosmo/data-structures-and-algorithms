function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      const temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
    console.log(arr);
  }
  return arr;
}

console.log(selectionSort([5, 4, 3, 2, 1]));
