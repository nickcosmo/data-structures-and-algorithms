function countUniqueValues(arr) {
  
  //check if we have at least 2 values
  if(arr.length < 1) {
    return 0;
  } else if(arr.length === 1) {
    return 1;
  }

  //define new vars for unique count and pointers
  let unique = 1;
  let position1 = 0;
  let position2 = 1;
  //loop through the array and compare each pair of values to determine if we have found a unique value
  while (position2 < arr.length - 1) {
    //if we have found a unique value, add 1 to the var
    if (arr[position2] !== arr[position1]) {
      unique++;
    }
    position1++;
    position2++;
  }
  return unique;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 5, 6, 7, 89, 89, 89]));
