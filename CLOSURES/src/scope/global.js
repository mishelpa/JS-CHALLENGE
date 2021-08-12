//Global Scope : No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de manera global.

var hello = "Hello"; //VAR tiene scope global
var hello = "Hello+"; //VAR si puede ser reasignada pero es una mala práctica
let world = "Hello World";
//let world = "Hello World"; Genera error porque no puede ser reasignado
const helloWorld = "Hello World";

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction()

/*

Es una mala practica realizar esto

const newWorld = () => {
    world1 = "Nice to meet you"
}

newWorld()
console.log(world1); 
*/
