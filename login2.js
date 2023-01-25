function validate()
{
    var uname=document.getElementById("uname").value;
    var psw=document.getElementById("psw").value; 
    if(uname=="admin"&& psw=="user")
      {
        window.open("index.html","_self");
      }   
    else
    {
        alert("Login failed !! Invalid User Name or Password");
    }
}