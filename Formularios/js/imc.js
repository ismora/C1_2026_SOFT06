let btnCalcularIMC = document.getElementById("btnCalcularIMC");

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

calcularIMC(80, 1.7);
calcularIMC(60, 1.8);

// Función con datos de salida (valor de retorno)
function calcularIMCRetorno(){
    console.log("Evento de clic");
    /*
    let imc = peso / Math.pow(estatura, 2);
    return imc.toFixed(2);
    */
}


// Escuchador de eventos
btnCalcularIMC.addEventListener("click", calcularIMCRetorno);