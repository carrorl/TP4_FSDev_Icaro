/*1 - Escribir una función a la que se le pase una cadena "nombre" 
y muestre por pantalla el saludo ¡hola nombre!.*/

function printGreeting(name){
    return greeting = "¡Hola "+name+"!"
}

console.log(printGreeting("nombre"));

/*2 - Escribir un programa que le pida al usuario que ingrese su nombre apellido edad 
y muestre un objeto con los datos ingresados.*/

const readlineSync = require("readline-sync")

class person {
    constructor(fName,lName,age) {
    this.fName = fNameImput;
    this.lName = lNameImput;
    this.age = ageImput
    }
}
let fNameImput = readlineSync.question("Ingrese su nombre: ")
let lNameImput = readlineSync.question("Ingrese su apellido: ")
let ageImput = readlineSync.question("Ingrese su edad: ")

let newPerson = new person(fNameImput,lNameImput,ageImput)
    
console.log(newPerson)

/*3 - Escribir una funcion que espere dos parámetros, uno de los cuales deberá ser un array, 
y el otro parámetro debe ser el elemento a buscar en el array. 
Si lo encuentra debera devoler "Elemento encontrado en la posicion (posición)".*/

let newArray1 = [13,"gato","oreja"]
let newArray2 = [29,"gato","oreja"]

function finder(param1,param2){
    if(param1.includes(param2) == true){      
        console.log("El elemento "+param2+" se encuentra en la posición "+param1.indexOf(param2));
    } else {
        console.log("El elemento "+param2+" no se encuentra en la lista");
    }
}

finder(newArray1,"gato")
finder(newArray2,4)

/*4 - Dada un lista o array, escribir un programa que invierta sus elementos.*/

let frontArray = [1,2,3,4,5,6,7,8,9]

function reverser (param1){
    let reverseArray = frontArray.reverse()
    return reverseArray
}
 
console.log(reverser(frontArray));
