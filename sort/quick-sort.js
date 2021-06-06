function pivot(arr, start = 0, end = arr.length) {
  let pivot = arr[start];
  let swapIndex = start;

  function swap(arr, i, j) {
    return ([arr[i], arr[j]] = [arr[j], arr[i]]);
  }

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([9, 4, 2, 8, 10, 11, 3, 5, 11, 6, 3]));
