let perfilDeArtista = document.querySelector('.perfil-de-artista');
let modeloPerfilArtista = perfilDeArtista.cloneNode(true);
perfilDeArtista.remove();

agregarPerfil();

function agregarPerfil(){
    fetch("https://melibarra15.github.io/cac-tpFront-g6/artistas.json")
    .then(response => response.json())
    .then(data => {
        for (i=0; i<data.length; i++){
            perfilArtista = modeloPerfilArtista.cloneNode(true);

            perfilArtista.querySelector("#foto-artista").src = "#";
            perfilArtista.querySelector("#nombre-artista").innerHTML = data[i].nombre
            
            let contenedor = buscadorDeSeccion(data[i].profesion);
            contenedor.appendChild(perfilArtista);
        }
        })
    .catch(error => console.log("Ocurrió un error! " + error));
}

function buscadorDeSeccion(seccion){
    switch (seccion){
        case 'escultura':
            contenedor = document.querySelector("#escultura");
            break;
        case 'fotografia':
            contenedor = document.querySelector("#fotografia");
            break;
        case 'ceramista':
            contenedor = document.querySelector("#ceramica");
            break;
        case 'ilustrador':
            contenedor = document.querySelector("#ilustracion");
            break;
        default:
            console.error("la profesion del artista no tiene una categoria correspondiente");
    }
    return contenedor;
}