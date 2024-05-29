//validar formulario//

window.addEventListener('load', () => {

    const form = document.getElementById('formulario')
    const nombre = document.getElementById('nombre')
    const apellido = document.getElementById('apellido')
    const telefono = document.getElementById('telefono')
    const email = document.getElementById('email')
    const articulos = document.getElementById('cantidad-articulos')
    const artista = document.getElementById('artista')
    const descripcion = document.getElementById('descripcion')


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = () => {
        const nombreValor = nombre.value.trim()
        const apellidoValor = apellido.value.trim()
        const telefonoValor = telefono.value.trim()
        const emailValor = email.value.trim()
        const articulosValor = articulos.value.trim()
        const artistaValor = artista.value.trim()
        const descripcionValor = descripcion.value.trim();

        if (!nombreValor) {
            console.log('CAMPO VACÍO')
            validaFalla(nombre, 'Campo vacío')
        } else {
            validaOk(nombre)
        }

        if (!apellidoValor) {
            console.log('CAMPO VACÍO')
            validaFalla(apellido, 'Campo vacío')
        } else {
            validaOk(apellido)
        }

        if (!telefonoValor) {
            console.log('CAMPO VACÍO')
            validaFalla(telefono, 'Campo vacío')
        } else if (!validaTelefono(telefonoValor)) {
            validaFalla(telefono, 'Ingrese un número de teléfono válido.')
        } else {
            validaOk(telefono)
        }

        if (!emailValor) {
            validaFalla(email, 'Campo vacío')
        } else if (!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido.')
        } else {
            validaOk(email)
        }

        if (!articulosValor) {
            console.log('CAMPO VACÍO')
            validaFalla(articulos, 'Campo vacío')
        } else if (parseInt(articulosValor) <= 0) {
            validaFalla(articulos, 'Debe adquirir al menos un (1) artículo.')
        } else {
            validaOk(articulos)
        }

        if (!artistaValor) {
            console.log('CAMPO VACÍO')
            validaFalla(artista, 'Campo vacío')
        } else {
            validaOk(artista)
        }

        if (!descripcionValor) {
            console.log('CAMPO VACÍO')
            validaFalla(descripcion, 'Campo vacío')
        } else {
            validaOk(descripcion)
        }
    }

    const validaTelefono = (telefono) => {
        return /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/.test(telefono);
    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'Hay un error'

    }

    const validaOk = (input) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = '' 
        formControl.className = 'Todo ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

})

// pantalla de agradecimiento //

let button = document.getElementById("btn-comisiones");

function agradecer() {
    let gracias = document.getElementById("gracias");
    gracias.classList.add("agradecidas");
}

button.addEventListener("click", agradecer);