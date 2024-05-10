// let x = document.querySelectorAll('h1')[0];
let ele1 = document.querySelector('#ele1');  // Pikachu
let ele2 = document.querySelector('#ele2');  // Charizad
let ele3 = document.querySelector('#ele3');  // Mewtwo

ele1.addEventListener('click', ()=> {
    ele1.style.backgroundColor = 'red';
    ele1.style.color = 'yellow';
});

ele1.addEventListener('mouseleave', ()=> {
    ele1.style.color = 'black';
    ele1.style.backgroundColor = 'white';
});

ele2.addEventListener('mouseenter', ()=> {
    ele2.style.color = 'white';
    ele2.style.backgroundColor = 'orange';
});

ele2.addEventListener('click', ()=> {
    ele3.style.color = 'white';
    ele3.style.backgroundColor = 'purple';
});

ele2.addEventListener('mouseleave', ()=> {
    ele2.style.color = 'black';
    ele2.style.backgroundColor = 'white';
})

ele3.addEventListener('click', ()=> {
    ele1.innerHTML = 'Bulbasaur';
    ele1.style.color = 'white'
    ele1.style.backgroundColor = 'green';
})