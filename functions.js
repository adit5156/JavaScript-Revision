// function oneToN(n) {
//     for(let i = 1; i<=n; i++) {
//         console.log(i);
//     }
//     console.log();
// }

// oneToN(10);
// oneToN(6);
// oneToN(19);


// function sum(a,b) {
//     let sum = a + b;
//     console.log(sum);
// }

// sum(4,6.8);

// function eqn(a,b) {
//     let result = Math.abs((a**2) + (b**2));
//     console.log(result);
// }

// eqn(2,3);

// function cube(a,b) {
//     let result = (Math.abs(a**3)) + (Math.abs(b**3));
//     console.log(result);
// }
// cube(-3,5);


let cube = function (a,b) {
    let result = (Math.abs(a**3)) + (Math.abs(b**3));
    return result;
}
console.log(cube(3,5))