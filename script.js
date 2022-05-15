
let submitBtn = document.getElementById("submit-btn");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let signup = document.getElementsByClassName("signup-div");
let firstname = document.getElementById("firstname");
submitForm= ()=>{
    if(password.value === confirmPassword.value){
        alert("you have successfully signed up");
        signup[0].innerHTML="<h1>Thank You "+firstname.value+"!</h1><br><p>You have successfully signed up</p>";
    }else{
        alert("Password and Confirm password doesn't match");
    }
}
function passwordVisibility(password) {
    var x = document.getElementById(password);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

