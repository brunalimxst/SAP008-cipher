import cipher from "./cipher.js";

function cifrar() {
    let inputTextCifrar = document.querySelector('#textInput').value;
    let desloc = parseInt(document.querySelector('#desloc').value);
    
    if(inputTextCifrar == '' || desloc == '') {
        alert('Escreva uma mensagem e selecione o deslocamento!')
    } else {
        let cifra = cipher.encode(desloc, inputTextCifrar);
        let cifraMessage = document.querySelector('#resultado-encode');
        cifraMessage.innerHTML = cifra;
    }
}
let btnCifrar = document.querySelector('#btn-encriptar');
btnCifrar.addEventListener('click', cifrar);


function decifrar() {
    let inputTextDecifrar = document.querySelector('#textInput').value;
    let desloc = parseInt(document.querySelector('#desloc').value);

    if(inputTextDecifrar == '' || desloc == ''){
        alert('Escreva uma mensagem com letras MAIÚSCULAS e selecione o deslocamento')
    } else {
        let cifra = cipher.decode(desloc, inputTextDecifrar);
        let cifraMessage = document.querySelector('#resultado-decode');
        cifraMessage.innerHTML = cifra;
    }
}

let btnDecifrar = document.querySelector('#btn-descriptografar');
btnDecifrar.addEventListener('click', decifrar);