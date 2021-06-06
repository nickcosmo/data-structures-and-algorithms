function anagram(str1, str2) {
  //check lengths of strings to see if they match
  if (str1.length === str2.length) {
    //build objects for each string and store occurences of each letter in each respective property

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < str1.length; i++) {
      if (obj1[str1[i]]) {
        obj1[str1[i]]++;
      } else {
        obj1[str1[i]] = 1;
      }
      if (obj2[str2[i]]) {
        obj2[str2[i]]++;
      } else {
        obj2[str2[i]] = 1;
      }
    }

    //check similarity of the objects
    for (const key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    //if they match return true
    return true;
  }
  //if they dont match return false
  return false;
}

console.log(anagram("sssstac", "catssss"));
