// Seleccionamos los elementos
const inputCelular = document.querySelector(".input-text");
const btnRecuperar = document.querySelectorAll(".btn")[0];
const btnValidar = document.querySelectorAll(".btn")[1];
const inputsCodigo = document.querySelectorAll(".codigo-input");

// Variable donde guardaremos los 5 dígitos generados
let codigoGenerado = "";

// ------------------------
// VALIDACIÓN DEL CELULAR
// ------------------------
btnRecuperar.addEventListener("click", function (e) {
    e.preventDefault();

    const numero = inputCelular.value.trim();

    // Validar 9 dígitos
    if (!/^\d{9}$/.test(numero)) {
        alert("El número de celular debe tener exactamente 9 dígitos.");
        return;
    }

    // Generar código de 5 dígitos aleatorios
    codigoGenerado = "";
    for (let i = 0; i < 5; i++) {
        codigoGenerado += Math.floor(Math.random() * 10);
    }

    // Mostrar el código generado en alerta
    alert("Código generado: " + codigoGenerado);

    console.log("Código generado (debug): ", codigoGenerado);
    alert("Se ha enviado un código de 5 dígitos a su número de celular.");
});

// ------------------------
// VALIDAR CÓDIGO INGRESADO
// ------------------------
btnValidar.addEventListener("click", function (e) {
    e.preventDefault();

    // Construir código ingresado
    let codigoIngresado = "";
    inputsCodigo.forEach(input => {
        codigoIngresado += input.value.trim();
    });

    // Verificar si faltan campos
    if (codigoIngresado.length < 5) {
        alert("Debe ingresar los 5 dígitos del código.");
        return;
    }

    // Comparar códigos
    if (codigoIngresado === codigoGenerado) {
        alert("Su contraseña ha sido enviada a su número de celular.");
    } else {
        alert("El código ingresado es incorrecto.");
    }
});

// ------------------------
// AVANZAR AUTOMÁTICAMENTE ENTRE CUADROS
// ------------------------
inputsCodigo.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (input.value.length === 1 && index < inputsCodigo.length - 1) {
            inputsCodigo[index + 1].focus();
        }
    });
});
