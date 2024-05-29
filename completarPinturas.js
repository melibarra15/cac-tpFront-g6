let pintura = document.querySelector("#pintura");
let pinturaCopia = pintura.cloneNode(true);
let main = document.querySelector("main");
let contenedor = document.querySelector("#container-pinturas");

pintura.remove()
function agregarPintura(){
    fetch("https://melibarra15.github.io/cac-tpFront-g6/pinturas.json")
    .then(response => response.json())
    .then(data => {
                       //iterando por cada elemento del array del json
                       for(let i = 0; i<= data.pinturas.length; i++){
                        //buscando contenedor y creando child figure
                        let nuevaPintura = stickerCopia.cloneNode(true);
            
                        nuevaPintura.querySelector("#imagenpintura").src = data.pinturas[i].imagen;
                        nuevaPintura.querySelector("#imagenpintura").alt = "Sticker de"+" "+data.pinturas[i].titulo;
                        nuevaPintura.querySelector("#pintura #capa #nombrepintura").textContent = data.pinturas[i].titulo;
                        nuevaPintura.querySelector("#pintura #capa #preciopintura").textContent = data.pinturas[i].precio;
                        //creando nueva pintura con la nueva imagen y nombre
                        contenedor.appendChild(nuevaPintura);
            
                    }
                })
                .catch(error => console.log("Ocurrió un error!")); 
            }
            //que esto se de al abrir la página
            window.addEventListener("load", agregarPintura);