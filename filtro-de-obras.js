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

    articulo = templateObra.cloneNode(true);

    articulo.querySelector("#titulo").innerHTML = categoria;
    
    contenedor.appendChild(articulo);
}

function limpiarVista(){
    
}