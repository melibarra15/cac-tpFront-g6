let sticker = document.querySelector("#sticker");
let stickerCopia = sticker.cloneNode(true);

let contenedor = document.querySelector("#container-stickers");

sticker.remove()

fetch("https://dragonball-api.com/api/characters")
.then(response => response.json())
.then(data => {

    //buscando contenedor y creando child figure
    let nuevoSticker = stickerCopia.cloneNode(true);

    nuevoSticker.querySelector("#imagensticker").src = data.items[0].image;
    nuevoSticker.querySelector("#imagensticker").alt = "Sticker de"+" "+data.items[0].name;
    nuevoSticker.querySelector("#sticker #capa #nombresticker").textContent = data.items[0].name;
    
    contenedor.appendChild(nuevoSticker);
    
    })
.catch(error => console.log("Ocurrió un error!"));
