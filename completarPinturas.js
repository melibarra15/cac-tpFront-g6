let pintura = document.querySelector("#pintura");
let pinturaCopia = pintura.cloneNode(true);
let main = document.querySelector("main");
let contenedor = document.querySelector("#container-pinturas");

pintura.remove();

function agregarPintura() {
    fetch("https://melibarra15.github.io/cac-tpFront-g6/pinturas.json")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.pinturas.length; i++) {
                let nuevaPintura = pinturaCopia.cloneNode(true);

                nuevaPintura.querySelector("#imagenpintura").src = data.pinturas[i].imagen;
                nuevaPintura.querySelector("#imagenpintura").alt = "Sticker de" + " " + data.pinturas[i].titulo;
                nuevaPintura.querySelector("#nombrepintura").textContent = data.pinturas[i].titulo;
                nuevaPintura.querySelector("#preciopintura").textContent = data.pinturas[i].precio;

                contenedor.appendChild(nuevaPintura);
            }
        })
        .catch(error => console.log("Ocurrió un error!"));
}

window.addEventListener("load", agregarPintura);