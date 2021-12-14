

//console.log('Hola Mundo!');

import { Elemento, Propiedad } from "./utils/clases";
import { nombre } from "./utils/functions";
import { Telefono, Actor, Pelicula } from "./utils/interfaces"

/*
    ===== Código de TypeScript =====
*/

//Tipado fuerte en variables y funciones

let var1: string = ''; //number
var1 = 'cadef'; //string


nombre()

const alcatel: Telefono = {
    nombre: 'Alcatel s20',
    marca: 'alcatel',
    precio: 1500
}

const actor1: Actor = {
    nombre: 'Robert',
    edad: 56,
    lugarNacimiento: 'New York',
    pais: () => {
        return 'USA'
    }
}

const pelicula1: Pelicula = {
    nombre: 'Heat',
    año: 1999,
    actores: [actor1],
    especial: actor1
}

const{nombre: n1, especial:{nombre: nombreAct}} = pelicula1
const arr = [1,2,3];
const [, , p1] = arr
console.log(n1)
console.table(pelicula1)

const pr = new Propiedad(45);
pr.volumen = 150;

const elemento1 = new Elemento(
    "es muy bajo", 
    "bueno no tanto", 
    3,
    pr);

console.log(elemento1.pro4.volumen)
elemento1.pro2 = 3;


/*
    2 clases (extender)
    2 interfaces
    2 funciones
    destructuracion

    se pueden exporar multiples clases de una sola vez?
    tipos de datos***
    export por archivo
*/
