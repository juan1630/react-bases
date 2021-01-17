// desestrucutracion


const persona = {
    nombre: 'Juan',
    apellido: 'Patron',
    edad: 45,
    clave: "yo"
}

const { nombre, apellido, edad } = persona;


// destructuracion dentro de la funcion en el paso de los parametros

const useContext1 = ({ clave, nombre, edad, rango = "Capitán" }) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 644.618,
            lng: 61.61864
        }
    }
}

const { nombreClave, anios, latlng: { lat, lng } } = useContext1(persona);

console.log(nombreClave, anios);
console.log(lat, lng);