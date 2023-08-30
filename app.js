//-- Validación--//
const loginForm = document.getElementById('login');
loginForm.addEventListener('submit', validateLoginForm);
function validateLoginForm(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario');
    const password = document.getElementById('password');

    // Validadar usuario
    if (!validateUsuario(usuario.value)) {
        alert('Agregar usuario correcto.');
        return;
    }

    // Validaar password
    if (!validatePassword(password.value)) {
        alert('Agrega un PIN valido.');
        return;
    }

    // If all validations pass, submit the form
    alert('Login successful!');
}

function validateUsuario(usuario) {
    // Usar un usuario comun
    const usuarioRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return usuarioRegex.test(usuario);
}

function validatePassword(password) {
    // Hay que validar las reglas minimas correctas
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    return (
        password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber
    );
}
//--Asignacion de clase--//
class Usuario{
    constructor(id, nombre, saldo, password){
        (this.id=id),
        (this. nombre= nombre);
        (this, saldo= saldo);
        (this, password= password);
    }
}
//--Asignación de usuarios--//
let usuarios=[
    new Usuario(
        id=1,
        nombre= "Mali",
        saldo= 290,
        contraseña= 1234
    ),
    new Usuario(
        id=2,
        nombre= "Gera",
        saldo= 290,
        password= 54321
        ),
    new Usuario(
        id=3 ,
        nombre="Maui",
        saldo= 67,
        password=7654 
    )
]
