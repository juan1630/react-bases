import { getHeroeById } from './bases/08-imports-export'

// const promesas = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const arr = getHeroeById(4);
//         resolve(arr);
//         // reject('No se ecnotro el heroe');

//     }, 2000);
// });

// promesas
//     .then(data => console.log(data))
//     .catch(error => console.log(error));


const getElementByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const arr = getHeroeById(id);
            // console.log(arr);

            if (arr === undefined) {

                reject('No se encontro el heroe');
            } else {
                resolve(arr);
            }
            // reject('No se ecnotro el heroe');

        }, 2000);
    });

}


getElementByIdAsync(100)
    .then(console.log)
    .catch(console.warn);