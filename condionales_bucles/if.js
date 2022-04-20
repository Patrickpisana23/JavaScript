
var piedra=1;
var papel=2;
var tijera=3;

function juego1(a,b){
    if(a==1 && b==2){
        return console.log("Gano el jugador 2: Papel");
    }else if(a==1 && b==3){
        return console.log("Gano el jugador 1: Piedra"  );
    }else if(a==2 && b==3){
        return console.log("Gano el jugador 2: tijera"  );
    }

}

juego1(papel,tijera);