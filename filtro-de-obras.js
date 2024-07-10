const selectElement = document.querySelector("#categorias-de-publicacion");
const resultado = document.querySelector("#indicador");

let articuloObra = document.querySelector(".obra");
let templateObra = articuloObra.cloneNode(true);
articuloObra.remove();
let botonagregar = document.querySelector(".agregarobra");

let contenedor = document.querySelector(".container-misobras");
const BASE_URL = "http://localhost:5000/obras";

agregarArticulos("todas");

selectElement.addEventListener("change", (event) => {
    res= event.target.value
    console.log(res)
    resultado.textContent = `Se mostraran las obras: ${res}`;
    agregarArticulos(res);
    botoneslist();
    });

function agregarArticulos(categoria){
    contenedor.innerHTML= '';
    contenedor.appendChild(botonagregar);
    let url = BASE_URL;
    if (categoria != "todas"){
        url = BASE_URL + categoria;
    }
    fetchData(url, "GET", (data) =>{
        for (let obra of data) {
            console.log(obra)
            let nuevaObra = templateObra.cloneNode(true);
    
            nuevaObra.querySelector("#tituloobra").innerHTML = obra.nombre;
            nuevaObra.querySelector("#precioobra").innerHTML = "$ " + obra.precio;
            nuevaObra.querySelector("#imagenobra").src = obra.imagen;
            nuevaObra.querySelector("input.obra_id").value = obra.id;
          
            contenedor.appendChild(nuevaObra);
            let editarbutton = nuevaObra.querySelector(".editarbutton");
            let eliminarbutton =nuevaObra.querySelector(".eliminarbutton");
            editarbutton.obra_id = obra.id;
            eliminarbutton.obra_id = obra.id;
            editarbutton.addEventListener("click", editarObra);
            //eliminarbutton.addEventListener("click", eliminarObra);
        }    
    });
}

function editarObra(event) {
    console.log("editar boton");
    let id = event.currentTarget.task_id;
    window.location.replace("subirobras.html?obra_id=" + id);
}

function eliminarObra(event) {
    console.log("eliminar boton");
    let id = event.currentTarget.obra_id;

    let url = BASE_URL + '/eliminarObra/' + id;

    fetchData(url, "DELETE", () => {
        location.reload();
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