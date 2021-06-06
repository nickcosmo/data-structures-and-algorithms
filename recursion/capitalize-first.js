// Write a recursive function called capitalizeFirst.  Given an array of strings.
// capitalize the first letter of each string in the array

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(arr) {
    let sliceStr;
    if (arr.length === 1) {
        let firstChar = arr[0].charAt(0).toUpperCase();
        sliceStr = arr[0].slice(1, arr[0].length);
        const newStr = firstChar.concat(sliceStr);
        return [newStr];
    }

    let firstChar = arr[0].charAt(0).toUpperCase();
    sliceStr = arr[0].slice(1, arr[0].length);
    const newStr = firstChar.concat(sliceStr);
    arr.splice(0, 1, newStr);

    let returnArr = [arr.shift(arr)];

    return returnArr.concat(capitalizeFirst(arr));
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));
