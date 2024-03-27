async function login(){
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    
    const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST", //có 2 loại là get và post -> get dùng để lấy data ra, post là gửi về để xác nhận
        headers: {'Content-Type': 'application/json'}, //content-type: kiểu dữ liệu gửi về, application/json gửi dạng này nè
        body: JSON.stringify({
            username, //giống với username: username -> vì cùng tên nên có thể viết gọn như vậy
            password,
        })
    });

    const data = await res.json();
    localStorage.setItem("token", data.token);
    // if(username == data.username && password == data.password){
    //     redirectToNewPage();
    // }
    redirectToNewPage();
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("button").addEventListener("click", login);
});

function redirectToNewPage(){
    const token = localStorage.getItem("token");
    if(token){
        window.location.href = "trans.html";
    }else{
        console.log("Token not found");
    }
}