// Impliment a function called, areThereDuplicates which accepts a variable number of
// arguments, and checks whether there are any duplicates among the arguments passed in.
// You can solve this using frequency counter or multiple pointers

function areThereDuplicates() {
  const args = arguments;

  const argArray = [];

  for (const key in args) {
    console.log(argArray);
    if (argArray.indexOf(args[key]) > -1) {
      return true;
    } else {
      argArray.push(args[key]);
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, "s"));
