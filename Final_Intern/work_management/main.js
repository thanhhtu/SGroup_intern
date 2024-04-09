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

document.addEventListener("DOMContentLoaded", function(){
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
});

///////////////////////////////////////////////////////////////////////
//popup input
let category_note = document.querySelector(".category-note");
let title_note = document.querySelector(".title-note");
let content_note = document.querySelector(".content-note");
let currentTime = document.querySelector(".time");

//set todo array from local storage
let todo_list = document.querySelector(".todo-list")
let count_todo = document.querySelector(".count-todo");

let arr_todo = [];
let data_todo = localStorage.getItem("todo-list");
let render_todo_list;
if(data_todo){
    arr_todo = JSON.parse(data_todo);

    render_todo_list = arr_todo.map(renderTodo);
    todo_list.innerHTML = render_todo_list.join(" ");

    count_todo.innerHTML = arr_todo.length;
}

//set doing array from local storage
let doing_list = document.querySelector(".doing-list")
let count_doing = document.querySelector(".count-doing");

let arr_doing = [];
let data_doing = localStorage.getItem("doing-list");
let render_doing_list;
if(data_doing){
    arr_doing = JSON.parse(data_doing);

    render_doing_list = arr_doing.map(renderDoing);
    doing_list.innerHTML = render_doing_list.join(" ");

    count_doing.innerHTML = arr_doing.length;
}

//set completed array from local storage
let completed_list = document.querySelector(".completed-list")
let count_completed = document.querySelector(".count-completed");

let arr_completed = [];
let data_completed = localStorage.getItem("completed-list");
let render_completed_list;
if(data_completed){
    arr_completed = JSON.parse(data_completed);

    render_completed_list = arr_completed.map(renderCompleted);
    completed_list.innerHTML = render_completed_list.join(" ");

    count_completed.innerHTML = arr_completed.length;
}

//set blocked array from local storage
let blocked_list = document.querySelector(".blocked-list")
let count_blocked = document.querySelector(".count-blocked");

let arr_blocked = [];
let data_blocked = localStorage.getItem("blocked-list");
let render_blocked_list;
if(data_blocked){
    arr_blocked = JSON.parse(data_blocked);

    render_blocked_list = arr_blocked.map(renderBlocked);
    blocked_list.innerHTML = render_blocked_list.join(" ");

    count_blocked.innerHTML = arr_blocked.length;
}


//render html
function renderTodo(value, index){
    return `
        <div class="note">
            <div class="icon-note">
                <img src="../image/editIcon.png" alt="icon edit" class="icon-edit" onclick="editTodo(${index}, 'todo')">
                <img src="../image/deleteIcon.png" alt="icon delete" class="icon-delete" onclick="delTodo(${index}, 'todo')">
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
function renderDoing(value, index){
    return `
        <div class="note">
            <div class="icon-note">
                <img src="../image/editIcon.png" alt="icon edit" class="icon-edit" onclick="editTodo(${index}, 'doing')">
                <img src="../image/deleteIcon.png" alt="icon delete" class="icon-delete" onclick="delTodo(${index}, 'doing')">
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
function renderCompleted(value, index){
    return `
        <div class="note">
            <div class="icon-note">
                <img src="../image/editIcon.png" alt="icon edit" class="icon-edit" onclick="editTodo(${index}, 'completed')">
                <img src="../image/deleteIcon.png" alt="icon delete" class="icon-delete" onclick="delTodo(${index}, 'completed')">
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
function renderBlocked(value, index){
    return `
        <div class="note">
            <div class="icon-note">
                <img src="../image/editIcon.png" alt="icon edit" class="icon-edit" onclick="editTodo(${index}, 'blocked')">
                <img src="../image/deleteIcon.png" alt="icon delete" class="icon-delete" onclick="delTodo(${index}, 'blocked')">
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

        //set todo tick
        todo_tick.checked = true;
    
        //render to html
        render_todo_list = arr_todo.map(renderTodo);
        todo_list.innerHTML = render_todo_list.join(" ");
    
        //after submit, the create-todo popup closes
        create_todo.classList.remove("active");
        bgr_popup.classList.remove("bgr-popup");
    }
}

