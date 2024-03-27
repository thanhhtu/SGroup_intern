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