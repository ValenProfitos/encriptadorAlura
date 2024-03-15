document.addEventListener('DOMContentLoaded', function () {
    const textoIngresado = document.getElementById('texto-encriptar');
    const textoTransformado = document.getElementById('texto-desencriptar');
    const btnEncriptar = document.getElementById('btn-encriptar');
    const btnDesencriptar = document.getElementById('btn-desencriptar');
    const btnBorrar = document.getElementById('btn-borrar');
    const btnBorrar2 = document.getElementById('btn-borrar-2');
    const btnCopiar = document.getElementById('btn-copiar');
    const cubierta = document.getElementById('cubierta');
    const imagenMuñeco = cubierta.querySelector('img');
    const mensaje1 = cubierta.querySelector('.message-1');
    const mesaje2 = cubierta.querySelector('.message-2');

    function encriptarTexto() {
        let texto = textoIngresado.value.trimStart();
        texto;
        texto = texto.replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat")
            .replace(/a/g, "ai");
        
        texto;

        textoTransformado.value = texto;
    }

    function desencriptarTexto() {
        let texto = textoIngresado.value;
        texto;
        texto = texto.replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u")
            .replace(/ai/g, "a");
        texto;

        textoTransformado.value = texto;
    }

    function validarTexo(texto) {
        const regex = /^[a-z]+$/;
        if (!regex.test(texto)) {
            alert('Por favor, ingresa solo letras minusculas sin acentos.');
            return false;
        };
        return true;
    }

    function borrarTexto() {
        textoIngresado.value = "";
        textoTransformado.value = "";
    }

    function mostrarContenido() {
        cubierta.style.display = 'block';
    }

    function ocultarContenido() {
        cubierta.style.display = 'none';
    }

    function copiarTexto() {
        textoTransformado.select();
        navigator.clipboard.writeText(textoTransformado.value)
            .then(() => {
                alert("Texto copiado al portapapeles");
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
                alert('Error al copiar el texto. Por favor, intentalo de nuevo más tarde.');
            });
    }

    btnEncriptar.addEventListener('click', ocultarContenido);
    btnEncriptar.addEventListener('click', encriptarTexto);

    btnDesencriptar.addEventListener('click', ocultarContenido);
    btnDesencriptar.addEventListener('click', desencriptarTexto);

    btnBorrar.addEventListener("click", function () {
        borrarTexto();
    });

    btnBorrar2.addEventListener('click', function () {
        mostrarContenido();
        borrarTexto();
    });

    btnCopiar.addEventListener('click', copiarTexto);
});
