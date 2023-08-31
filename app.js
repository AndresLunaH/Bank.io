//
const loginForm= document.getElementById('login')
const loginButton= document.getElementById("login-form-submit")

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    //--Asignación de usuarios--//
const users = [
    {user:'mali', password:'1234', balance: 1000},
    {user:'gera', password: '1234', balance: 1500},
    {user:'maui', password:'1234', balance: 2500}
];
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    
    if (username === "u.user" && password === "u.password") {
        alert("Bienvenido.");
        location.reload();
    } else {
        alert('Prueba con otra contraseña');
    }
    
})