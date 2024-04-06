let btn_newTask = document.getElementById("btn-new-task");
let btn_submit = document.getElementById("btn-submit");
let exit_create_todo = document.getElementById("exit-create-todo");
let create_todo = document.querySelector(".create-todo");
let bgr_popup = document.querySelector(".bgr");

let category_input = document.getElementById("category");
let title_input = document.getElementById("title");
let content_input = document.getElementById("content");

//border will change red when inputs are empty
function checkInputEmpty(){
    if(!category_input.value){
        category_input.style.border = "1.5px solid red";
    }
    if(!title_input.value){
        title_input.style.border = "1.5px solid red";  
    }
    if(!content_input.value){
        content_input.style.border = "1.5px solid red";  
    }

    if(!category_input.value || !title_input.value || !content_input.value){
        return false
    }else{
        return true;
    }
}

//border will change green when inputs are not empty
function checkInputNotEmpty(){
    category_input.onblur = function(){
        if(category_input.value != ""){
            category_input.style.border = "1.5px solid green"; 
        }else{
            category_input.style.borderColor = "rgba(217, 217, 217, 1)"; 
        }
    }
    title_input.onblur = function(){
        if(title_input.value != ""){
            title_input.style.border = "1.5px solid green"; 
        }else{
            title_input.style.borderColor = "rgba(217, 217, 217, 1)";
        }
    }
    content_input.onblur = function(){
        if(content_input.value != ""){
            content_input.style.border = "1.5px solid green"; 
        }else{
            content_input.style.borderColor = "rgba(217, 217, 217, 1)";
        }
    }
}

//reset state when open or close create-todo popup
function openOrCloseCreateTodo(){
    create_todo.classList.toggle("active");
    bgr_popup.classList.toggle("bgr-popup");
    
    category_input.value = "";
    title_input.value = "";
    content_input.value = "";

    category_input.style.borderColor = "rgba(217, 217, 217, 1)";
    title_input.style.borderColor = "rgba(217, 217, 217, 1)";
    content_input.style.borderColor = "rgba(217, 217, 217, 1)";
}

//get current time
function getCurrentTime(){
    let dt = new Date();
    let month = dt.toLocaleString('en-US', { month: 'long' }); //toLocaleString method with the options { month: 'long' } to get the full name of the month
    let day = dt.getDate();
    let year = dt.getFullYear();
    return `${month} ${day}, ${year}`;
}

let todo_list = document.querySelector(".todo-list")
let count_todo = document.querySelector(".count-todo");
let category_note = document.querySelector(".category-note");
let title_note = document.querySelector(".title-note");
let content_note = document.querySelector(".content-note");
let currentTime = document.querySelector(".time");

//set array data from local storage
let arr_todo = [];
let data_todo = localStorage.getItem("todo-task");
if(data_todo){
    arr_todo = JSON.parse(data_todo);
}

function renderTodoTask(value, index){
    return `
        <div class="note">
            <div class="icon-note">
                <img src="../image/editIcon.png" alt="icon edit" class="icon-edit">
                <img src="../image/deleteIcon.png" alt="icon delete" class="icon-delete">
            </div>
            <div class="category-note">${value.category}</div>
            <div class="title-note">${value.title}</div>
            <div class="line-note"></div>
            <div class="content-note">${value.content}</div>
            <div class="clock-note">
                <img src="../image/clockIcon.png" alt="icon clock" class="icon-clock">
                <p id="time">${value.time}</p>
            </div>
        </div>
    `
}

let infor = {
    category: category_input.value, 
    title: title_input.value, 
    content: content_input.value, 
    time: getCurrentTime()
};

function addTodoList(){
    //only do when filled into all inputs
    if(checkInputEmpty()){
        let infor = {
            category: category_input.value, 
            title: title_input.value, 
            content: content_input.value, 
            time: getCurrentTime()
        };
    
        //add to local storage
        arr_todo.push(infor);
        localStorage.setItem("todo-task", JSON.stringify(arr_todo));
    
        //change count todo tasks 
        count_todo.innerHTML = arr_todo.length;
    
        //render to html
        let renderTodoList = arr_todo.map(renderTodoTask);
        todo_list.innerHTML = renderTodoList.join(" ");
    
        console.log(category_input.value)
    }else{
        return false;
    }
}


document.addEventListener("DOMContentLoaded", function(){
    //open create-todo popup
    btn_newTask.addEventListener("click", openOrCloseCreateTodo);

    //close create-todo popup when press slash or when press somewhere on background
    exit_create_todo.addEventListener("click", openOrCloseCreateTodo);
    bgr_popup.addEventListener('click', openOrCloseCreateTodo);

    //submit create-todo button
    checkInputNotEmpty();
    btn_submit.addEventListener("click", checkInputEmpty);

    btn_submit.addEventListener("click", addTodoList);
});

// localStorage.clear();