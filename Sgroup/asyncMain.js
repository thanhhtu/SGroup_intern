
// //async
// setTimeout(function(){
//     console.log('setTimeout');
// }, 1000);
// console.log('not setTimeout');


// //viết 1 hàm interval in ra 1 số sau 1s
// //clear interval sau 5s
// let i = 0;
// setTimeout(function(){
//         clearInterval(interval_loop);
// }, 5000);

// let interval_loop = setInterval(function(){
//     console.log(i);
//     i++;        
// }, 1000)

// //cách khác
// let i = 0;
// let loop = setInterval(function(){
//     console.log(i);
//     i++;
//     if(i > 5) clearInterval(loop);
// },1000)


// let i;
// for(i = 0; i < 3; i++){
//     setTimeout(()=>{
//         console.log(i);
//     }, 0);
// }

//promise
let randomNumber;
const myPromise = new Promise((resolve, reject) => {

    randomNumber = Math.random() * 10;

    //fulfilled
    if(randomNumber > 5) resolve(randomNumber); //value trong resolve được truyền làm tham số của callback trong then()

    //rejected
    else reject(randomNumber); //value trong resolve được truyền làm tham số của callback trong catch()

});

myPromise
    .then(function(fulfilledNumber){
        console.log('fulfil (>5): ', fulfilledNumber);
    })
    .catch(function(rejectNumber){
        console.log('reject (<5): ', rejectNumber);
    })