let btnConvertirTemperatura = document.getElementById("btnConvertirTemperatura");

let txtTemperatura = document.getElementById("txtTemperatura"); 
let txtEscala = document.getElementById("txtEscala");

let parrafoResultado = document.querySelector("#sctResultado p");

// || : or
// && : and

/*
Ejercicio: Crear una función para convertir temperaturas entre Celsius y Fahrenheit.

Diseñar una función llamada convertirTemperatura que convierta una temperatura entre grados Celsius (°C) y Fahrenheit (°F) según la unidad solicitada. 

Datos de entrada: Temperatura y escala a la cual se debe convertir la temperatura

conversión de temperatura  = (temperatura - 32) * 5 / 9; // Fahrenheit a Celsius  
conversión de temperatura  = (temperatura * 9 / 5) + 32; // Celsius a Fahrenheit    

Datos de prueba:    Temperatura     Escala a convertir      Resultado esperado
                    25              F                       77
                    32              C                       0
                    "100"           C                       Error
                    0               a                       Error
*/

function convertirTemperatura(){
    let temperatura = txtTemperatura.value;
    let escala = txtEscala.value;

    let resultado;

    // No se debe validar porque el input solo deja ingresar datos de tipo number

    if (escala === "C"){ //Fahrenheit a Celsius
        resultado = (temperatura - 32) * 5 / 9 + "° C";
    } 
    else if (escala === "F"){ // Celsius a Fahrenheit 
        resultado = (temperatura * 9 / 5) + 32 + "° F";
    } 
    else{ // Otra escala
       resultado =  "Error: Unidad no válida (utilice C o F)";
    }
    parrafoResultado.innerText = resultado;
    
}
//Opcional: escala.toLowerCase() o escala.toUpperCase()

btnConvertirTemperatura.addEventListener("click", convertirTemperatura);