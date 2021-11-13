let email =document.getElementById("email");
let error =document.getElementById("mess1");
let paasw =document.getElementById("phh");
let paas =document.getElementById("pv");
let paas2 =document.getElementById("pv2");
let error2 =document.getElementById("mess2");
let error3 =document.getElementById("mess3");
let error4 =document.getElementById("mess4");
function validate1(){
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if(regexp.test(email.value)){
        error.innerHTML=" ";
        return true;
    }
    else{
        if(email.value==""){
            
            error.innerHTML=" ";
        }
        else{ 
        error.innerHTML="Invalid Email-id";
        error.style.color="red";
        error.style.fontWeight="bold";
        return false;
        }
       
    }

    
}
function validate2(){
    var phhh = /^([0-9]{3})[\-. ]?([0-9]{3})[\-. ]?([0-9]{4})$/;
    if(phhh.test(paasw.value)){
        error2.innerHTML=" ";
        return true;
    }
    else{
        if(paasw.value==""){
            
            error2.innerHTML=" ";
        }
        else{ 
        error2.innerHTML="Invalid Phone number";
        error2.style.color="red";
        error2.style.fontWeight="bold";
        return false;
        }
       
    }
}
function validate3(){
    var kkk=/^([A-Za-z0-9]+)$/;
    if(paas.value.length>1 && paas.value.length<8){
       error3.innerHTML="Use 8 characters or more for your password";
       error3.style.color="red";
       return false;
    }
    else if(!(kkk.test(paas.value))){
        error3.innerHTML="<b>Hint</b>: Use atleast one (lowercase,uppercase & number) and minimum 8 chracters,<spam style='color:red'>No special characters are allowed.</spam>";
        error3.style.fontSize="10px";
        error3.style.color="wheat";

        return false;
    }
    else{
        error3.innerHTML=" ";
        return true;
    }

}
function validate4(){
    if(paas.value!=paas2.value){
       error4.innerHTML="Repeat the same password";
       error4.style.color="red";
       return false;
    }
    else{
        error4.innerHTML=" ";
        return true; 
    }
}
function validate(){
    let k=validate1();
    let n=validate2();
    let m=validate3();
    let o=validate4();
    console.log(k,n,m,o);
    return (k&&n&&m&&o);
}  
function isGood(password) {
    var password_strength = document.getElementById("password-text");

    //TextBox left blank.
    if (password.length == 0) {
      password_strength.innerHTML = "";
      return;
    }
    var passscr = 0;

    if(/[a-z]/.test(password)){
        passscr+=25;
    }
    if(/[A-Z]/.test(password)){
        passscr+=25;
    }
    if(/[\d]/.test(password)){
        passscr+=25;
    }
    if(password.length>8){
        passscr+=25;
    }
    var strength = "";
    if(passscr>=100){
        strength = "<small class='progress-bar bg-success' style='width: 100%; color:black; font-weight:bold;'>Strong</small>";
         
    }
    else if(passscr>=50){
        strength = "<small class='progress-bar bg-warning' style='width: 60%; color:black; font-weight:bold;'>Medium</small>";
        
    }
    else{
        strength = "<small class='progress-bar bg-danger' style='width: 40%; color:black; font-weight:bold;'>Weak</small>";
    }
    password_strength.innerHTML = strength;

  }
  function myFunction() {
    var x = document.getElementById("pv");
    if (x.type === "password") {
      x.type = "text";
    } 
    else {
      x.type = "password";
    }
  }