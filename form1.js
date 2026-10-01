document.getElementById("form1").addEventListener("submit",function(event)
{
    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let email = document.getElementById("emails").value;
    let message=document.getElementById("msg");
   if(uname===' ')
   {
        message.innerHTML="Enter Your name";
   }
   if(pass===' ')
   {
       
    message.innerHTML="Enter Your Password";
    return;
   }
   if(pass.length<8)
   {
   message.innerHTML="Make password with 8 charecter";
    return;
   }
   let  specialCharPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!@#\$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]{8,}\$/;
   elseif(!specialCharPattern.test(pass))
   {
    message.innerHTML="Enter Strong password";
    return;
   }
   if(email ===' ')
   {
        alert("Enter a email address");
   }
   let emailregex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   elseif(!emailregex.test(email))
   {
    message.innerHTML="Please enter valid email address";
    return;
   }
    document.write("Name "+uname);
    document.write("Password "+password);
    document.write("Email "+email);
})