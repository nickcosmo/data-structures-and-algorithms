function frequencyCounter(arr1, arr2) {
  // check arrays length
  if (arr1.length === arr2.length) {

  // calc the square of each val from arr1 and store in new array
    const newArr = arr1.map((val) => Math.pow(val, 2));
  // see if it matches arr2
    for (let i = 0; i < newArr.length; i++) {
        const foundIndex = arr2.indexOf(newArr[i]);
        if(foundIndex > -1) {
            arr2.splice(foundIndex, 1);
        } else {
            // if arrays are different then return false
            return false;
        }
    }
    // return true if new array matches arr2
    return true;
  }
}

console.log(frequencyCounter([1, 3, 4], [9, 16, 1]));
