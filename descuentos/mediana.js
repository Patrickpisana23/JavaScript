

const lista = [
    10,
    20,
    40,
    50,
    100
];

const media = parseInt(lista.length);


// si el array es par o impar
function imparopar(lista){
    if(lista.length%2==0){

        return true;
    }else{

        return false;
    }
}

function promediana(lista){
    if(imparopar(lista)==true){
        let var1 = lista[(media/2)-1];
        let var2 = lista[media/2];
        const mediana = (var1 + var2)/2;
        const med = document.getElementById("Mediana");
        med.innerText= "la mediana es: " + mediana;
        return mediana;
         

    }else{
        let var3 = lista[parseInt(media/2)];
        const me  = var3;  
        const med = document.getElementById("Mediana");
        med.innerText= "la mediana es: " + me;
        return me;
       
    }
}



 









