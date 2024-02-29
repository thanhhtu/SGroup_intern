const arr = [5, 6, 7, 8, 9, 10];

//map -> not change the origin array
console.log("map");

function Map(array){
    const new_array = [];
    for(let i = 0; i < array.length; i++){
        new_array[i] = array[i];
    }

    const return_array = [];
    for(let i = 0; i < new_array.length; i++){
        new_array[i] *= 5;
        return_array.push(new_array[i]);
    }

    return return_array;
}

const map_arr = Map(arr);
console.log(map_arr);

//forEach
console.log("\nforEach");

for(let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}`);
}

//find -> return the value of the first array element that passes the test funct
console.log("\nfind");

function Find(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] > 7.5) return array[i];
    }
}

console.log(Find(arr));

//findIndex -> return the index of the first array element that passes the test funct
console.log("\nfindIndex");

function FindIndex(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] > 7.8) return i;
    }
}

console.log(FindIndex(arr));

//reduce
console.log("\nreduce");

function Reduce(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}

console.log(Reduce(arr));

//filter
console.log("\nfilter");

function Filter(array){
    const new_array = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] > 7.8){
            new_array.push(array[i]);
        }
    }
    return new_array;
}

const arr_filter = Filter(arr);
console.log(arr_filter);

//////////////////////////////////////////
//ex1
console.log("\nExercise 1");

const data1_ex1 = ['a', 'b', 'c'];
const data2_ex1 = [1, 2, 3];
console.log(data2_ex1.concat(data1_ex1));

//ex2
console.log("\nExercise 2");

const data_ex2 = [1, 1, 3, 4, 5];
let check_ex2 = data_ex2.every(
    (value) =>  value % 2 === 0
);
if(check_ex2) console.log("Yes");
else console.log("No");

//ex3
console.log("\nExercise 3");

const data_ex3 = [1, 1, 3, 4, 5];
let check_ex3 = data_ex3.some(
    (value) =>  value % 2 === 0
);
if(check_ex3) console.log("Yes");
else console.log("No");

//ex4
console.log("\nExercise 4");

const data1_ex4 = [-1, -1, 3, 4, 5];
let data2_ex4 = data1_ex4.filter(
    (value) => value > 0
);
console.log(data2_ex4);

//ex5
console.log("\nExercise 5");

const data_ex5 = [-1, -1, 3, 4, 5];
let check_value_ex5 = data_ex5.find(
    (value) => value > 0
);
let check_index_ex5 = data_ex5.findIndex(
    (value) => value > 0
);
if(check_value_ex5 !== undefined) console.log(check_value_ex5 + " " + check_index_ex5);
else console.log("No result");

//ex6
console.log("\nExercise 6");

const data1_ex6 = [1, 1, 3, 4, 5];
let data2_ex6 = data1_ex6.forEach(
    (value) => {
        if(value % 5 === 0) console.log(value)
    }
);

//ex7
console.log("\nExercise 7");

const data_ex7 = [1, 1, 3, 4, 5, 1];
let check_first_ex7 = data_ex7.findIndex(
    (value) => value === 1
);
let check_last_ex7 = data_ex7.lastIndexOf(1);

if(check_first_ex7 !== undefined || check2_last_ex7 !== undefined){
    console.log(check_first_ex7 + " " + check_last_ex7);
}else console.log("No result");

//ex8
console.log("\nExercise 8");

const data_ex8 = [1, 1, 3, 4, 5];
console.log(data_ex8.join(", "));

//ex9
console.log("\nExercise 9");

const data1_ex9 = [-1, -1, 3, 4, -5];
const data2_ex9 = data1_ex9.map(
    (value) => Math.abs(value)
)
console.log(data2_ex9);

//ex10
console.log("\nExercise 10");

function Reverse(x){
    let INT_MAX = 2147483647;
    let INT_MIN = - INT_MAX - 1;
    let res = 0;
    let num = x;
    while (num !== 0) {
      res = (res * 10) + (num % 10);
      num = num > 0 ? Math.floor(num / 10) : Math.ceil(num / 10);
      if (res > INT_MAX || res < INT_MIN) return 0;
    }
    return res;
};
console.log(Reverse(12345));