// Filter out odd elements from the given array

let arr = [1,9,2,7,4,5,6,2,8];
console.log(arr);

// let oddArr = arr.filter((value)=> {
//     if(value%2!==0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// });
// console.log(oddArr);

// Element smaller than 5

// let lessThan5 = arr.filter((value)=> {
//     if(value<5) {
//         return true;
//     }
//     else {
//         return false;
//     }
// });
// console.log(lessThan5);

// let lessThan5 = arr.filter((value)=> {
//     return (value<5);
// });
// console.log(lessThan5);

let lessThan5 = arr.filter((value)=> {
    return (value>7) ? true: false;
});
console.log(lessThan5);