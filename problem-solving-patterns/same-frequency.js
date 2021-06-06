// prompt:
// Write a function called sameFrequency.  Given two positive integers, find out if the
// two numbers have the same fequency of digits.
// Solution must be O(N)

function sameFrequency(int1, int2) {
  const obj1 = {};
  const obj2 = {};

  let string1 = int1.toString();
  let string2 = int2.toString();

  let length1 = int1.toString().length;
  let length2 = int2.toString().length;

  if (length1 !== length2) return false;

  for (let i = 0; i < length1; i++) {
    if (obj1[string1[i]] > 0) {
      obj1[string1[i]]++;
    } else {
      obj1[string1[i]] = 1;
    }
    if (obj2[string2[i]] > 0) {
      obj2[string2[i]]++;
    } else {
      obj2[string2[i]] = 1;
    }
  }
  
  for(let key in obj1) {
      if(obj2[key] !== obj1[key]) {
          return false
      }
  }

  return true;
}

console.log(sameFrequency(1233, 3412));
