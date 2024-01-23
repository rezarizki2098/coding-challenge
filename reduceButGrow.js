// Coding Challenge
// 1/366 day

// function grow(x) {
//     let res = 1;
//     for (let i = 0; i < x.length; i++) {
//         res *= x[i];
//     }
//     return res;
// }

// function grow(x){
//     return x.reduce((a, b)=> a * b,1);
//   }

const grow = (x) => x.reduce((acc, curr) => acc * curr);

console.log(grow([1, 2, 3, 4, 5]));
