function criptografaTexto() {

    var textoCapturado = document.querySelector('input').value;
    var arrayTexto = textoCapturado.split('');
    var textoCriptografado;

    for (var i = 0; i < arrayTexto.length; i++) {

        if (arrayTexto[i] == 'a') {
            arrayTexto[i] = 'ai'
        }
        if (arrayTexto[i] == 'e') {
            arrayTexto[i] = 'enter'
        }
        if (arrayTexto[i] == 'i') {
            arrayTexto[i] = 'imes'
        }
        if (arrayTexto[i] == 'o') {
            arrayTexto[i] = 'ober'
        }
        if (arrayTexto[i] == 'u') {
            arrayTexto[i] = 'ufat'
        }
    }

    textoCriptografado = arrayTexto.join('');

    var exibeCripto = document.getElementById('msg');

    exibeCripto.value = textoCriptografado;
}

function converteTexto(textoCapturado){

    return textoCapturado.replaceAll('ai','a').replaceAll('enter','e').replaceAll('imes','i').replaceAll('ober','o').replaceAll('ufat','u');
}

var btnDescripografar = document.getElementById('btn-descripto');

btnDescripografar.addEventListener('click', function(e){
    e.preventDefault();

    var textoCapturado = document.getElementById('input-texto').value;

    var exibeDesCripto = document.getElementById('msg');
    
    exibeDesCripto.value = converteTexto(textoCapturado);
});

var btnCopy = document.getElementById('btn-copy');

btnCopy.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('msg').select();
    document.execCommand('copy');
});

var btnLimpa = document.getElementById('btn-limpa');

btnLimpa.addEventListener('click', function(){
    document.querySelector(".text-input").select();
    document.execCommand('delete');
    document.getElementById('msg').select();
    document.execCommand('delete');

});

var btnCripto = document.querySelector('#btn-cripto');

btnCripto.addEventListener('click', function (e) {
    e.preventDefault();

    criptografaTexto();
});
