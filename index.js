function verify(){
    const emailCheck = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,8})(.[a-z]{2,6}?)$/;
    const usernameCheck = /^[a-zA-Z0-9\_\.]{5,15}/;
    const passwordCheck =/^[a-zA-Z0-9\-\_\.\-]{7,20}/;

    const useremail = document.getElementById("logEmail").value;
    const username = document.getElementById("logName").value;
    const userpassword = document.getElementById("logPassword").value;

    if(emailCheck.test(useremail)){
        document.getElementById("logEmail").style.border="2px green solid";
    }else{
        document.getElementById("logEmail").style.border="2px red solid";
        document.getElementById("errEmail").style.visibility="visible"
    }
    if(usernameCheck.test(username)){
        document.getElementById("logName").style.border="2px green solid";
    }else{
        document.getElementById("logName").style.border="2px red solid";
        document.getElementById("errName").style.visibility="visible"
    }
    if(passwordCheck.test(userpassword)){
        document.getElementById("logPassword").style.border="2px green solid";
    }else{
        document.getElementById("logPassword").style.border="2px red solid";
        document.getElementById("errPassword").style.visibility="visible"
    }
}