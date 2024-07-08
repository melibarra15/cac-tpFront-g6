const selectElement = document.querySelector("#categorias-de-publicacion");
const resultado = document.querySelector("#indicador");

let articuloObra = document.querySelector(".obra");
let templateObra = articuloObra.cloneNode(true);
articuloObra.remove();
let botonagregar = document.querySelector(".agregarobra");

let contenedor = document.querySelector(".container-misobras");


selectElement.addEventListener("change", (event) => {
    res= event.target.value
    console.log(res)
    resultado.textContent = `Se mostraran las obras: ${res}`;
    agregarArticulos(res);
    });

function agregarArticulos(categoria){
    contenedor.innerHTML= '';
    contenedor.appendChild(botonagregar);
    let url = "http://localhost:5000/obras";
    if (categoria != "todas"){
         url = "http://localhost:5000/obras/" + categoria;
    }
    fetchData(url, "GET", (data) =>{
        for (let obra of data) {
            console.log(obra)
            console.log(obra.activa)
            let nuevaObra = templateObra.cloneNode(true);
    
            nuevaObra.querySelector("#tituloobra").innerHTML = obra.nombre;
            nuevaObra.querySelector("#precioobra").innerHTML = obra.precio;
            nuevaObra.querySelector("#imagenobra").src = obra.imagen;
           // nuevaObra.querySelector(".fecha").innerHTML = obra.fecha_creacion;
           // nuevaObra.querySelector("input.task_id").value = obra.id;
    
           contenedor.appendChild(nuevaObra);
        }    
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

