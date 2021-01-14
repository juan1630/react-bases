// strings multilinea

const nombre = "Juan";
const apellido = "Patrón";


// const nombreCompleto = nombre + " " + apellido;

// respta los espacios

const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);


function getSaludo(nombre) {
    return "Hola mundo " + nombre;
}

console.log(`Este es el saludo de la función ${getSaludo('Juan')}`)