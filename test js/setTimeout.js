// Print from 1-10 but with a delay of 1s after each number gets printed

// function hello() {
//     console.log("Hello");
// }

// function mello() {
//     console.log("Mello");
// }

// setTimeout(hello, 2000);
// setTimeout(mello, 1000);

// setTimeout(()=> {
//     console.log("Hello")
// },2000);
// setTimeout(()=> {
//     console.log("Mello");
// },1000);

// for(let i = 1; i<=10;i++) {
//     setTimeout(()=> {
//         console.log(i)
// },i*1000);
// }

// for (let i = 1; i <= 10; i++) {
//   setTimeout(() => {
//     console.log(11 - i);
//   }, i*1000);
// }


// for(let i = 1; i<=30; i++) {
//     setTimeout(()=> {
//         console.log(31-i);
//     },i*1000);
// }

// for(let i = 1; i<=5; i++) {
//     setTimeout(()=> {
//         console.log(i)
//     },i*5000);
// }


for(let i = 1; i <= 100; i++) {
    setTimeout(()=> {
        console.log(Math.random());
    }, i*200);
}
