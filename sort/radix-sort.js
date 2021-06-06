function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigits(arr) {
  let maxCount = 1;
  for (let i = 0; i < arr.length; i++) {
    const newCount = digitCount(arr[i]);
    maxCount = Math.max(maxCount, newCount);
  }
  return maxCount;
}

function radixSort(arr) {
  const maxDigit = maxDigits(arr);
  let returnArray = arr;
  for (let k = 0; k < maxDigit; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < returnArray.length; i++) {
      const digit = getDigit(returnArray[i], k);
      buckets[digit].push(returnArray[i]);
    }
    returnArray = [].concat(...buckets);
  }
  return returnArray;
}

console.log(radixSort([500, 1000, 5, 800, 30, 40000, 2]));
