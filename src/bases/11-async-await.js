// peticion
//     .then((data) => data.json())
//     // promesas en cadena
//     .then(({ data }) => {
//         const { url } = data.images.original;
//         console.log(url);
//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//     })
//     .catch(console.warn);


const getImagen = async() => {

    const apiKey = "eEPDA03j1IvzhS3hAAbeGHhOeE48k0vN";

    try {

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {

        //manejo de los errores

        console.error(error);

    }
}


getImagen();