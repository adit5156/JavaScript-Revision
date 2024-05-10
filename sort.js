// let arr = [1,9,2,7,4,5,6,2,8];
// console.log(arr);
// console.log(arr.sort());


let arr2 = [1,-9,-2,7];
console.log("Original Array: ",arr2);

// let decreasingArray = arr2.sort((a,b)=> {
//     return b-a;
// });
// console.log("Array in Decreasing Order: ",decreasingArray);


// let increasingArray = arr2.sort((a,b)=> {
//     return a-b;
// });
// console.log("Array in Increasing Order: ", increasingArray);

let absoluteArray = arr2.sort((a,b)=> {
    return Math.abs(a)-Math.abs(b);
});
console.log("Absolute Array Sort: ", absoluteArray);