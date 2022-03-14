var msg=document.getElementById("msg");
var button=document.getElementById("button");


function change_page(){
  window.location.replace("booking.html");
}


button.onclick=function()
{
  
  var email= document.getElementById("email").value;
  var password= document.getElementById("password").value;
  
  if(email=="example@gmail.com" && password=="password"){
    msg.innerHTML="Login Successful";
    msg.style.backgroundColor="green";
    msg.style.visibility="visible";
    setTimeout(change_page,2000);
  
  }
  else{
    msg.innerHTML="invalid info";
    msg.style.backgroundColor="red";
    msg.style.visibility="visible";
  }

}