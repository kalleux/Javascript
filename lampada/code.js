
const btn = document.getElementById('btn-1')
imagem = document.getElementById('lamp')
contx = 0

function lampON() {

    imagem.src = './img/ligada.jpg'
    contx = 1

}

function lampOFF () {
  

    imagem.src = './img/desligada.jpg'
    contx = 0


}


function verifica () {

if (contx == 0){
        lampON()

} 
else {
    lampOFF()
}

}





btn.addEventListener('click',verifica)