//radio button
let todo_tick = document.getElementById("todo-tick");
let doing_tick = document.getElementById("doing-tick");
let completed_tick = document.getElementById("completed-tick");
let blocked_tick = document.getElementById("blocked-tick");

function setTick(column){
    if(column === "todo"){
        todo_tick.checked = true;
    }
    if(column === "doing"){
        doing_tick.checked = true;
    }
    if(column === "completed"){
        completed_tick.checked = true;
    }
    if(column === "blocked"){
        blocked_tick.checked = true;
    }
}

//delete todo task
function delTodo(index_del, column){
    setTick(column);

    if(todo_tick.checked){
        arr_todo.splice(index_del, 1);

        localStorage.setItem("todo-list", JSON.stringify(arr_todo));
        count_todo.innerHTML = arr_todo.length;
        render_todo_list = arr_todo.map(renderTodo);
        todo_list.innerHTML = render_todo_list.join(" ");
    }
    
    if(doing_tick.checked){
        arr_doing.splice(index_del, 1);

        localStorage.setItem("doing-list", JSON.stringify(arr_doing));
        count_doing.innerHTML = arr_doing.length;
        render_doing_list = arr_doing.map(renderDoing);
        doing_list.innerHTML = render_doing_list.join(" ");
    }

    if(completed_tick.checked){
        arr_completed.splice(index_del, 1);

        localStorage.setItem("completed-list", JSON.stringify(arr_completed));
        count_completed.innerHTML = arr_completed.length;
        render_completed_list = arr_completed.map(renderCompleted);
        completed_list.innerHTML = render_completed_list.join(" ");
    }

    if(blocked_tick.checked){
        arr_blocked.splice(index_del, 1);

        localStorage.setItem("blocked-list", JSON.stringify(arr_blocked));
        count_blocked.innerHTML = arr_blocked.length;
        render_blocked_list = arr_blocked.map(renderBlocked);
        blocked_list.innerHTML = render_blocked_list.join(" ");
    }
}



//edit todo task
function editTodo(index_edit, column){
    //open
    bgr_popup.classList.add("bgr-popup");
    edit_todo.classList.add("active");

    //close
    exit_edit.addEventListener("click", () => {
        bgr_popup.classList.remove("bgr-popup");
        edit_todo.classList.remove("active");
    });
    bgr_popup.addEventListener('click', () => {
        bgr_popup.classList.remove("bgr-popup");
        edit_todo.classList.remove("active");
    });
    
    setTick(column);

    if(edit_todo.classList.contains("active")){
        edit_category.style.borderColor = "rgba(217, 217, 217, 1)";
        edit_title.style.borderColor = "rgba(217, 217, 217, 1)";
        edit_content.style.borderColor = "rgba(217, 217, 217, 1)";
        
        let x, y, z;
        if(todo_tick.checked){
            x = arr_todo[index_edit].category;
            y = arr_todo[index_edit].title;
            z = arr_todo[index_edit].content;
        }else if(doing_tick.checked){
            x = arr_doing[index_edit].category;
            y = arr_doing[index_edit].title;
            z = arr_doing[index_edit].content;
        }else if(completed_tick.checked){
            x = arr_completed[index_edit].category;
            y = arr_completed[index_edit].title;
            z = arr_completed[index_edit].content;
        }else if(blocked_tick.checked){
            x = arr_blocked[index_edit].category;
            y = arr_blocked[index_edit].title;
            z = arr_blocked[index_edit].content;
        }

        edit_category.value = x;
        edit_title.value = y;
        edit_content.value = z;

        edit_btn.addEventListener("click", function handleEditBtnClick() {
            checkInputNotEmpty(edit_category, edit_title, edit_content);
            // edit(index_edit);
            abcde(index_edit, column);

            //when the event is fired, remove the event from edit_btn
            edit_btn.removeEventListener("click", handleEditBtnClick);
            console.log("okeo");
        });
    }
}


