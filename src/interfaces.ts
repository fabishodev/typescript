//interfaces
export interface Telefono  {
    nombre: string | number | boolean;
    marca: string;
    precio: number;
}

//ejercicio de interfaz
export interface Pelicula {
    nombre: string;
    año: number;
    actores: Actor[],
    especial: Actor
}
 
export interface Actor{
    nombre: string,
    edad: number,
    lugarNacimiento: string
    pais?:() => string
}

