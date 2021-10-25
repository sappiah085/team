function verifyPassword() {
    const passwordCheck = /^[a-zA-Z0-9\-\_\.\-]{7,50}$/;
    const createpassword = document.getElementById("userPassword").value;

    if(passwordCheck.test(createpassword)){
        document.getElementById("userPassword").style.border="2px green solid";
        document.getElementById("errPassword").style.visibility="hidden"

    }else{
        document.getElementById("userPassword").style.border="2px red solid";
        document.getElementById("errPassword").style.visibility="visible"
    }
}
function backMsg() {
    const backmessage = "Go to previous form requirement";
    return backmessage;
}
function verifyEmail() {
    const emailCheck = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,8})(.[a-z]{2,6}?)$/;
    const createEmail = document.getElementById("userEmail").value;

    if(emailCheck.test(createEmail)){
        document.getElementById("userEmail").style.border="2px green solid";
        document.getElementById("errEmail").style.visibility="hidden";
        document.getElementById("a3").style.display ="block";
        document.getElementById("a2").style.display ="none";
    }else{
        document.getElementById("userEmail").style.border="2px red solid";
        document.getElementById("errEmail").style.visibility="visible"
    }
}
function back2() {
    document.getElementById("a3").style.display ="none";
    document.getElementById("a2").style.display ="block";
}


function verifyName() {
    const  usernameCheck= /^[a-zA-Z0-9\_\.]{5,15}$/;
    const  createName = document.getElementById("userName").value;

    if(usernameCheck.test(createName)){
        document.getElementById("userName").style.border="2px green solid";
        document.getElementById("errName").style.visibility="hidden";
        document.getElementById("a2").style.display ="block";
        document.getElementById("a1").style.display ="none";


    }else{
        document.getElementById("userName").style.border="2px red solid";
        document.getElementById("errName").style.visibility="visible"
    }
}
function back1() {
    document.getElementById("a2").style.display ="none";
    document.getElementById("a1").style.display ="block";
}