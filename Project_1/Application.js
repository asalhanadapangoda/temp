document.getElementById("submit").addEventListener("click",
    function(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let age = document.getElementById('age').value;
    let Email = document.getElementById('email').value;
    let username = document.getElementById('userName').value;
    let password = document.getElementById('password').value;

    if(fname===""){ 
        alert("Please Enter name!"); 
        return; 
    } 

    if(Email===""){ 
        alert("Please Enter email!"); 
        return; 
    }else{
        console.log("ok");
    }

    alert("sucessful");
    console.log(fname,lname,age,Email,username,password);
    alert("sucessful");
})