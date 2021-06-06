function stringSearch(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      console.log("i", i, "j", j);
      if (str1[i + j] !== str2[j]) break;
      console.log("found match", str1[i + j], str2[j]);
      if (j === str2.length - 1) count++;
    }
  }
  return count;
}

console.log(stringSearch("lorie lold", "lo"));
