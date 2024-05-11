let s1 = document.querySelector('#sq1');
let s2 = document.querySelector('#sq2');
let s3 = document.querySelector('#sq3');
let s4 = document.querySelector('#sq4');

let color = 'red';

s1.addEventListener('mouseenter', ()=> {
   let randomNum = Math.floor(Math.random()*100)+1;
    s1.innerHTML = `<h1>${randomNum}</h1>`;
});

s1.addEventListener('mouseleave', ()=> {
    s1.style.backgroundColor = 'white';
});

s1.addEventListener('dblclick', ()=> {
    let val1 = Math.floor(Math.random()*255)+1;
    let val2 = Math.floor(Math.random()*255)+1;
    let val3 = Math.floor(Math.random()*255)+1;
    s1.style.backgroundColor = `rgb(${val1}, ${val2}, ${val3})`;
});

s2.addEventListener('mouseenter', ()=> {
    if(color == 'red') {
        s2.style.backgroundColor = 'red';
        color = 'green';
    }
    else if(color=='green'){
        s2.style.backgroundColor = 'green';
        color = 'blue';
    }
    else{
        s2.style.backgroundColor = 'blue';
        color = 'red';
    }

});

s2.addEventListener('mouseout', ()=> {
    s2.style.backgroundColor = 'white';
});

s3.addEventListener('mouseenter', ()=> {
    function randomColor() {
        let val1 = Math.floor(Math.random()*255)+1;
        let val2 = Math.floor(Math.random()*255)+1;
        let val3 = Math.floor(Math.random()*255)+1;
        return `rgb(${val1}, ${val2}, ${val3})`;
    }
    s3.style.backgroundColor = randomColor();
});

s3.addEventListener('mouseleave', ()=> {
    s3.style.backgroundColor = 'white';
});

s4.addEventListener('click', ()=> {
    function randomColor2() {
        let val1 = Math.floor(Math.random()*255)+1;
        let val2 = Math.floor(Math.random()*255)+1;
        let val3 = Math.floor(Math.random()*255)+1;
        s1.style.backgroundColor = `rgb(${val1}, ${val2}, ${val3})`;
        s2.style.backgroundColor = `rgb(${val3}, ${val2}, ${val1})`;
        s3.style.backgroundColor = `rgb(${val2}, ${val1}, ${val3})`;
    }
    randomColor2();
});

s4.addEventListener('mouseleave', ()=> {
    s1.style.backgroundColor = 'white';
    s2.style.backgroundColor = 'white';
    s3.style.backgroundColor = 'white';
});



// ****************************************** Custom Cursor *********************************************
let main = document.getElementById('main');
let cursor = document.getElementById('cursor');

main.addEventListener('mousemove', (e)=> {
    console.log(e.x, e.y);
    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";
});