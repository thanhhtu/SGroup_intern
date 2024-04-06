// const user1 = {
//     name: "hello",
//     age: 15,
//     grade: 10
// }

// const user2 = {
//     ...user1, //lấy của user1 bỏ xuống
// }

// async function fetchData(){
//     let res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//     let data = await res.json();
//     console.log(data);
//     const {abilities, heigh} = data[0];
//     console.log(abilities, heigh);
// }

// fetchData();

// //local storage
// const userObj = {
//     username: "Maria",
//     email: "maria@mail.com"
// }
  
// localStorage.setItem('user', JSON.stringify(userObj)); //chuyển userObj sang string để lưu vào local storage
// console.log(typeof(userObj))
// const storedUserData = localStorage.getItem('user'); //storedUserData ở dạng string

// if (storedUserData) {
//     const userData = JSON.parse(storedUserData); //chuyển storedUserData về dạng object ban đầu
//     // You can use userData here...
//     console.log(typeof(userData));
// } else {
//     console.log('User data not found in local storage')
// }

// console.log(typeof(storedUserData));

// try{
//     let x = 1 + 1;
//     x = y + 5;
// }catch (e){
//     console.log("Lỗi nè: " + e);
// }
// //Lỗi nè: ReferenceError: y is not defined

// //VD2
// try{
//     let x = 1 + 1;
//     if(x == 2) throw new Error("Lỗi");
// }catch (e){
//     console.log("Lỗi nè: " + e);
// }finally{
//     console.log("oke")
// }
// //Lỗi nè: Error: Lỗi
// //oke

// //VD3
// try{
//     let x = 1 + 1;
//     if(x == 2) throw "Lỗi";
// }catch (e){
//     console.log("Lỗi nè: " + e);
// }finally{
//     console.log("oke")
// }
// //Lỗi nè: Lỗi
// //oke

// let myPromise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
//   });
  
// myPromise
//     .then(function(result) {
//         console.log(result); // 1
//         return result * 2;
//     });
  
// myPromise
//     .then(function(result) {
//         console.log(result); // 1
//         return result * 2;
//     });
  
// myPromise
//     .then(function(result) {
//         console.log(result); // 1
//         return result * 2;
//     });

//1 1 1 //-> in sau 1s

// let obj = {
//     a: "A",
//     b: "B"
// }
// console.log(typeof(obj)); //object

// let arr = [1, 2, 30]
// console.log(typeof(arr)); //object

// let dt = new Date();
// console.log(typeof(dt)); //object

// let funct = function(){
//     let x = ok;
// }
// console.log(typeof(funct)); //function

// let x = Symbol(1.5);
// let y = Symbol(1.5);
// console.log(x === y); //false

// let z = x;
// console.log(x === z); //true

// let x = 1.2;
// let y = ""+x;
// console.log(typeof(y)); //true

// const arr = [1, 2];
// arr[3] = 3;
// console.log(arr);

// const originalObject = { name: 'John', age: 30 };
// const deepCopy = { ...originalObject }; //Deep copy
// deepCopy.age = 25;
// console.log(originalObject.age); //30

// function oke(){
//     return `
//         <div>oke</div>
//     `
// }
// document.getElementById("oke").insertAdjacentHTML("afterbegin", oke())
// document.getElementById("oke").insertAdjacentHTML("afterbegin", oke())
// document.getElementById("oke").insertAdjacentHTML("afterbegin", oke())
// document.getElementById("oke").removeAdjacentHTML("afterbegin", oke())

// const products = ['dmitripavlutin', 'anonystick'];
// for(const [index, product] of products.entries()){
// 		console.log(index, product);
// }
/* 
0, 'dmitripavlutin'
1, 'anonystick'
*/
// for(const i of products.entries()){
//     console.log(i);
// }
/*
[ 0, 'dmitripavlutin' ]
[ 1, 'anonystick' ]
*/

let cnt = 0;
let arr = new Array();
function x(){
    return `
        <div>oke</div>
    `;
}

let y;
document.getElementById("btn").addEventListener("click", function(){
    arr[cnt++] = x();
    console.log(arr);
    y = arr.join(" ");
    console.log(y);
})

document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("oke").innerHTML = y;
})

document.getElementById("okeeeeee").addEventListener("click", function(){
    arr[3] = "";
    arr = arr.filter((value) => value != "");
    y = arr.join(" ");
    document.getElementById("oke").innerHTML = y;
})

arr.length
