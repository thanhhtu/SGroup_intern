// localStorage.clear();

let btn_newTask = document.getElementById("btn-new-task");
let bgr_popup = document.querySelector(".bgr");

let create_todo = document.querySelector(".create-todo");
let category = document.querySelector(".create-todo > .category");
let title = document.querySelector(".create-todo > .title");
let content = document.querySelector(".create-todo > .content");
let btn_submit = document.querySelector(".create-todo > .btn-submit");
let exit_create = document.getElementById("exit-create");

let edit_todo = document.querySelector(".edit-todo");
let edit_category = document.querySelector(".edit-todo > .category");
let edit_title = document.querySelector(".edit-todo > .title");
let edit_content = document.querySelector(".edit-todo > .content");
let edit_btn = document.querySelector(".edit-todo > .btn-submit");
let exit_edit = document.getElementById("exit-edit");

//border will change green when inputs are not empty
function checkInputNotEmpty(input1, input2, input3){
    input1.onblur = function(){
        if(input1.value != ""){
            input1.style.border = "1.5px solid green"; 
        }else{
            input1.style.borderColor = "rgba(217, 217, 217, 1)"; 
        }
    }
    input2.onblur = function(){
        if(input2.value != ""){
            input2.style.border = "1.5px solid green"; 
        }else{
            input2.style.borderColor = "rgba(217, 217, 217, 1)";
        }
    }
    input3.onblur = function(){
        if(input3.value != ""){
            input3.style.border = "1.5px solid green"; 
        }else{
            input3.style.borderColor = "rgba(217, 217, 217, 1)";
        }
    }
}

//border will change red when inputs are empty
function checkInputEmpty(input1, input2, input3){
    if(!input1.value){
        input1.style.border = "1.5px solid red";
    }
    if(!input2.value){
        input2.style.border = "1.5px solid red";  
    }
    if(!input3.value){
        input3.style.border = "1.5px solid red";  
    }
}

//get current time
function getCurrentTime(){
    let dt = new Date();
    let month = dt.toLocaleString('en-US', { month: 'long' }); //toLocaleString method with the options { month: 'long' } to get the full name of the month
    let day = dt.getDate();
    let year = dt.getFullYear();
    return `${month} ${day}, ${year}`;
}

//reset state when open or close create-todo popup
function openOrCloseCreateTodo(){
    bgr_popup.addEventListener('click', () => {
        bgr_popup.classList.remove("bgr-popup");
        create_todo.classList.remove("active");
    }); //close when enter outside popup
    bgr_popup.classList.toggle("bgr-popup");

    create_todo.classList.toggle("active");
    
    category.value = "";
    title.value = "";
    content.value = "";

    category.style.borderColor = "rgba(217, 217, 217, 1)";
    title.style.borderColor = "rgba(217, 217, 217, 1)";
    content.style.borderColor = "rgba(217, 217, 217, 1)";
}

///////////////////////////////////////////////////////////////////////

let todo_list = document.querySelector(".todo-list")
let count_todo = document.querySelector(".count-todo");

let category_note = document.querySelector(".category-note");
let title_note = document.querySelector(".title-note");
let content_note = document.querySelector(".content-note");
let currentTime = document.querySelector(".time");

//set todo array from local storage
let arr_todo = [];
let data_todo = localStorage.getItem("todo-list");
let render_todo_list;
if(data_todo){
    arr_todo = JSON.parse(data_todo);

    render_todo_list = arr_todo.map(renderTodo);
    todo_list.innerHTML = render_todo_list.join(" ");

    count_todo.innerHTML = arr_todo.length;
}

//render html
function renderTodo(value, index){
    return `
        <div class="note">
            <div class="icon-note">
                <img src="../image/editIcon.png" alt="icon edit" class="icon-edit" onclick="editTodo(${index})">
                <img src="../image/deleteIcon.png" alt="icon delete" class="icon-delete" onclick="delTodo(${index})">
            </div>
            <div class="category-note">${value.category}</div>
            <div class="title-note">${value.title}</div>
            <div class="line-note"></div>
            <div class="content-note">${value.content}</div>
            <div class="clock-note">
                <img src="../image/clockIcon.png" alt="icon clock" class="icon-clock">
                <p class="time">${value.time}</p>
            </div>
        </div>
    `
}

//add todo task
function addTodo(){
    checkInputEmpty(category, title, content);
    
    //only do when filled into all inputs
    if(category.value && title.value && content.value){
        let infor = {
            category: category.value, 
            title: title.value, 
            content: content.value, 
            time: getCurrentTime()
        };
    
        //add to local storage
        arr_todo.push(infor);
        localStorage.setItem("todo-list", JSON.stringify(arr_todo));
    
        //change num of todo tasks 
        count_todo.innerHTML = arr_todo.length;
    
        //render to html
        render_todo_list = arr_todo.map(renderTodo);
        todo_list.innerHTML = render_todo_list.join(" ");
    
        //after submit, the create-todo popup closes
        create_todo.classList.toggle("active");
        bgr_popup.classList.toggle("bgr-popup");
    }
}

//delete todo task
function delTodo(index_del){
    arr_todo.splice(index_del, 1);

    localStorage.setItem("todo-list", JSON.stringify(arr_todo));
    count_todo.innerHTML = arr_todo.length;
    render_todo_list = arr_todo.map(renderTodo);
    todo_list.innerHTML = render_todo_list.join(" ");
}

//edit todo task
function editTodo(index_edit){
    checkInputNotEmpty(edit_category, edit_title, edit_content);

    bgr_popup.addEventListener('click', () => {
        bgr_popup.classList.remove("bgr-popup");
        edit_todo.classList.remove("active");
    });

    bgr_popup.classList.toggle("bgr-popup");
    edit_todo.classList.toggle("active");
    
    if(edit_todo.classList.contains("active")){
        edit_category.value = arr_todo[index_edit].category;
        edit_title.value = arr_todo[index_edit].title;
        edit_content.value = arr_todo[index_edit].content;
    }
    
    
    exit_edit.addEventListener("click", editTodo);
}

document.addEventListener("DOMContentLoaded", function(){
    //open create-todo popup
    btn_newTask.addEventListener("click", openOrCloseCreateTodo);

    //close create-todo popup
    exit_create.addEventListener("click", openOrCloseCreateTodo);


    //submit create-todo + create todo list
    checkInputNotEmpty(category, title, content);
    btn_submit.addEventListener("click", addTodo);
});

