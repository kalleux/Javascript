'use strict'

const send = document.getElementById('send')

function ler () {
    const altu = Number( document.querySelector('.alt').value )
    const peso = Number( document.querySelector('.weight').value)
  
    CalcImc(altu,peso)

}


const CalcImc = (a,b) => {

    var ultimate = ""
    var operacao = (b / (a * a))
    var resul = (parseFloat(operacao.toFixed(2)))


    if (resul < 18.5){
        ultimate= "Magreza"
    }
    else if (resul >= 18.5 & resul <=24.9 ) {
        ultimate ="Normal"
    } 
    else if (resul > 25 & resul <= 30.0 ) {
        ultimate="Acima do peso"
    } 
    else {
        ultimate= "Smoke overthere"
    }

        EscreVer(resul,ultimate)

}

function EscreVer(a,b) {

        var resultado = document.querySelector('.resultado')
        resultado.innerHTML = `Seu IMC será ${a} <br> 
        Seu peso está ${b}` 

}


send.addEventListener('click',ler)