function edit(index_edit){
    checkInputEmpty(edit_category, edit_title, edit_content);

    if(edit_category.value && edit_title.value && edit_content.value){
        let infor = {
            category: edit_category.value, 
            title: edit_title.value, 
            content: edit_content.value, 
            time: getCurrentTime()
        };
        
        arr_todo.splice(index_edit, 1, infor);

        localStorage.setItem("todo-list", JSON.stringify(arr_todo));
        render_todo_list = arr_todo.map(renderTodo);
        todo_list.innerHTML = render_todo_list.join(" ");


        //close
        bgr_popup.classList.remove("bgr-popup");
        edit_todo.classList.remove("active");
    }
}

function abcde(index_edit, column){
    checkInputEmpty(edit_category, edit_title, edit_content);
    let infor = {
        category: edit_category.value, 
        title: edit_title.value, 
        content: edit_content.value, 
        time: getCurrentTime()
    };

    if(edit_category.value && edit_title.value && edit_content.value){
        if(column === "todo"){
            arr_todo.splice(index_edit, 1);
    
            localStorage.setItem("todo-list", JSON.stringify(arr_todo));
            count_todo.innerHTML = arr_todo.length;
            render_todo_list = arr_todo.map(renderDoing);
            todo_list.innerHTML = render_todo_list.join(" ");
        }
        if(column === "doing"){
            arr_doing.splice(index_edit, 1);
    
            localStorage.setItem("doing-list", JSON.stringify(arr_doing));        
            count_doing.innerHTML = arr_doing.length;        
            render_doing_list = arr_doing.map(renderDoing);
            doing_list.innerHTML = render_doing_list.join(" ");
        }
        if(column === "completed"){
            arr_completed.splice(index_edit, 1);
    
            localStorage.setItem("completed-list", JSON.stringify(arr_completed));        
            count_completed.innerHTML = arr_completed.length;        
            render_completed_list = arr_completed.map(renderCompleted);
            completed_list.innerHTML = render_completed_list.join(" ");
        }
        if(column === "blocked"){
            arr_blocked.splice(index_edit, 1);
    
            localStorage.setItem("blocked-list", JSON.stringify(arr_blocked));        
            count_blocked.innerHTML = arr_blocked.length;        
            render_blocked_list = arr_blocked.map(renderBlocked);
            blocked_list.innerHTML = render_blocked_list.join(" ");
        }

        if(todo_tick.checked){
            arr_todo.push(infor);
            localStorage.setItem("todo-list", JSON.stringify(arr_todo));
            count_todo.innerHTML = arr_todo.length;
            render_todo_list = arr_todo.map(renderDoing);
            todo_list.innerHTML = render_todo_list.join(" ");
        }
 
        if(doing_tick.checked){
            arr_doing.push(infor);
            localStorage.setItem("doing-list", JSON.stringify(arr_doing));        
            count_doing.innerHTML = arr_doing.length;        
            render_doing_list = arr_doing.map(renderDoing);
            doing_list.innerHTML = render_doing_list.join(" ");
        }
        
        if(completed_tick.checked){    
            arr_completed.push(infor);
            localStorage.setItem("completed-list", JSON.stringify(arr_completed));        
            count_completed.innerHTML = arr_completed.length;        
            render_completed_list = arr_completed.map(renderCompleted);
            completed_list.innerHTML = render_completed_list.join(" ");
        }
        
        if(blocked_tick.checked){    
            arr_blocked.push(infor);
            localStorage.setItem("blocked-list", JSON.stringify(arr_blocked));        
            count_blocked.innerHTML = arr_blocked.length;        
            render_blocked_list = arr_blocked.map(renderBlocked);
            blocked_list.innerHTML = render_blocked_list.join(" ");
        }

        //close
        bgr_popup.classList.remove("bgr-popup");
        edit_todo.classList.remove("active");
    }
    
}

