// Map basically agar mujhe ek array se ek aur array banaana hai ussi se related with some specific changes 

let arr1 = [1,3,5,7,9,11];
console.log(arr1);

// let arr2 = arr1.map((value)=> {
//     value *= 2;
//     return value;
// });
// console.log(arr2);

// let arr3 = arr1.map((value)=> {
//     return value**2;
// });
// console.log(arr3);

// let arr4 = arr1.map((value)=> {
//     return Math.abs(value**3);
// });
// console.log(arr4);

let arr5 = arr1.map((value)=> {
    return value += 10;
});
console.log(arr5);