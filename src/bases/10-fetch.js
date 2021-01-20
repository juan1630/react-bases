const apiKey = "eEPDA03j1IvzhS3hAAbeGHhOeE48k0vN";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then((data) => data.json())
    // promesas en cadena
    .then(({ data }) => {
        const { url } = data.images.original;
        console.log(url);
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);