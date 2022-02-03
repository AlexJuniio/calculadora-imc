
function calcular(){
    var altura = (document.getElementById("altura").value/100)
    var peso = document.getElementById("peso").value; 

    var imc = peso / altura ** 2;
    var text=""
    if (imc<18.5) {
    text="Você está abaixo do peso, seu imc é: " + imc.toFixed(2)
    }
    else if (imc<24.9){
    text="Você está com peso normal, seu imc é: " + imc.toFixed(2)
    }
    else if (imc<29.9){
    text = "Você está sobrepeso, seu imc é: " + imc.toFixed(2)
    }
    else if (imc<39.9) {
    text = "Você está com obesidade, seu imc é: " + imc.toFixed(2)
    }
    else if (imc>39.9) {
    text = "Você está com obesidade mórbida, seu imc é: " + imc.toFixed(2)
    }
    document.getElementById("text_area").innerText=text
}

