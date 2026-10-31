

HTMLElement

/**
 * @type {HTMLInputElement} nombre
 */
const inputNombre = document.getElementById("username");

/**
 * @type {HTMLButtonElement} ingresar
 */
const botonIngresar = document.getElementById("botonIngresar");

const ingresarApp = () => {
    const valor = inputNombre.value.trim();

    if(valor.length >= 3 && valor.length < 22 && /^[A-Za-z]+$/.test(valor))
    {
        
        window.location.href = "http://127.0.0.1:5500/TPintegrador/frontend/src/Usuario/PantallaProductos.html";
        
    }
    else{
        console.log("Acceso denegado!");
    }
};

botonIngresar.onclick = ingresarApp;

