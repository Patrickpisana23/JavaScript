const lista1 = [
    100,
    200,
    300,
    500
];

const cantidad = lista1.length;
var total = 0;

for(var i = 0; i<cantidad;i++){
    var total = total + lista1[i];
}
function media (total, cantidad){
    var media= total/cantidad;

    console.log("La mediana es: " + media)

}

function calcularmediaritmetica(lista){
    const total = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento ){
            return valorAcumulado + nuevoElemento;

        }
    );    
    var media= total/cantidad;

    console.log("La mediana es: " + media)
}
 