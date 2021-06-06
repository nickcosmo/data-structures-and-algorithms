// Write a recursive function called collectStrings which accepts an object and returns an array of all the values in the object that are strings

function collectStrings(obj) {
    let returnArr = [];
    for (let item in obj) {
        if (typeof obj[item] === 'string') {
            returnArr.push(obj[item]);
        } else if (typeof obj[item] === 'object') {
            returnArr = returnArr.concat(collectStrings(obj[item]));
        }
    }
    return returnArr;
}

const obj = {
    stuff: 'foo',
    data: {
        val: {
            thing: {
                info: 'bar',
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: 'baz',
                    },
                },
            },
        },
    },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
