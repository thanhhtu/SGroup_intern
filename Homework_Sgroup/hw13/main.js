function Register(){
    let data = localStorage.getItem("user-login");
    let arrLogin = (JSON.parse(data) || []); //lấy data trong local storage, không có thì tọa mảng rống
    
    let username = document.getElementById("username-register").value;
    let password = document.getElementById("password-register").value;
    let loginInfor = {username, password};
    let count = 0;
    for(let i = 0; i < arrLogin.length; i++){
        if(username == arrLogin[i].username && password == arrLogin[i].password){
            count++;
        }
    }

    if(count == 0){ //nếu count = 0 thì không có tài khoản trong local storage
        arrLogin.push(loginInfor);
        localStorage.setItem("user-login", JSON.stringify(arrLogin)); //thêm dữ liệu mới vào
        window.location.href = "index2.html";
    }else{
        alert("Đã có tài khoản trong hệ thống!");
        window.location.href = "index2.html";
    }
}

document.getElementById("register").addEventListener("click", Register);