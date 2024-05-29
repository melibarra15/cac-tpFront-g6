let objetoPintura = document.querySelector('.pintura');
let modeloObjetoPintura = objetoPintura.cloneNode(true);

function agregarObjeto(){
    fetch("https://melibarra15.github.io/cac-tpFront-g6/pinturas.json")
    .then(response => response.json())
    .then(data => {
        
        })
    .catch(error => console.log("Ocurrió un error! " + error));
}