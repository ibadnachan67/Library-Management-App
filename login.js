let form =document.querySelector("form");
let username=document.querySelectorAll("input")[0];
let pass=document.querySelectorAll("input")[1];
let euser=document.querySelectorAll("span")[0];
let epass=document.querySelectorAll("span")[1];
let ebtn=document.querySelectorAll("span")[2];
let datafromStorage=JSON.parse(localStorage.getItem("QuizData"))

console.log(datafromStorage);

form.addEventListener("submit",(e)=>{
    
    euser.innerHTML=""
    epass.innerHTML=""
    ebtn.innerHTML=""



    //matchig login details 
    let matchedData=datafromStorage.find((e)=>{
        if ((e.phone==username.value||e.email==username.value||e.first==username.value)&&e.pass==pass.value) {
            return e;
        }
    })

    if (username.value==""&&pass.value=="") {
        euser.innerHTML="*enter the email or mobile number"
        epass.innerHTML="*enter your the password"
        e.preventDefault()
    }
    else if (username.value=="") {
        euser.innerHTML="*enter the email"
        e.preventDefault()
    }
    else if (pass.value=="") {
        epass.innerHTML="*enter the  password"
        e.preventDefault()
    }
    else if (matchedData) {
        alert("welcome to the page")
        localStorage.setItem("Quizresult",JSON.stringify(matchedData));
    }
    else{
        ebtn.innerHTML="match not found"
        e.preventDefault();
    }
})

let h3=document.querySelector("h3")

h3.addEventListener("click",(e)=>{
    if (h3.innerHTML=="show") {
        pass.type="text";
        h3.innerHTML="hide"
    }
    else{
        h3.innerHTML="show"
        pass.type="password"
    }
})