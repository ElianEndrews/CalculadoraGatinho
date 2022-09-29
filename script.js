const audio1 = new Audio('./audio/gato01.mp3');
const audio2 = new Audio('./audio/gato02.mp3');
const audio3 = new Audio('./audio/gato03.mp3');
const audio4 = new Audio('./audio/gato04.mp3');

function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    audio4.play();
}

function limpar(){
    document.getElementById('resultado').innerHTML = "";
    audio2.play();
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    audio1.play();
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    audio3.play();
    
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}