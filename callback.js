// Callback Function ek aisa function hai jo ek function ke andar pass hota hai


function product(a,b,c) {
    return a*b*c;
}

// function func(x,y) {
//     console.log(x-y)
// }

// func(product(5,6,10), 10);

function func(x,y){
    let a = x(10,9,2);
    console.log(a-y);
}

func(product, 9);

