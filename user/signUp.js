let email_data=document.querySelector(".email");
let pass_data=document.querySelector(".password");
let name=document.querySelector(".name");
let contact1_data=document.querySelector(".contact1");
let contact2_data=document.querySelector(".contact2");

let signup=document.querySelector(".signup-button");
let close=document.querySelector(".close");
close.addEventListener("click",function(e){
    window.location.href = "signin.html";
})

signup.addEventListener("click",function(e){
    if(name.innerText ==""){
        alert("Enter Name Please!!");
        return;
    }
    else if(email_data.innerText ==""){
        alert("Enter Email Address!!");
        return;
    }
    else if(pass_data.value==""){
        alert("Enter Password!!");
        return;
    }
    else if(contact1_data.innerText==""){
        alert("Enter Contact1 Email!!");
        return;
    }
    else if(contact2_data.innerText==""){
        alert("Enter Contact2 Email!!");
        return;
    }
    else{
        let allTasks = localStorage.getItem("allTasks");
        if(allTasks == null) {
            let data = [{"name": name.innerText, "email": email_data.innerText, "password": pass_data.value,"contact1": contact1_data.innerText,"contact2": contact2_data.innerText}];
            localStorage.setItem("allTasks", JSON.stringify(data));
        } else {
            let data = JSON.parse(allTasks);
            data.push({"name": name.innerText, "email": email_data.innerText, "password": pass_data.value,"contact1": contact1_data.innerText,"contact2": contact2_data.innerText});
            localStorage.setItem("allTasks", JSON.stringify(data));
        }
        window.location.href = "signin.html";
    }
})

