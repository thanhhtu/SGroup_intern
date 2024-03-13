const a = document.querySelector("h1");
const b = document.querySelector("div");
const c = document.querySelector("img");

// setTimeout(function(){
//     fetch ("https://pokeapi.co/api/v2/pokemon/pikachu")
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(data){
//             console.log(data)
//             a.innerText = data.name;
//             b.style.display = "block";
//             c.src = data.sprites.front_default;
//         })
// }, 3000)

//DÙNG ASYNC, AWAIT
setTimeout(async function(){
    const response = await fetch ("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = await response.json();

    console.log(data);
    // a.innerText = data.name;
    // b.style.display = "block";
    // c.src = data.sprites.front_default;    

    //LOCALSTORAGE
    localStorage.setItem('name', data.name);
    localStorage.setItem('src', data.sprites.front_default);
}, 3000);

const name1= localStorage.getItem('name');
const src = localStorage.getItem('src');
a.innerText = name1;
b.style.display = "block";
c.src = src;  