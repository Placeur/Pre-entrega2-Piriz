//Pre-entrega 2:

//Utilizando Constructores de Objetos (Moldes):

function producto (Nombre, Marca, Precio) {
    this.nombre = Nombre;
    this.marca = Marca;
    this.precio = Precio;
}

const producto1 = new producto ("Heladera", "James", 1200);
const producto2 = new producto ("Cocina", "James", 900);
const producto3 = new producto ("Estufa", "Samsung", 1200);

//Agregando Métodos personalizados a nuestros Constructores:

function producto (Nombre, Marca, Precio) {
    this.nombre = Nombre;
    this.marca = Marca;
    this.precio = Precio;
    this.encender = function () {console.log("Encendiendo" + this.nombre)}
}
const producto4 = new producto ("Heladera", "Sony", 1200);
const producto5 = new producto ("Cocina", "James", 900);

producto4.encender ();
producto5.encender ();

//Utilizando Operador IN y FOR...IN en producto4:

console.log("Sony") 
//Devuelve TRUE porque "Sony" está en producto4.
console.log("Hola")
//Devuelve FALSE porque "Hola" no está en producto4.

//Creando Clases:

class Vehiculos {
    constructor (Nombre, Precio) {
        this.nombre = Nombre;
        this.precio = Precio;
    }

    haceraumento () {
        this.precio = this.precio * 0,30;
    }

}

    
Vehiculo1 = new Vehiculos ("Ferrari", 1000000);
Vehiculo2 = new Vehiculos ("BMW", 100000);
Vehiculo1.haceraumento ();
Vehiculo2.haceraumento ();

//Trabajando con Arrays:

//Declaro Array con Números:

const Numeros = [6,8,9,4];

console.log(Numeros[0]) //6;
console.log(Numeros[2]) //9;
console.log(Numeros[3]) //4;

//Algunos Métodos de la Array
//Averiguando el Largo de nuestra Array:

Numeros [6,8,9,4];
console.log(Numeros.length) //Imprime 4;

//Agrego nuevo elemento:

Numeros [6,8,9,4];
Numeros.push(10)

console.log(Numeros.length) //Imprime 5;

//Eliminando Ultimo Elemento:

Numeros [6,8,9,4,10];
Numeros.pop(10);

//Eliminando varios Elementos:

Numeros [6,8,9,4];
Numeros.splice(1,2); 

console.log(Numeros) //Nos imprime [6,4]

//Verificando si un elemento está dentro del Array o no:

Numeros [6,8,9,4];
console.log(Numeros.includes(8)); //Nos imprime TRUE;
console.log(Numeros.includes(11)); //Nos imprime FALSE;

//Cambiando el orden de los elementos:

Numeros [6,8,9,4];
Numeros.reverse()
console.log(Numeros);  //Nos imprime [4,9,8,6];

//Funciones de Orden Superior
//Retornar funciones:

let mayorque = mayorque(20);  //Simplificamos codigo a través de la Abstracción
console.log(mayorque(21)); // TRUE
console.log(mayorque(19)); // FALSE

//Utilizando algunos Meetodos Nativos de JS:

const cuadros = [
    {nombre:'Nacional', Hinchas:'1000000'},
    {nombre:'Penarol', Hinchas:'10000'},
]

const resultado = cuadros.find((el) => el.nombre ==="Nacional")
console.log(resultado)// {nombre: "Nacional", Hinchas:"1000000"}

//Some:

const cuadros1 = [
    {nombre:'Nacional', Hinchas:'1000000'},
    {nombre:'Penarol', Hinchas:'10000'},
]

const resultado1 = cuadros.some((el) => el.nombre ==="Nacional")
console.log(resultado1)// TRUE

//MATH / Min y max:

console.log(Math.max(10,16,21,43,20)); // Imprime "43"
console.log(Math.min(10,16,21,43,20)); // Imprime "10"

//Square root:

Math.sqrt(16) //Imprime 4
Math.sqrt(36) //Imprime 6


//Random

console.log(Math.random()) //0.24524257868 // Nos imprime un numero ALeatorio entre el 0 y 1








 























