let menuItems = document.getElementById("MenuItems");
menuItems.style.maxHeight = "0px";

const menuToggle = () => {
    menuItems.style.maxHeight = (menuItems.style.maxHeight == "0px") 
                                ? "200px" : "0px";
}

let loginForm = document.getElementById("loginForm");
let registerForm = document.getElementById("regForm");
let indicator = document.getElementById("Indicator");

const register = () => {
    registerForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}

const login = () => {
    indicator.style.transform = "translateX(0px)";
    registerForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
}
const check1 = (form) => {
    if(check_name(form.name.value) && check_password(form.password.value)){
        alert("Login Successfull");
    }
    else{
        alert("Try again");
    }
}
const check2 = (form) => {
    if(check_Email(form.e-mail.value) && check_name(form.name.value) && check_password(form.password.value)){
        alert("Registration Successfull");
    }
    else{
        alert("Try again");
    }
}
const check_name = (name) =>{
    if(name === null){
        alert("Please fill all fields");
        return false;
    }
    let regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if(regex.test(name)){
        return true;
    }
    else{
        alert("Name invalid");
        return false;
    }
}
const check_password = (password) => {
    if(password === null){
        alert("Please fill all fields");
        return false;
    }
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(regex.test(password)){
        return true;
    }
    else{
        alert("Password invalid");
        return false;
    }
}
const check_Email = (mail) => {
    if(mail === null){
        alert("Please fill all fields");
        return false;
    }
    let regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if(regex.test(mail)){
      return true;
    }
    else{
      alert("This is not a valid email address");
      return false;
    }
}