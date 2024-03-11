const a = document.querySelector("h1");
const b = document.querySelector("div");
const c = document.querySelector("img");


setTimeout(function(){
    fetch ("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
            a.innerText = data.name;
            b.style.display = "block";
            c.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png";
        })
}, 3000)