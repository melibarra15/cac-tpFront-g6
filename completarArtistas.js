let perfilArtista = document.querySelector('.perfil-de-artista');
let modeloPerfilArtista = perfilArtista.cloneNode(true);

function agregarPerfil(){
    fetch("https://melibarra15.github.io/cac-tpFront-g6/datos.json")
    .then(response => response.json())
    .then(data => {
        
        })
    .catch(error => console.log("Ocurrió un error! " + error));
}