// Coding Challenge
// 2/366 day

// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// function getCount(str) {
//     const vowel = ["a", "i", "u", "e", "o"];
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowel.includes(str[i])) {
//             count += 1;
//         }
//     }
//     return count;
// }

function getCount(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

console.log(getCount("abracadabra"));
