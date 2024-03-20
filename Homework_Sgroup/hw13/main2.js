function Login(){
    let data = localStorage.getItem("user-login");
    let arrLogin = JSON.parse(data); //lấy data trong local storage, không có thì tọa mảng rống
    
    let username = document.getElementById("username-login").value;
    let password = document.getElementById("password-login").value;
    
    let count = 0;
    for(let i = 0; i < arrLogin.length; i++){
        if(username == arrLogin[i].username && password == arrLogin[i].password){
            count++;
        }
    }

    if(count == 0){ //nếu count = 0 thì không có tài khoản trong local storage
        alert("Nhập sai username hoặc password!");
    }else{
        alert("Đăng nhập thành công!");
        window.location.href = "https://www.youtube.com/";
    }
}

document.getElementById("login").addEventListener("click", Login);