

function validation()                                    
{ 
    var name = document.forms["RegForm"]["name"];               
    var email = document.forms["RegForm"]["email"];     
    var what =  document.forms["RegForm"]["subject"];  
    var password = document.forms["RegForm"]["password"];  
    
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
    
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
   
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
  
   
    return true; 
}