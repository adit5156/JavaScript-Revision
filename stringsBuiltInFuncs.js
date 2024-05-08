// let str = "Raghav Garg is a teacher at Physics Wallah";
let str = "a,gh,b,rtf,w,v";
// console.log(str);
// console.log(str.length);
// console.log(str.toUpperCase());  
// console.log(str.toLowerCase());
// let str2 = str.toUpperCase();
// console.log(str2);

// console.log(str.trim());
// console.log(str.indexOf('G'));
// console.log(str.lastIndexOf('a'));
// console.log(str.charAt(5));
// console.log(str[5]);
// console.log(str.slice(1,6));
// console.log(str.split(' '));

// let str2 = str.split(' ');
// console.log(str2);
// for(let iterator of str2) {
//     console.log(iterator);
// }


let str2 = str.split(',');
console.log(str2);

for(let iterator of str2) {
    console.log(iterator);
}