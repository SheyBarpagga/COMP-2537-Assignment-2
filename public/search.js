
var pokemonData = [];
var counter = 1;

document.addEventListener("DOMContentLoaded", () => {
    initList();
    console.log(pokemonData);
    test();
})

function initList() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=900')
    .then(response => response.json())
    .then(function(pokeData) {
        pokeData.results.forEach(function(pokemon) {
            getPokeData(pokemon);
        })
    });
}

function getPokeData(pokemon) {
    fetch(pokemon.url)

    .then(response => response.json())

    .then(function(data) {

        let currentData = [];

        currentData.push(data.name);
        currentData.push(data.height);
        currentData.push(data.weight);
        currentData.push(data.types[0].type["name"]);

        pokemonData[counter] = currentData;
        counter++;
    })
}
function test(){
var x = document.createElement("a");
x.classList.add("test");
x.addEventListener("click",function() {
    var temp = document.getElementById("name").nodeValue;
    console.log(temp);

    for (const element of pokemonData) {
        
        if(temp.localeCompare(element[0])) {
            fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)

        .then(response => response.json())

        .then(function(data) {
            addItem(data);
    })
        }

    }
})

x.innerText = "wagwan"
document.getElementById("main-container").appendChild(x);
}
function addItem(pokemon) {
    let pokeCont = document.createElement("div");
    let pokemonIMG = document.createElement("img");
    var pokeLink = document.createElement("a");

    pokemonIMG.srcset = `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`;

    let imgBox = document.createElement("div");
    imgBox.style.width = "200px";

    pokeCont.classList.add("poke-container");
    pokemonIMG.classList.add("pokemon-image");

    imgBox.appendChild(pokemonIMG);
    imgBox.classList.add("imgBox");


    let name = document.createElement("h3");
    name.innerText = pokemon.name;
    name.style.alignSelf = "center";
    
    let id = document.createElement("p");
    id.innerText = "#" + pokemon.id;
    id.style.alignSelf = "center";


    pokeCont.appendChild(name);
    pokeCont.appendChild(imgBox);

    pokeCont.appendChild(id);
    
    pokeLink.appendChild(pokeCont);
    pokeLink.href = "profile.html";
    let mainCont = document.getElementById("main-container");

    mainCont.appendChild(pokeLink);

    pokeLink.addEventListener("click", () => {
        console.log(pokeLink);
        localStorage.setItem("pokemon", pokeLink.firstChild.firstChild.textContent);
        })
}




