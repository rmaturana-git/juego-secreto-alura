let numeroSecreto = 0;
let intentos = 0;
let mensajeIntentos = '';
let listaNumerosSorteados = [];
let numeroMaximo = 3;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    console.log('asignarTextoElemento');

    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    /*console.log(typeof(numeroDeUsuario))
    console.log(numeroDeUsuario);
    console.log(typeof(numeroSecreto))
    console.log(numeroSecreto);*/
    // triple igual (===) valida mismo valor y tipo
    //console.log(numeroSecreto === numeroDeUsuario);
    console.log('verificarIntento');

    mensajeIntentos = `${intentos} ${intentos===1 ? 'intento' : 'intentos'}`;
    if (numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p', `Sii, ese es el número. Lo lograste en ${mensajeIntentos}`);

        //document.getElementById('reiniciar').setAttribute('disabled',false);
        document.getElementById('reiniciar').disabled = false;
        document.getElementById('intentar').disabled = true;

    }else if(numeroSecreto > numeroDeUsuario){
        asignarTextoElemento('p', `El número secreto es MAYOR. Llevas ${mensajeIntentos}`);
        intentos++;
    }else{
        asignarTextoElemento('p', `El número secreto es MENOR. Llevas ${mensajeIntentos}`);
        intentos++;
    }
    limpiarCaja();
    return;
}

function limpiarCaja(){
    console.log('limpiarCaja');
    // con el símbolo gato (#) en el querySelector hacemos referencia al id del elemento
    // igual que con el getElementById
    document.querySelector('#valorUsuario').value = '';
    document.querySelector('#valorUsuario').focus();
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;
    
    console.log('generarNumeroSecreto');
    console.log(numeroGenerado);
    
    //si ya completaron todos los números sorteados
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', `Completamos la cantidad de números posibles (${numeroMaximo})`);
        document.getElementById("intentar").disabled = true;
        document.getElementById("reiniciar").disabled = false;
        listaNumerosSorteados = [];
        console.log(listaNumerosSorteados);
        return numeroGenerado;

        
    }
    else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            // se invoca a la misma función de manera recursiva. Debe llevar returm
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            console.log(listaNumerosSorteados);
            return numeroGenerado;
            }
    }

}

function condicionesIniciales(){
    console.log('condicionesIniciales');

    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Ingresa un número de 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    console.log('reinicarJuego');

    condicionesIniciales();
    //document.getElementById('reiniciar').setAttribute('disabled',true);
    //document.getElementById('intentar').setAttribute('disabled',false);
    
    document.getElementById("intentar").disabled = false;
    document.getElementById("reiniciar").disabled = true;

    limpiarCaja();
}

condicionesIniciales();