const BASE_URL = "http://localhost:5000/obras";
// -------------- CORRELACION DE SELECTS -----------

const categoriaSelect = document.getElementById("categoriaobra");
const imagenSelect = document.getElementById("imagen"); // Agrega el ID del segundo select

// Define las opciones de habitación para cada motel
const imagenOptions = {
    ceramica: ["ceramica-1.jpg", "ceramica-2.jpg", "ceramica-3.jpg"],
    pintura: ["pintura-1.jpg", "pintura-2.jpg", "pintura-3.jpg", "pintura-4.jpg"],
    fotografia: ["fotografia-1.webp", "fotografia-2.webp"],
    stickers: [],
    ilustracion: ["ilustracion-1.png", "ilustracion-2.jpg", "ilustracion-3.jpg"]
};

// Actualiza las opciones del segundo select cuando cambia el motel seleccionado
categoriaSelect.addEventListener("change", () => {
const selectedCategoria = categoriaSelect.value;
const imagenOptionsForCategoria = imagenOptions[selectedCategoria] || [];

// Limpia las opciones anteriores
imagenSelect.innerHTML = "";

// Agrega las nuevas opciones
imagenOptionsForCategoria.forEach((imagen) => {
    const option = document.createElement("option");
    option.value = imagen;
    option.textContent = imagen;
    imagenSelect.appendChild(option);
    });
});
// -------------------------------------------------

// -------------- VALIDACION DE FORM Y METODO POST ---------------

const form = document.getElementById('formulario')
const nombre = document.getElementById("nombreobra");
const artista = document.getElementById("artista");
const precio = document.getElementById("precioobra");

let params = new URLSearchParams(document.location.search);
let obra_id = params.get("obra_id");

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validarFormulario()
})

function validarFormulario() {
    if (nombre.value === "" || artista.value === "" || precio.value === 0 
        || categoriaSelect.value === "" || imagenSelect.value === "") {
        console.log("nombre: " + nombre.value);
        console.log("artista: " + artista.value);
        console.log("precio: " + precio.value);
        console.log("categoria: " + categoriaSelect.value);
        console.log("imagen: " + imagenSelect.value);
   
        alert("Por favor, completa todos los campos.");
        return false; // Detiene el envío del formulario
    }
    let valores_formulario = {
        nombre: nombre.value,
        artista: artista.value,
        precio: precio.value,
        categoria: categoriaSelect.value,
        imagen: imagenSelect.value
    }
    console.log(valores_formulario);

    
    fetchData(BASE_URL +"/create", "POST", (data_response) =>{
        document.querySelector("#formulario").reset();
        window.location.replace("misobras.html");
    },
    data_request=valores_formulario);
    return true;
}
