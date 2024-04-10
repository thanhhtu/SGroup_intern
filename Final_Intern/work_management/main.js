let btn_newTask = document.getElementById("btn-new-task");
let bgr_popup = document.querySelector(".bgr");

//create-todo popup input
let create_todo = document.querySelector(".create-todo");
let category = document.querySelector(".create-todo > .category");
let title = document.querySelector(".create-todo > .title");
let content = document.querySelector(".create-todo > .content");
let btn_submit = document.querySelector(".create-todo > .btn-submit");
let exit_create = document.getElementById("exit-create");

//task input
let category_note = document.querySelector(".category-note");
let title_note = document.querySelector(".title-note");
let content_note = document.querySelector(".content-note");
let currentTime = document.querySelector(".time");

//task list
let todo_list = document.querySelector(".todo-list");
let doing_list = document.querySelector(".doing-list");
let completed_list = document.querySelector(".completed-list");
let blocked_list = document.querySelector(".blocked-list");

//edit-todo popup input
let edit_todo = document.querySelector(".edit-todo");
let edit_category = document.querySelector(".edit-todo > .category");
let edit_title = document.querySelector(".edit-todo > .title");
let edit_content = document.querySelector(".edit-todo > .content");
let edit_btn = document.querySelector(".edit-todo > .btn-submit");
let exit_edit = document.getElementById("exit-edit");

//state of task
let todo_tick = document.getElementById("todo-tick");
let doing_tick = document.getElementById("doing-tick");
let completed_tick = document.getElementById("completed-tick");
let blocked_tick = document.getElementById("blocked-tick");

//number of tasks in list
let count_todo = document.querySelector(".count-todo");
let count_doing = document.querySelector(".count-doing");
let count_completed = document.querySelector(".count-completed");
let count_blocked = document.querySelector(".count-blocked");

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

function openOrClose(bgr, popup){
    bgr.classList.toggle("bgr-popup");
    popup.classList.toggle("active");

    bgr.addEventListener('click', () => {
        bgr.classList.remove("bgr-popup");
        popup.classList.remove("active");
    });
}

//reset state when open or close create-todo popup
function resetCreateTodo(){
    category.value = "";
    title.value = "";
    content.value = "";

    category.style.borderColor = "rgba(217, 217, 217, 1)";
    title.style.borderColor = "rgba(217, 217, 217, 1)";
    content.style.borderColor = "rgba(217, 217, 217, 1)";
}

//get current time
function getCurrentTime(){
    let dt = new Date();
    let month = dt.toLocaleString('en-US', { month: 'long' }); //toLocaleString method with the options { month: 'long' } to get the full name of the month
    let day = dt.getDate();
    let year = dt.getFullYear();
    return `${month} ${day}, ${year}`;
}

//connect to local storage
let data_todo = localStorage.getItem("todo-list");
let arr_todo = JSON.parse(data_todo) || [];

let data_doing = localStorage.getItem("doing-list");
let arr_doing = JSON.parse(data_doing) || [];

let data_completed = localStorage.getItem("completed-list");
let arr_completed = JSON.parse(data_completed) || [];

let data_blocked = localStorage.getItem("blocked-list");
let arr_blocked = JSON.parse(data_blocked) || [];

//render to html -> render in one time to make sense all list
function render(){
    //todo list
    let todo = arr_todo.map((value, index) => {
        return `
            <div class="note">
                <div class="icon-note">
                    <img src="../image/editIcon.png" alt="icon edit" class="icon-edit" onclick="editTask(${index}, 'todo')">
                    <img src="../image/deleteIcon.png" alt="icon delete" class="icon-delete" onclick="delTask(${index}, 'todo')">
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
    })
    todo_list.innerHTML = todo.join("");
    
    //doing list
    let doing = arr_doing.map((value, index) => {
        return `
            <div class="note">
                <div class="icon-note">
                    <img src="../image/editIcon.png" alt="icon edit" class="icon-edit" onclick="editTask(${index}, 'doing')">
                    <img src="../image/deleteIcon.png" alt="icon delete" class="icon-delete" onclick="delTask(${index}, 'doing')">
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
    })
    doing_list.innerHTML = doing.join("");

    //completed list
    let completed = arr_completed.map((value, index) => {
        return `
            <div class="note">
                <div class="icon-note">
                    <img src="../image/editIcon.png" alt="icon edit" class="icon-edit" onclick="editTask(${index}, 'completed')">
                    <img src="../image/deleteIcon.png" alt="icon delete" class="icon-delete" onclick="delTask(${index}, 'completed')">
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
    })
    completed_list.innerHTML = completed.join("");
    
    //blocked list
    let blocked = arr_blocked.map((value, index) => {
        return `
            <div class="note">
                <div class="icon-note">
                    <img src="../image/editIcon.png" alt="icon edit" class="icon-edit" onclick="editTask(${index}, 'blocked')">
                    <img src="../image/deleteIcon.png" alt="icon delete" class="icon-delete" onclick="delTask(${index}, 'blocked')">
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
    })
    blocked_list.innerHTML = blocked.join("");

    //render number
    count_todo.innerHTML = arr_todo.length;
    count_doing.innerHTML = arr_doing.length;
    count_completed.innerHTML = arr_completed.length;
    count_blocked.innerHTML = arr_blocked.length;
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

        render();

        //after submit, the create-todo popup closes
        create_todo.classList.remove("active");
        bgr_popup.classList.remove("bgr-popup");
    }
}

