let sticker = document.querySelector("#sticker");
let stickerCopia = sticker.cloneNode(true);
let main = document.querySelector("main");
let contenedor = document.querySelector("#container-stickers");

sticker.remove()

function AgregarStickers(){

    fetch("https://dragonball-api.com/api/characters")
    .then(response => response.json())
    .then(data => {
               //iterando por cada elemento del array del json
           for(let i = 0; i<= data.items.length; i++){
            //buscando contenedor y creando child figure
            let nuevoSticker = stickerCopia.cloneNode(true);

            nuevoSticker.querySelector("#imagensticker").src = data.items[i].image;
            nuevoSticker.querySelector("#imagensticker").alt = "Sticker de"+" "+data.items[i].name;
            nuevoSticker.querySelector("#sticker #capa #nombresticker").textContent = data.items[i].name;
            //creando nuevo sticker con la nueva imagen y nombre
            contenedor.appendChild(nuevoSticker);

        }
    })
    .catch(error => console.log("Ocurrió un error!")); 
}
//que esto se de al abrir la página
window.addEventListener("load", AgregarStickers);



