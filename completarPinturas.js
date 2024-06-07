let pintura = document.querySelector('#pintura');
let pinturaCopia = pintura.cloneNode(true);
let main = document.querySelector('main');
let contenedor = document.querySelector("#container-pinturas");

pintura.remove();

agregarPintura();

function agregarPintura(){
    fetch("https://melibarra15.github.io/cac-tpFront-g6/pinturas.json")
    .then(response => response.json())
    .then(data => {
        console.log("data: " + data);
        console.log("largo: " + data.pinturas.length);
        
        for(let i = 0; i < data.pinturas.length; i++){
            
            let nuevaPintura = pinturaCopia.cloneNode(true);
            console.log("nombre: " + data.pinturas[i].titulo);
            console.log("img dir: " + data.pinturas[i].imagen);
            
            nuevaPintura.querySelector("#imagenpintura").src = data.pinturas[i].imagen;
            nuevaPintura.querySelector("#imagenpintura").alt = "Pintura de " + data.pinturas[i].name;
            nuevaPintura.querySelector("#pintura #capa #titulopintura").textContent = data.pinturas[i].titulo;
            nuevaPintura.querySelector("#pintura #capa #preciopintura").textContent = data.pinturas[i].precio;
            
            contenedor.appendChild(nuevaPintura);
        }
        })
    .catch(error => console.log("Ocurrió un error! " + error));
}


//window.addEventListener("load", agregarPintura);