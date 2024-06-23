let numeroSecreto= 0; // = numero a adivinar
let intentos = 0; //contador de turnos del usuario
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let listaTextoIntentos=["primera","segunda","tercera","cuarta","quinta","sexta","septima","octava","novena","decima","acertastes a la undecima o mas"];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto ;
    return;
}

function verificarIntento() {
    let numeroDeUruario = parseInt (document.getElementById("valorUsuario").value);
    if(numeroDeUruario===numeroSecreto){
        //console.log(listaTextoIntentos[intentos])
        asignarTextoElemento("p",`Felicidades acertastes en la ${listaTextoIntentos[intentos-1]} vez`);
        document.querySelector("#reiniciar").removeAttribute("disabled");
    }else{
        //el usuario no acerto
        if (numeroDeUruario<numeroSecreto){
            asignarTextoElemento("p","Es mayor");
        }else{
            asignarTextoElemento("p","Es menor");
        }
        intentos <= 9 ? intentos ++ : intentos = 10;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
     document.querySelector("#valorUsuario").value="";
     return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //console.log(listaNumerosSorteados);
    //console.log(numeroGenerado);
    //si ya sorteamos todos lo numero a adivinas
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","ya se sortiaron todos los numeros posibles")
    } else {
        // si el numero generado esta en la lista hacemos una operacion si no otra
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); //recursibilidads
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado ;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "juego del nùmero secreto");
    asignarTextoElemento("p", `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
    return;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de rango de numeros
    //inicialisar el numero de intentos
    //generar el numero alateorio
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true"); 
}
//lamada de la funcion que reinicia los valores del juego
condicionesIniciales();
