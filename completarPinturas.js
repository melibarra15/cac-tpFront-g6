let pintura = document.querySelector('#pintura');
let pinturaCopia = pintura.cloneNode(true);
let main = document.querySelector('main');
let contenedor = document.querySelector("#container-pinturas");

pintura.remove();

agregarPintura();

function agregarPintura(){
    fetch("https://github.com/melibarra15/cac-tpFront-g6/blob/main/pinturas.json")
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i<= data.items.length; i++){
            
            let nuevaPintura = pinturaCopia.cloneNode(true);

            nuevaPintura.querySelector("#imagenpintura").src = data.items[i].image;
            nuevaPintura.querySelector("#imagenpintura").alt = "Pintura de"+" "+data.items[i].name;
            nuevaPintura.querySelector("#pintura #capa #titulopintura").textContent = data.items[i].titulo;
            nuevaPintura.querySelector("#pintura #capa #preciopintura").textContent = data.items[i].precio;
            
            contenedor.appendChild(nuevaPintura);
        }
        })
    .catch(error => console.log("Ocurrió un error! " + error));
}


window.addEventListener("load", agregarPintura);