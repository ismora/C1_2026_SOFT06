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

function convertirTemperatura(temperatura, escala){
    if (typeof temperatura !== "number"){
        return "Error: La temperatura debe ser un número";
    }
    if (escala !== "C" && escala !== "F"){
        return "Error: Unidad no válida (utilice C o F)";
    }

    // Conversión
    let resultadoConversion;
    if (escala === "C"){ //Fahrenheit a Celsius
        resultadoConversion = (temperatura - 32) * 5 / 9;
    } 
    else{ // Celsius a Fahrenheit 
        resultadoConversion = (temperatura * 9 / 5) + 32;
    }
    return resultadoConversion;
}
//Opcional: escala.toLowerCase() o escala.toUpperCase()

console.log(convertirTemperatura(25, "F")); // 77
console.log(convertirTemperatura(32, "C")); // 0
console.log(convertirTemperatura("32", "C")); // Error
console.log(convertirTemperatura(32, "a")); // Error