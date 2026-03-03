
/*
Comentario
multilínea
*/

// Comentario de una línea

// console.log es equivalente a print() en Python: Mensaje en consola
console.log("Mensaje en la consola");
console.log("Otro mensaje en la consola");

// Constante: Valor que no cambia durante la ejecución de un programa. 
const PI = 3.14;
console.log(PI);

const MAX_USUARIOS = 100;
console.log(MAX_USUARIOS);

const GRAVEDAD = 9.18;

const TIPO_USUARIO = "Visitante"; 
console.log(TIPO_USUARIO);

// Variable: Espacio de memoria en la computadora, en donde un programa almacena un dato que puede o no cambiar durante la ejecución.  
/* Forma incorrecta (no se permite su uso en el curso)
var nombreVariable = "datoAlmacenado";
console.log(nombreVariable);

var numeroAleatorio = 15;
console.log(numeroAleatorio);
*/

// Forma adecuada de crear variables
let nombrePerro = "Mia";
console.log("Variable con el nombre de un perro: " + nombrePerro);
nombrePerro = "Minnie";
console.log("Variable con el nombre actualizado: " + nombrePerro);

let nombreGato;
console.log("Variable con el nombre de un gato: " + nombreGato);
nombreGato = "Mimi";
console.log("Variable con el nombre de un gato: " + nombreGato);

// Ejercicio: Crear una variable que almacene un string y crear otra variable que almacene un dato numérico. 

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
function calcularIMCRetorno(peso, estatura){
    //               (estatura*estatura)
    let imc = peso / Math.pow(estatura, 2);
    return imc.toFixed(2);
}

console.log("El IMC es: " + calcularIMCRetorno(80, 1.7));
console.log("El IMC es: " + calcularIMCRetorno(60, 1.8));

/*
== : comparar el valor 
Python: 
    5 == 5:  Verdadero
    "5" == 5: Falso
JavaScript
    5 == 5:  Verdadero
    "5" == 5: Verdadero porque JS compara solo el valor 

    5 === 5: Verdadero (JS primero compara el tipo de dato y luego compara el valor)
    "5" === 5: Falso (JS compara el tipo de dato y el valor)

    "5" !== 5 : Verdadero
*/

console.log("5" == 5); // Se compara solo el valor 
console.log("5" === 5); // Se compara el tipo de dato y el valor 
console.log("10" != 10); // Se compara solo el valor
console.log("10" !== 10); // Se compara el tipo de dato y el valor

/* Crear una función para calcular el área de un rectángulo
Datos de prueba:    base    altura      área
                    5       3           15
                    4                   16 
                    ""      2           Error
                    0       2           Error
*/
function areaRectangulo(base, altura){
    // Condicional para asignar altura = base si solo hay un dato de entrada
    if (altura === undefined){ 
        altura = base; 
    }

    if (typeof base !== "number" || typeof altura !== "number" || base <= 0 || altura <= 0){
        return "Error: Los datos deben ser números positivos";
    }

    return base * altura;
}

console.log("El área del rectángulo es: " + areaRectangulo(5, 3));
console.log("El área del rectángulo es: " + areaRectangulo(5));
console.log(areaRectangulo("5"));
console.log(areaRectangulo(0, 2));

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