//delete todo task
function delTask(index_del, state){
    if(state === "todo"){
        arr_todo.splice(index_del, 1);
        localStorage.setItem("todo-list", JSON.stringify(arr_todo));
    }else if(state === "doing"){
        arr_doing.splice(index_del, 1);
        localStorage.setItem("doing-list", JSON.stringify(arr_doing));
    }else if(state === "completed"){
        arr_completed.splice(index_del, 1);
        localStorage.setItem("completed-list", JSON.stringify(arr_completed));
    }else if(state === "blocked"){
        arr_blocked.splice(index_del, 1);
        localStorage.setItem("blocked-list", JSON.stringify(arr_blocked));
    }

    render();
}

let pre_state;
let i_edit;
let task_edit;
function editTask(index_edit, state){
    //open
    bgr_popup.classList.add("bgr-popup");
    edit_todo.classList.add("active");

    //set validate
    edit_category.style.borderColor = "rgba(217, 217, 217, 1)";
    edit_title.style.borderColor = "rgba(217, 217, 217, 1)";
    edit_content.style.borderColor = "rgba(217, 217, 217, 1)";

    //set state before change
    pre_state = state;
    i_edit = index_edit;
    
    //set value edit popup
    let task = {};
    if(state === "todo"){
        task = arr_todo[index_edit];
        todo_tick.checked = true;
    }else if(state === "doing"){
        task = arr_doing[index_edit];
        doing_tick.checked = true;
    }else if(state === "completed"){
        task = arr_completed[index_edit];
        completed_tick.checked = true;
    }else if(state === "blocked"){
        task = arr_blocked[index_edit];
        blocked_tick.checked = true;
    }

    edit_category.value = task.category;
    edit_title.value = task.title;
    edit_content.value = task.content;
}

function edit(i_edit, pre_state){
    let infor = {
        category: edit_category.value, 
        title: edit_title.value, 
        content: edit_content.value, 
        time: getCurrentTime()
    };
    
    //set state of task
    let state_edit;
    if(todo_tick.checked){
        state_edit = "todo";
    }else if(doing_tick.checked){
        state_edit = "doing";
    }else if(completed_tick.checked){
        state_edit = "completed";
    }else{
        state_edit = "blocked";
    }

    console.log(state_edit === pre_state)
    //edit task in the same state
    if(state_edit === pre_state){
        if(state_edit === "todo"){
            arr_todo.splice(i_edit, 1, infor);
            localStorage.setItem("todo-list", JSON.stringify(arr_todo));
        }else if(state_edit === "doing"){
            arr_doing.splice(i_edit, 1, infor);
            localStorage.setItem("doing-list", JSON.stringify(arr_doing));
        }else if(state_edit === "completed"){
            arr_completed.splice(i_edit, 1, infor);
            localStorage.setItem("doing-list", JSON.stringify(arr_completed));
        }else if(state_edit === "blocked"){
            arr_blocked.splice(i_edit, 1, infor);
            localStorage.setItem("doing-list", JSON.stringify(arr_blocked));
        }
    }else{
        //delete task in old list
        if(pre_state === "todo"){
            arr_todo.splice(i_edit, 1);
            localStorage.setItem("todo-list", JSON.stringify(arr_todo));
        }else if(pre_state === "doing"){
            arr_doing.splice(i_edit, 1);
            localStorage.setItem("doing-list", JSON.stringify(arr_doing));
        }else if(pre_state === "completed"){
            arr_completed.splice(i_edit, 1);
            localStorage.setItem("completed-list", JSON.stringify(arr_completed));
        }else if(pre_state === "blocked"){
            arr_blocked.splice(i_edit, 1);
            localStorage.setItem("blocked-list", JSON.stringify(arr_blocked));
        }
    
        //add task to new list
        if(state_edit === "todo"){
            arr_todo.push(infor);
            localStorage.setItem("todo-list", JSON.stringify(arr_todo));
        }else if(state_edit === "doing"){
            arr_doing.push(infor);
            localStorage.setItem("doing-list", JSON.stringify(arr_doing));
        }else if(state_edit === "completed"){    
            arr_completed.push(infor);
            localStorage.setItem("completed-list", JSON.stringify(arr_completed));
        }else if(state_edit === "blocked"){    
            arr_blocked.push(infor);
            localStorage.setItem("blocked-list", JSON.stringify(arr_blocked));
        }
    }
    
    render();
}

document.addEventListener("DOMContentLoaded", function(){
    render(); //render to html

    //open create-todo popup
    btn_newTask.addEventListener("click", function(){
        openOrClose(bgr_popup, create_todo);
        resetCreateTodo();
    });

    //close create-todo popup
    exit_create.addEventListener("click", function(){
        openOrClose(bgr_popup, create_todo);
        resetCreateTodo();
    });

    //submit create-todo + create todo list
    checkInputNotEmpty(category, title, content);
    btn_submit.addEventListener("click", addTodo);

    //close edit todo
    exit_edit.addEventListener("click", () => {
        bgr_popup.classList.remove("bgr-popup");
        edit_todo.classList.remove("active");
    });
    bgr_popup.addEventListener('click', () => {
        bgr_popup.classList.remove("bgr-popup");
        edit_todo.classList.remove("active");
    });

    //save edit
    checkInputNotEmpty(edit_category, edit_title, edit_content);
    edit_btn.addEventListener("click", () => {
        checkInputEmpty(edit_category, edit_title, edit_content);
        if(edit_category.value && edit_title.value && edit_content.value){
            edit(i_edit, pre_state);

            //close edit popup
            bgr_popup.classList.remove("bgr-popup");
            edit_todo.classList.remove("active");
        }
    })
});
