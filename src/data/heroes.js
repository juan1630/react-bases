// export const heroes =

// cuando es por defecto no se usa el const y en el otro archivo se quitan las  { } 

// export default [{
const heroes = [{
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


const owners = ['Marvel', 'DC'];
// export default heroes;
export {
    heroes,
    owners
}