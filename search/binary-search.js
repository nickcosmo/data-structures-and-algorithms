function binarySearch(arr, val) {
  var start = 0;
  var end = arr.length - 1;
  var mid = Math.floor((start + end) / 2);

  while (arr[mid] !== val && start <= end) {
    if (val > arr[mid]) {
      start = mid + 1;
    } else if (val < arr[mid]) {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] == val ? mid: -1;
}

console.log(binarySearch([2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
