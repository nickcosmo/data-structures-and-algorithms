// CHALLENGE
// Write a function which accepts a string and returns the length of the
// longest substring with all distinct characters

function findLongestSubstring(string) {
    let currLen = 0;
    let end = 0;
    let subArray = [string[0]];
    while (end < string.length) {
        let found = false;
        for (let i = 0; i < subArray.length; i++) {
            for (let j = i + 1; j < subArray.length; j++) {
                if (subArray[i] === subArray[j]) {
                    found = true;
                    break;
                }
            }
        }

        end++;
        if (found) {
            subArray.push(string[end]);
            subArray.shift();
        } else {
            currLen = Math.max(currLen, subArray.length);
            subArray.push(string[end]);
        }
    }
    return currLen;
}

console.log(findLongestSubstring('longestsubstring'));

// instructor solution:
// function findLongestSubstring(str) {
//     let longest = 0;
//     let seen = {};
//     let start = 0;
   
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (seen[char]) {
//         start = Math.max(start, seen[char]);
//       }
//       // index - beginning of substring + 1 (to include current in count)
//       longest = Math.max(longest, i - start + 1);
//       // store the index of the next char so as to not double count
//       seen[char] = i + 1;
//     }
//     return longest;
//   }
