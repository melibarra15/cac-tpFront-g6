const selectElement = document.querySelector("#categorias-de-publicacion");
const resultado = document.querySelector("#indicador");

const contenedor = document.querySelector(".container");
let articuloObra = document.querySelector(".obra");
let templateObra = articuloObra.cloneNode(true);
articuloObra.remove();

selectElement.addEventListener("change", (event) => {
    res= event.target.value
    console.log(res)
    resultado.textContent = `Se mostraran las obras: ${res}`;
    agregarArticulos(res);
    });

function agregarArticulos(categoria){
    //limpiarVista();

    articulo = templateObra.cloneNode(true);

    articulo.querySelector("#titulo").innerHTML = categoria;
    
    contenedor.appendChild(articulo);
}

function limpiarVista(){
    for (nodo in contenedor.childNodes){
        console.log(contenedor.childElementCount);
        console.log("elementos restantes: ");
        contenedor.removeChild(nodo);
    }
}