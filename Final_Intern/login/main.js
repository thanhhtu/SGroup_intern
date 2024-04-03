let emailInput = document.getElementById("email-input");
let pwdInput = document.getElementById("pwd-input");

function Login(){
    //border will change red when inputs empty
    if(emailInput.value == "" || emailInput.value == null){
        emailInput.style.border = "1.5px solid red";
    }

    if(pwdInput.value == "" || pwdInput.value == null){
        pwdInput.style.border = "1.5px solid red";  
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

function checkEntry(){
    emailInput.onblur = function(){
        if(emailInput.value != ""){
            emailInput.style.border = "1.5px solid green"; 
        }else{
            emailInput.style.borderColor = "rgb(232, 229, 229, 0.8)"; 
        }
    }
    
    pwdInput.onblur = function(){
        if(pwdInput.value != ""){
            pwdInput.style.border = "1.5px solid green"; 
        }else{
            pwdInput.style.borderColor = "rgb(232, 229, 229, 0.8)";
        }
    }

    // emailInput.onfocus = function(){
    //     emailInput.style.borderColor = "grey"; 
    // }

    // pwdInput.onfocus = function(){
    //     pwdInput.style.borderColor = "grey";
    // }
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btn-login").addEventListener("click", Login);
    checkEntry();
});