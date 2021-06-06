// Write a recursive function which takes an object and finds all of the values which are numbers and converts them to strings

function stringifyNumbers(obj) {
    let sum = 0;
    if (typeof obj === 'object') {
        for (let item in obj) {
            obj[item] = stringifyNumbers(obj[item]);
        }
    } else if (typeof obj === 'number') {
        return obj.toString();
    } else {
        return obj;
    }
    return obj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
        },
    },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
