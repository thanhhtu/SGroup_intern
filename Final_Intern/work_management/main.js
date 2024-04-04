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
    if(category_input.value == "" || category_input.value == null){
        category_input.style.border = "1.5px solid red";
    }
    if(title_input.value == "" || title_input.value == null){
        title_input.style.border = "1.5px solid red";  
    }
    if(content_input.value == "" || content_input.value == null){
        content_input.style.border = "1.5px solid red";  
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

function createOrCloseCreateTodo(){
    create_todo.classList.toggle("active");
    bgr_popup.classList.toggle("bgr-popup");
    
    category_input.value = "";
    title_input.value = "";
    content_input.value = "";

    category_input.style.borderColor = "rgba(217, 217, 217, 1)";
    title_input.style.borderColor = "rgba(217, 217, 217, 1)";
    content_input.style.borderColor = "rgba(217, 217, 217, 1)";
}

document.addEventListener("DOMContentLoaded", function(){
    //open create-todo pop-up
    btn_newTask.addEventListener("click", createOrCloseCreateTodo);

    //close create-todo pop-up
    //close when press slash
    exit_create_todo.addEventListener("click", createOrCloseCreateTodo);
    //close when press background
    bgr_popup.addEventListener('click', createOrCloseCreateTodo);

    //submit create-todo button
    btn_submit.addEventListener("click", checkInputEmpty);
    checkInputNotEmpty();
});