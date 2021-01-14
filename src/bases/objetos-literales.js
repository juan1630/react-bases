const persona = {
    nombre: "Juan",
    edad: 45,
    apellido: "Patrón",
    direccion: {
        calle: "Emiliano zapata",
        numero: 2,
        ciudad: "Cuatula"
    }
};


const persona2 = {...persona };
persona2.nombre = "Manuel";

// destructuring de un objeto
// console.log({ persona });


console.table({ persona });

console.log({ persona2 });