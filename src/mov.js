//Dispara um evento quando uma tecla é pressionada
window.addEventListener("keydown",keydownHandler);
//Dispara um evento quando uma tecla é liberada
window.addEventListener("keyup",keyupHandler);

//Evento disparado pela tecla pressionada
function keydownHandler(e){
    //Variável recebe o código da tecla pressionada
    var key = e.keyCode;
    //Esquerda
    if(key === LEFT && key !== RIGHT){
        moveEsquerda = true;
    }
    //Direita
    if(key === RIGHT && key !== LEFT){
        moveDireita = true;
    }
    //Para Cima
    if(key === UP && key !== DOWN){
        moveCima = true;
    }
    //Para Baixo
    if(key === DOWN && key !== UP){
        moveBaixo = true;
    }
        
}

//Evento disparado pela tecla liberada
function keyupHandler(e){
    //Variável recebe o código da tecla liberada
    var key = e.keyCode;
    //Esquerda
    if(key === LEFT && key !== RIGHT){
        moveEsquerda = false;
    }
    //Direita
    if(key === RIGHT && key !== LEFT){
        moveDireita = false;
    }
    //Para Cima
    if(key === UP && key !== DOWN){
        moveCima = false;
    }
    //Para Baixo
    if(key === DOWN && key !== UP){
        moveBaixo = false;
    }

}
    

//Função que atualiza o movimento e define os limites
function move(){
    //Move para a esquerda
    if(moveEsquerda){
        p1.x-=2;
    }
    //Move para a direita
    if(moveDireita){
        p1.x+= 2;
        
        
    }
    //Move para cima
    if(moveCima){
        p1.y-=2;
    }
    //Move para baixo
    if(moveBaixo){
        p1.y+=2;
    }
    //Limite de telas
    if( p1.x < 0){
        p1.x =- 0;
    }
    if(p1.y < 0){
        p1.y =- 0;
    }
    // Easter Egg do Buraco de minhoca
    if(p1.y === cnv.height - 100){
        alert("Não entre em Pânico!! Você entrou em um buraco de minhoca, sua nave se telestransportará!")
        document.location.reload(true);
    }
    if(p1.x >= 3500){
        moveDireita = false
        p1.x-=2;
    }
    
    
    //Atualizar a posição da câmera em função do char
    if(p1.x < cam.leftEdge()){
        cam.x = p1.x - (cam.width * 0.25);
    }
    if(p1.x + p1.width > cam.rightEdge()){
        cam.x = p1.x + p1.width - (cam.width * 0.75);
    }
    if(p1.y < cam.topEdge()){
        cam.y = p1.y - (cam.height * 0.25);
    }
    if(p1.y + p1.height > cam.bottomEdge()){
        cam.y = p1.y + p1.height - (cam.height * 0.75);
    }
    // Limite da camera
    if(cam.x < 0){
        cam.x = 0;
    }
    if(cam.y < 0){
        cam.y = 0;
    }
    if(cam.y + cam.height > gameWorld.height){
        cam.y = gameWorld.height - cam.height;
    }


}