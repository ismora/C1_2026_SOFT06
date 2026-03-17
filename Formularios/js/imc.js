let btnCalcularIMC = document.getElementById("btnCalcularIMC");

let txtPeso = document.getElementById("txtPeso"); 
let txtEstatura = document.getElementById("txtEstatura");

let parrafoResultado = document.querySelector("#sctResultadoIMC p");

// Función: Bloque de código reutilizable que realiza una tarea específica.

/* Crear una función para calcular el IMC con la siguiente fórmula:
IMC = peso / estatura^2
Mostrar en la consola un mensaje que diga "El IMC es: --"
Datos de prueba en kg       m       IMC
                    80      1.7     27.7
                    60      1.8     18.5
*/

function calcularIMC(peso, estatura){
    //               (estatura*estatura)
    let imc = peso / Math.pow(estatura, 2);
    console.log("El IMC es: " + imc.toFixed(2)); // Definir la cantidad de decimales con toFixed()
}


// Función con datos de salida (valor de retorno)
function calcularIMCRetorno(){
    let peso = txtPeso.value;
    let estatura = txtEstatura.value;
    
    let imc = peso / Math.pow(estatura, 2);
    
    if (validarCamposVacios() === false){
        parrafoResultado.innerText = imc.toFixed(2);
    }
    else{
        parrafoResultado.innerText = "No se puede calcular el IMC: Por favor revise los campos resaltados";
    }

}

function validarCamposVacios(){
    let error = false; // Por defecto que no existen errores 
    if (txtPeso.value === ""){
        txtPeso.classList.add("input-error");
        error = true;
    }
    else{
        txtPeso.classList.remove("input-error")
    }
    if (txtEstatura.value === ""){
        txtEstatura.classList.add("input-error");
        error = true;
    }
    else{
        txtEstatura.classList.remove("input-error")
    }
    return error;
}


// Escuchador de eventos
btnCalcularIMC.addEventListener("click", calcularIMCRetorno);