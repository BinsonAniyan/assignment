let email =document.getElementById("email");
let error =document.getElementById("mess");
function validate(){
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)(\.)([a-z]{2,3})(\.[a-z]{2,3})?$/;
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
        return false;
        }
       
    }

}