// problemas logicos o matematicos
// la programacion es una herrmaienta para resolver problemas
// pensamiento computacional
// descomposicion: descomponer el problema
// patron: encontrar similitudes
// abstraccion: achicar el problema, eliminar los superfluo
// algoritmo: pasos para resolver el problema

/*
  Variables? espacio en memoria donde se almacena un valor. 
  Que es? Un cajon
  Como armo una variable? 
  let nombreDeLaVariable ="valor"
  ej: let nombre="jeronimo"
  = es el operador de asignación 

  Tipos de datos: 
numerico: enteros o con coma (integer, float)
string: cadena de caracteres

+ > suma o concatenacion (juntar strings)
Nan = not a number 

Javascript usa camelCase
las constantes se escriben en MAYUSCULA

/ funciona para la division y % para saber el resto

= asigna un valor a una variable 
== pregunta si el valor coincide
=== pregunta si el valor y el tipo de dato coinciden 

prompt sirve para pedir un dato
alert("hola") va a mostrar un cartelito que dice hola
*/
/* .push agrega contenido al final de un array
.unshift("lo que quiero agregar") lo agrega al principio
pop() // elimina el ultimo
shift() // elimina el primero 

let nombre = "esteban";
let edad = 29;
let cargo = "profesor"

let profesor = ["esteban","29","profesor"]
console.log("hola mundo")
*/

let nombre = prompt("ingrese su nombre") 

function saludar(){
  console.log("hola" + nombre)
}

function mostrar(visible){
  console.log(visible)
}

saludar()
