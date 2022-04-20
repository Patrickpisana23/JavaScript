
 


console.group("Cuadrado");
 
//const ladocuadrado  =5;
//console.log("Los lados del cuadrado miden: " + ladocuadrado+"cm")

function perimetrocuadrado(lado){
    return lado*4;
}

 
//console.log("El perimetro del cuadrdo es: " + perimetrocuadrado+"cm")

//const areacuadrado= ladocuadrado*ladocuadrado;
function areacuadrado(lado){
    return lado*lado;
}

//console.log("El área del cuadrdo es: " + areacuadrado+"cm2")

console.groupEnd();
//codigo de triangulo

 





console.groupEnd();


//Aqui interactuamos con el html

 //CUADRADO
function calcularperimetrocuadrado( ){
    const input = document.getElementById("inputcuadrado");
    const value = input.value;  
    

    const perimetro = perimetrocuadrado(value);

    alert(perimetro);

}

function calcularareacuadrado(){
    const input  = document.getElementById("inputcuadrado");
    const value = input.value;
   

    const area = areacuadrado(value);
     
    alert(area);

}

//TRIANGULO
function calcularlaalturadeltriangulo(){
    const input = document.getElementById("lado");
    const value = input.value;
    const inputa = document.getElementById("base");
    const base = inputa.value;

    const altura= Math.sqrt(value**2 - base**2/4);

    alert(altura);
}

function calcularPerimetroTriangulo(){
    const lado = document.getElementById("lado");
    const value = parseInt(lado.value);
    const base = document.getElementById("base");
    const a = parseInt(base.value);

    const peri= value*2 +a ;
    
    alert(peri);

}


function calcularAreaTriangulo(){
    const lado = document.getElementById("lado");
    const value = parseFloat(lado.value);
    const base = document.getElementById("base");
    const a = parseFloat(base.value);
    const d= parseFloat(Math.sqrt(value**2 - a**2/4));

    const da = (a*d)/2;

    alert(da);
}


//Circulo



function calcularPerimetrocirculo(){
    const radio= document.getElementById("radio");
    const value = parseFloat(radio.value);
    const PI = Math.PI;

    const per = 2*value*PI;

    alert(per);

}

function calcularAreacirculo(){
    const radio= document.getElementById("radio");
    const value = parseFloat(radio.value);
    const PI = Math.PI;
    const area = value**2*PI;

    alert(area);
}


