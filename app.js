let texto = "";
let flag = false;
function contieneMayusculas(texto) {
    let valor = /[A-Z]/.test(texto);
    console.log(valor)
    return /[A-Z]/.test(texto);
}
  
  function contieneTildes(texto) {
    return /[áéíóúÁÉÍÓÚ]/.test(texto);
}

function verificar(texto){
    if(contieneMayusculas(texto) || contieneTildes(texto)){
        alert("Verifica el texto ingresado. No se permiten tildes o mayúsculas");
        return false;
    }else{
        return true;
    }
}

function encriptarTexto(){
    texto = document.querySelector('#textoOriginal').value;
    flag = verificar(texto);
    if(flag){
        let textoEncriptado = "";
        for(let i=0;i<texto.length;i++){
            switch(texto[i]){
                case 'a':
                    textoEncriptado+='ai';  
                    break;
                case 'e':
                    textoEncriptado+='enter';  
                    break;
                case 'i':
                    textoEncriptado+='imes';  
                    break; 
                case 'o':
                    textoEncriptado+='ober';  
                    break;
                case 'u':
                    textoEncriptado+='ufat';  
                    break;           
                default:
                    textoEncriptado+=texto[i];    
            }
        }
        mostrarResultado(textoEncriptado);
    }
}

function desencriptarTexto() {
    texto = document.querySelector('#textoOriginal').value;
    console.log(texto);
    flag = verificar(texto);
    if(flag){
        let textoDesencriptado = texto
                                    .replace(/enter/g, 'e')
                                    .replace(/imes/g, 'i')
                                    .replace(/ai/g, 'a')
                                    .replace(/ober/g, 'o')
                                    .replace(/ufat/g, 'u');

        mostrarResultado(textoDesencriptado);
    }
}

function mostrarResultado(texto) {
    let elementoResultado = document.querySelector('.mensaje_titulo');
    elementoResultado.innerHTML = texto;

    let elementoImagen = document.querySelector('.muneco');
    let elementoMensajeTexto = document.querySelector('.mensaje_texto');

    if (elementoImagen) {
        elementoImagen.style.display = 'none';
    }
    if (elementoMensajeTexto) {
        elementoMensajeTexto.style.display = 'none';
    }

    let contenedorMensajes = document.querySelector('.mensaje_contenedor');
    contenedorMensajes.style.justifyContent = 'flex-start';

    let botonCopiar = document.querySelector('#copiarTexto');
    botonCopiar.style.display = 'block';
}

function copiar() {
    let textoACopiar = document.querySelector('.mensaje_titulo').innerText;
    navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Texto copiado al portapapeles");
        resetearVista();
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

