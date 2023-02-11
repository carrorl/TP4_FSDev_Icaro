// /*1 - Escribir una función a la que se le pase una cadena "nombre" 
// y muestre por pantalla el saludo ¡hola nombre!.*/

// function printGreeting(name){
//     return greeting = "¡Hola "+name+"!"
// }

// console.log(printGreeting("nombre"));

/*Escribir un programa que le pida al usuario que ingrese su nombre apellido edad 
y muestre un objeto con los datos ingresados.*/

const readlineSyncFName = require("readline-sync")
const readlineSyncLName = require("readline-sync")
const readlineSyncAge = require("readline-sync")

class person {
    constructor(fName,lName,age) {
    this.fName = fNameImput;
    this.lName = lNameImput;
    this.age = ageImput
    }
}
let fNameImput = readlineSyncFName.question("Ingrese su nombre: ")
let lNameImput = readlineSyncLName.question("Ingrese su apellido: ")
let ageImput = readlineSyncAge.question("Ingrese su edad: ")

let newPerson = new person(fNameImput,lNameImput,ageImput)
    
console.log(newPerson)


