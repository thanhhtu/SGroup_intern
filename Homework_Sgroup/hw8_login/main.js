let login_mode = document.getElementById("login-mode");
let register_mode = document.getElementById("register-mode");

let login_form = document.getElementById("login-form");
let register_form = document.getElementById("register-form");

//chuyển sang login mode khi nhấn vào dòng chữ login
login_mode.onclick = function(e){
    //đổi gạch chân
    register_mode.style.borderBottom = "none";
    this.style.borderBottom = "2px solid #E0AED0";
    
    e.stopPropagation(); 
    //chuyển tử form register sang form login
    login_form.style.display = "block";
    register_form.style.display = "none";
}

// chuyển sang register mode khi nhấn vào dòng chữ register
register_mode.onclick = function(e){
    //đổi gạch chân
    login_mode.style.borderBottom = "none";
    register_mode.style.borderBottom = "2px solid #E0AED0";

    e.stopPropagation();
    //chuyển tử form login sang form register
    register_form.style.display = "block"; 
    login_form.style.display = "none";
}

function checkEmail(email){

}

function checkPassword(password){
    
}

function Login(){
    let data = localStorage.getItem("user-login");
    let arrLogin = JSON.parse(data); //lấy data trong local storage, không rỗng vì chắc chắn đã có từ đăng kí
    
    let username = document.getElementById("username-login-input").value;
    let password = document.getElementById("password-login-input").value;
    

    let count = 0;
    for(let i = 0; i < arrLogin.length; i++){
        if(username == arrLogin[i].username && password == arrLogin[i].password){
            count++;
            break;
        }
    }

    if(username == null || username == "" || password == undefined || password ==""){
        alert("Username and password input can not be empty!");
    }else{
        if(count == 0){ //nếu count = 0 tức là không có tài khoản trong local storage
            alert("Username or password is not correct!");
        }else{
            alert("Log in successfully!");
            window.location.href = "index1.html";
        }
        return false;
    }
}

function Register(){
    let data = localStorage.getItem("user-login");
    let arrLogin = JSON.parse(data) || []; //lấy data trong local storage, không có thì cho mảng rống
    
    let email = document.getElementById("email-register-input").value;
    let username = document.getElementById("username-register-input").value;
    let password = document.getElementById("password-register-input").value;
    let infor = {email, username, password};

    let count = 0; //kiểm tra coi có trùng username k (username là id của mỗi người)
    for(let i = 0; i < arrLogin.length; i++){
        if(username == arrLogin[i].username){
            count++;
            break;
        }
    }

    if(email == null || email == "" || username == null || username == "" || password == undefined || password ==""){
        alert("Email and username and password input can not be empty!");
    }else{
        if(count == 0){
            arrLogin.push(infor); //chưa có tài khoản thì thêm vào
            localStorage.setItem("user-login", JSON.stringify(arrLogin)); //thêm dữ liệu mới vào
            alert("Register successfully");
        }else{
            alert("This username has already been registered in this system!");
        }
        return false;
    } 
}

document.getElementById("login-btn").onclick = Login;
document.getElementById("register-btn").onclick = Register;