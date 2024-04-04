let email_input = document.getElementById("email-input");
let pwd_input = document.getElementById("pwd-input");

function Login(){
    //border will change red when inputs are empty
    if(email_input.value == "" || email_input.value == null){
        email_input.style.border = "1.5px solid red";
    }

    if(pwd_input.value == "" || pwd_input.value == null){
        pwd_input.style.border = "1.5px solid red";  
    }

    //fetch dummy api
    //correct_login@example.com
    //C0rr3Ct_P@55w0rd
    let infor = {
        "login": email_input.value,
        "password": pwd_input.value
    };
    
    if(email_input.value != "" && email_input.value != ""){
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
                    if(email_input.value == "" || pwd_input.value == ""){
                        return false;
                    }else{
                        alert("Email or passwork is not correct!");
                    }
                }
            })
    }
}

function checkEntry(){ 
    email_input.onblur = function(){
        if(email_input.value != ""){
            email_input.style.border = "1.5px solid green"; 
        }else{
            email_input.style.borderColor = "rgba(217, 217, 217, 1)"; 
        }
    }
    
    pwd_input.onblur = function(){
        if(pwd_input.value != ""){
            pwd_input.style.border = "1.5px solid green"; 
        }else{
            pwd_input.style.borderColor = "rgba(217, 217, 217, 1)";
        }
    }
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btn-login").addEventListener("click", Login);
    checkEntry();
});