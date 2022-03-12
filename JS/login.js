$(document).ready(function(){
    $("#submit").click(function(){
        var usn = $("#username").val();
        var psd = $("#password").val();
        if(usn == "") 0//alert("username can't be empty!")
        else if(psd == "") 0//alert("password can't be empty!")
        else if(usn == "admin" && psd == "admin")
        {
            alert("admin")
        }
        else
        {
            alert("Hello!")
        }
    });
});