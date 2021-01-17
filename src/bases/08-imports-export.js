// import { heroes } from '../src/data/heroes';

import { heroes } from "./data/heroes";

// import { heroes } from "./data/heroes";


const getHeroeById = (id) => heroes.find(element => id === element.id);
const getElementByOwner = ((owner) => heroes.filter(heroe => heroe.owner === owner));
console.log(getHeroeById(2));
console.log(getElementByOwner('DC'));