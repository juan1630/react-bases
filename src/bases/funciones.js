const saludar = function(nombre) {
    return `Hola ${nombre}`;
}


const saludar2 = nombre => {
    return `Hola ${nombre}`;
}


const saludar3 = nombre => `Hola ${nombre}`;

console.log(saludar("Juan"));
console.log(saludar2('Vegeta'));
console.log(saludar3('Trunks'));


const getUser = () =>
    ({
        uid: "ABCD123",
        userName: "El juancho"
    });



console.log(getUser());


const getUsuarioActivo = nombre => ({
    uid: "ABCDE65465",
    userName: nombre
})



const usuarioActivo = getUsuarioActivo('Samuel');


console.log(usuarioActivo);