if((window.location.href).includes('index.html')){
let form = document.getElementById("my-form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = {}
    let message =''
    let fname = document.querySelector("#fname").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    data.fname = fname;
    data.email = email;
    data.password = password;

    console.log("detail ",data);
    if(fname=='' || email == '' || password ==''){
        message = "Error: All the fields are mandatory";
        document.getElementById("message").style.color = "red"
        
    }
    else{ 
        message = "Successfully Signed Up!"
        localStorage.setItem("data", JSON.stringify(data));
        document.getElementById("message").style.color = "green";
        form.reset();
    }
    document.getElementById("message").innerText = message;
    
})
}
else if(location.href.includes("profile.html") && !localStorage.getItem("data"))
        location.href = "./index.html"

function profileView(){
    console.log(window.location.href);
    if(localStorage.getItem("data")){    
             
        window.location.href="./profile.html"
          
    }
    else
    {
        alert("Oops! There is no Profile to show");
        location.assign("./index.html");
    }
}

function logout(){
    localStorage.removeItem("data");
    location.assign("./index.html");
    // location="/index.html"
}

