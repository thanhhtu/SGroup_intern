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
            c.src = data.sprites.front_default;
        })
}, 3000)