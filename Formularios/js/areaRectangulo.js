let btnCalcularArea = document.getElementById("btnCalcularArea");

let txtBase = document.getElementById("txtBase"); 
let txtAltura = document.getElementById("txtAltura");

let parrafoResultadoRectangulo = document.querySelector("#sctResultado p");

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
function areaRectangulo(){
    let base = txtBase.value;
    let altura = txtAltura.value;
    let resultado;
    
    
    // Condicional para asignar altura = base si solo hay un dato de entrada
    if (altura === ""){ 
        altura = base; 
    }

    if (base <= 0 || altura <= 0){
        resultado = "Error: Los datos deben ser números positivos";
    }
    else{
        resultado = base * altura;
    }
    parrafoResultadoRectangulo.innerText =  resultado;
}

btnCalcularArea.addEventListener("click", areaRectangulo);