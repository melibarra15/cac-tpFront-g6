const selectElement = document.querySelector("#categorias-de-publicacion");
const resultado = document.querySelector("#indicador");

let body = document.querySelector("#main");
let articuloObra = document.querySelector(".obra");
let templateObra = articuloObra.cloneNode(true);
articuloObra.remove();

let contenedor = document.querySelector(".container");


selectElement.addEventListener("change", (event) => {
    res= event.target.value
    console.log(res)
    resultado.textContent = `Se mostraran las obras: ${res}`;
    agregarArticulos(res);
    });

function agregarArticulos(categoria){
    contenedor.innerHTML= '';

    fetchData("http://localhost:5000/obras/publicadas", "GET", (data) =>{
        let obras = []
        for (let obra of data) {
            console.log(obra)
            let nuevaObra = templateObra.cloneNode(true);
    
            nuevaObra.querySelector("#titulo").innerHTML = obra.nombre;
          //  nuevaObra.querySelector(".descripcion").innerHTML = obra.descripcion;
           // nuevaObra.querySelector(".fecha").innerHTML = obra.fecha_creacion;
           // nuevaObra.querySelector("input.task_id").value = obra.id;
    
           // obras.push(nuevaTarea);
           contenedor.appendChild(nuevaObra);
        }
    
        //contenedor.replaceChildren(...obras);
    });
}

function fetchData(url, method, callback, data_request = null){
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data_request ? JSON.stringify(data_request) : null, //Si hay datos, los convierte a JSON y los incluye en el cuerpo
    };

    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        callback(data);
    })
    .catch(error => console.log("Ocurrió un error!" + error));
}

