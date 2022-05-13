
var counter = 0;
document.addEventListener("DOMContentLoaded", () => {
    getPoke();
})


function getPoke() {
    for (var x = 0; x < 9; x++) {
        var random = Math.floor(Math.random() * 900);
        fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)

        .then(response => response.json())

        .then(function(pokepokemon) {
            
            getPokepokemon(pokepokemon);
        })
    }
}

function getPokepokemon(pokemon) {
 
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
        let colOne = document.getElementById("colOne");
        let colTwo = document.getElementById("colTwo");
        let colThree = document.getElementById("colThree");

        if(counter < 3) {
            colOne.appendChild(pokeLink);
            counter++;
        } else if(counter < 6) {
            colTwo.appendChild(pokeLink);
            counter++;
        } else if(counter < 9){
            colThree.appendChild(pokeLink);
            counter++;
        }


        mainCont.appendChild(colOne);
        mainCont.appendChild(colTwo);
        mainCont.appendChild(colThree);


        pokeLink.addEventListener("click", () => {
        console.log(pokeLink);
        localStorage.setItem("pokemon", pokeLink.firstChild.firstChild.textContent);
        })
}


