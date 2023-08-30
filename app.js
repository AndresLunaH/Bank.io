window.onload= function(){
document.getElementById('swithToReg').onclick=switchToReg;
document.getElementById('swithToLogin').onclick=switchToLogin;

//--Hacer cambio a registrarse--//
    function switchToReg(){
        document.getElementById('signin').style = "display:inline-block";
        document.getElementById('login').style = "display:none";
    }
    function switchToLogin(){
        document.getElementById('signin').style = "display:none";
        document.getElementById('login').style = "display:inline-block";
    }

}