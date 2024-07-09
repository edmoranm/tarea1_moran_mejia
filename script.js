// DATOS STRING

// Esta función divide un string en un array de substrings utilizando un separador especificado.

function splitString(texto, separador) {
    return texto.split(separador);
}

let texto1 = "Hola mundo, ¿cómo estás?";
let palabras = splitString(texto1, " ");
console.log(palabras); // ["Hola", "mundo,", "¿cómo", "estás?"]

// Esta función devuelve una parte del string entre los índices de inicio y fin especificados.

function getSubstring(texto, inicio, fin) {
    return texto.substring(inicio, fin);
}

let texto2 = "JavaScript";
let subcadena = getSubstring(texto2, 0, 4);
console.log(subcadena); // "Java"

// Esta función busca un valor específico en el string y lo reemplaza con un nuevo valor.

function replaceString(texto, buscar, reemplazar) {
    return texto.replace(buscar, reemplazar);
}

let texto3 = "Hola mundo";
let nuevoTexto = replaceString(texto3, "mundo", "MORAN");
console.log(nuevoTexto); // "Hola MORAN"

// DATOS NUMBER

// Esta función toma dos números como argumentos y devuelve su suma.

function sumarNumeros(a, b) {
    return a + b;
}

let resultad1 = sumarNumeros(5, 9);
console.log(resultad1); // 14

// Esta función toma un número como argumento y devuelve su factorial. El factorial de un número 𝑛 es el producto de todos los enteros positivos menores o iguales a 𝑛.

function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = n; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}

let resultad2 = calcularFactorial(5);
console.log(resultad2); // 120

// Esta función toma un número como argumento y devuelve true si el número es primo y false en caso contrario.

function esNumeroPrimo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let resultado3 = esNumeroPrimo(7);
console.log(resultado3); // true
let resultado4 = esNumeroPrimo(10);
console.log(resultado4); // false

// DATOS BOOLEANOS

// Esta función toma un número como argumento y devuelve true si el número es mayor que 10, de lo contrario devuelve false.

function esMayorQueDiez(numero) {
    return numero > 10;
}

let resultado1 = esMayorQueDiez(15);
console.log(resultado1); // true

let resultado2 = esMayorQueDiez(7);
console.log(resultado2); // false

// Esta función toma un número como argumento y devuelve true si el número es par, de lo contrario devuelve false.

function esPar(numero) {
    return numero % 2 === 0;
}

let resultad3 = esPar(8);
console.log(resultado3); // true

let resultad4 = esPar(11);
console.log(resultado4); // false

// Esta función toma una cadena de texto como argumento y devuelve true si la cadena contiene letras mayúsculas, de lo contrario devuelve false.

function tieneLetrasMayusculas(texto) {
    return /[A-Z]/.test(texto);
}

let resultado5 = tieneLetrasMayusculas("Hola Mundo");
console.log(resultado5); // true

let resultado6 = tieneLetrasMayusculas("hola mundo");
console.log(resultado6); // false

// DATOS OBJECT

// Esta función toma un objeto y una clave como argumentos y devuelve el valor asociado a esa clave en el objeto.

function obtenerValorPorClave(objeto, clave) {
    return objeto[clave];
}

let persona = { nombre: "Daniel", edad: 26, profesion: "Militar" };
let valor = obtenerValorPorClave(persona, "nombre");
console.log(valor); // "Daniel"

// Esta función toma un objeto, una clave y un valor como argumentos, y agrega una nueva propiedad al objeto con la clave y el valor especificados.

function agregarPropiedad(objeto, clave, valor) {
    objeto[clave] = valor;
    return objeto;
}

let coche = { marca: "Toyota", modelo: "Corolla" };
let cocheActualizado = agregarPropiedad(coche, "año", 2021);
console.log(cocheActualizado); // { marca: "Toyota", modelo: "Corolla", año: 2021 }

// Esta función toma un objeto y una clave como argumentos, y elimina la propiedad del objeto correspondiente a la clave especificada.

function eliminarPropiedad(objeto, clave) {
    delete objeto[clave];
    return objeto;
}

let libro = { titulo: "2026", autor: "DANIEL RIVAS", paginas: 328 };
let libroActualizado = eliminarPropiedad(libro, "paginas");
console.log(libroActualizado); // { titulo: "2026", autor: "DANIEL RIVAS" }

// DATO ARRAY

// Esta función toma un array y un elemento como argumentos, y agrega el elemento al final del array.

function agregarElemento(array, elemento) {
    array.push(elemento);
    return array;
}

let frutas = ["manzana", "banana", "naranja"];
let nuevasFrutas = agregarElemento(frutas, "pera");
console.log(nuevasFrutas); // ["manzana", "banana", "naranja", "pera"]

// Esta función toma un array y un índice como argumentos, y elimina el elemento en el índice especificado.

function eliminarElemento(array, indice) {
    if (indice > -1 && indice < array.length) {
        array.splice(indice, 1);
    }
    return array;
}

let colores = ["rojo", "verde", "azul", "amarillo"];
let coloresActualizados = eliminarElemento(colores, 2);
console.log(coloresActualizados); // ["rojo", "verde", "amarillo"]

// Esta función toma un array y una función de prueba como argumentos, y devuelve el primer elemento en el array que pasa la prueba especificada.

function encontrarElemento(array, funcionPrueba) {
    return array.find(funcionPrueba);
}

let numeros = [5, 12, 8, 130, 44];
let encontrado = encontrarElemento(numeros, function(elemento) {
    return elemento > 10;
});
console.log(encontrado); // 12








