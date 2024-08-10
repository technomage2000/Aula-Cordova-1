function carregou() {
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML = 'A página carregou!';

    document.addEventListener('deviceready', dispositivoPronto, true);
    document.addEventListener('pause', pausado, true);
    document.addEventListener('resume', retorno, true);
}

function dispositivoPronto() {
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML += '<br>O dispositivo está pronto!';
}  

function pausado() {
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML += '<br>O dispositivo está pausado!';
}

function retorno() {
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML += '<br>Retorno';
}