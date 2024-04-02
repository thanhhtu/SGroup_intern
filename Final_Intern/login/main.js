let emailInput = document.getElementById("email-input");
let pwdInput = document.getElementById("pwd-input");

function check(){
    //check empty entry
    if(emailInput.value == "" || emailInput.value == null){
        emailInput.style.borderColor = "#D04848";    
    }

    if(pwdInput.value == "" || pwdInput.value == null){
        pwdInput.style.borderColor = "#D04848";  
    }

    //fetch dummy api
    //correct_login@example.com
    //C0rr3Ct_P@55w0rd
    let infor = {
        "login": emailInput.value,
        "password": pwdInput.value
    };
    
    if(emailInput.value != "" && pwdInput.value != ""){
        const url = "https://recruitment-api.pyt1.stg.jmr.pl/login";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(infor),
        })
            .then(response => response.json())
            .then(data => {
                if(data.message === "Hello 😉! How are you?" &&  data.status === "ok"){
                    alert("Login successfully!")
                    window.location.href = "../work_management/index.html"
                }else{
                    alert("Email or passwork is not correct!");
                }
            })
    }
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("login-btn").addEventListener("click", check);
    emailInput.onchange = function(){
        if(emailInput.value != ""){
            emailInput.style.borderColor = "green"; 
        }
    }
    
    pwdInput.onchange = function(){
        if(pwdInput.value != ""){
            pwdInput.style.borderColor = "green"; 
        }
    }
});