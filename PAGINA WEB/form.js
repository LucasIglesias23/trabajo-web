let numcaptcha = document.getElementById('numcaptcha');
let btnrefresh = document.getElementById('refreshnum');
let aviso = document.getElementById('aviso');
let form = document.getElementById('form');

btnrefresh.addEventListener('click', refrescarnum);
form.addEventListener('submit', iniciarsesion);

let numrandom = Math.ceil((Math.random()*999999));
numcaptcha.innerHTML = numrandom;


function iniciarsesion(e) {
    e.preventDefault();
    let captcha = document.getElementById("ingcaptcha").value;
    if (captcha == numrandom) {
        let formdata = new FormData(form);
        let usuario = formdata.get('usuario');
        let contraseña = formdata.get('contraseña');
        console.log(usuario, contraseña);
        aviso.innerHTML = "Captcha realizado con éxito";
    }
     else {
        aviso.innerHTML = "Captcha incorrecto";
    }
}

function refrescarnum(e){
    e.preventDefault();
    numrandom = Math.ceil((Math.random()*999999));
    numcaptcha.innerHTML = numrandom;
}