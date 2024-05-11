let main = document.getElementById('main');
let s = '';
let links = ["https://img.pokemondb.net/artwork/avif/dragonite.avif", "https://i.pinimg.com/736x/9c/22/88/9c2288407d7048fbb73e4a736dc4306d.jpg",
"https://www.pngitem.com/pimgs/m/46-468761_pikachu-png-transparent-image-pikachu-png-png-download.png",
"https://archives.bulbagarden.net/media/upload/thumb/5/54/0007Squirtle.png/375px-0007Squirtle.png",
"https://i.pinimg.com/564x/31/49/13/3149131d03082fddb8b096d9c3aeff48.jpg", 
"https://i.pinimg.com/564x/31/49/13/3149131d03082fddb8b096d9c3aeff48.jpg"];

for(let i = 1; i<=65; i++) {
    let randomNum = Math.floor(Math.random()*links.length);
    s += `<div class="card">
            <img src="${links[randomNum]}">
          </div>
          `;
}
main.innerHTML = s;

// "https://img.pokemondb.net/artwork/avif/dragonite.avif"
// "https://i.pinimg.com/736x/9c/22/88/9c2288407d7048fbb73e4a736dc4306d.jpg"

