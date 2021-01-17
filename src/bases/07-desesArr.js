const personajes = ['goku', 'vegeta', 'trunks'];


const [p1] = personajes;

// se obtine la segunda posicion del arreglo
const [, p2] = personajes;
// se obtiene por la posicion y no por el normal

console.log(p1);
console.log(p2);


const retornoArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornoArreglo();
console.log(letras, numeros);
// cambiar el nombre con fn + f2

// tarea 
const useEstate1 = (valor) => {
    return [valor, () => { return console.log("Hola desde la funcion") }];
}

const goku = "Hola";

const [nombre, setNombre] = useEstate1(goku);
console.log(nombre);
setNombre();