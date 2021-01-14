// desestrucutracion


const persona = {
    nombre: 'Juan',
    apellido: 'Patron',
    edad: 45,
    clave: "yo"
}

const { nombre, apellido, edad } = persona;


console.log(nombre, apellido, edad);


const imprimePersona = ({ nombre, edad, rango = "Capitan" }) => {
    console.log(nombre, edad, rango);
}

const per = imprimePersona(persona)