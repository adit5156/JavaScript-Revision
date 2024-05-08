// const arr = [2,8,3,3];
// console.log(arr);
// arr[1] = 70;
// console.log(arr);

// let arr = [4, "Aditya", 7.9, true];
// console.log(arr);

// let twoDArray = [[1,2,3], [7,8,9]];
// console.log(twoDArray);
// console.log(twoDArray.length);

// let nestedArray = [4, "Aditya", 7.9, true, [2,4,6,8]];
// console.log(nestedArray);
// console.log(nestedArray.length);


// let arr = [4, "Aditya", 7.89, true, [2,6,9,14]];
// console.log(typeof(arr));

// For Loop
// for(let i = 0; i<arr.length;i++) {
//     console.log(i, arr[i]);
// }

// let brr = [3,7,3,8,0,2];
// console.log(brr);
// for(let i = 0; i<brr.length; i++) {
//     brr[i] *= 2;
// }
// console.log(brr);

// For-of Loop
// let brr = [3,7,3,8,0,2];
// for(let iterator of brr) {
//     console.log(iterator);
// }

// For-Each Loop

let brr = [3,7,3,8,0,2];
console.log(brr);
// brr.forEach((value, index, array)=> {
//     console.log(value, index, array);
// });

// Map Method

let doubleArray = brr.map((value)=> {
    value *= 2;
    return value;
});
console.log(doubleArray);