
  

data = JSON.parse(localStorage.getItem("data"));
console.log("data",data);
if(location.href.includes("profile.html")){
document.querySelector(".fname").innerText= "Full Name: "+ data.fname;
document.querySelector(".email").innerText= "Email: "+ data.email;
document.querySelector(".password").innerText= "Password: "+ data.password;
}
      
  