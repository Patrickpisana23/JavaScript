

//const precioOriginal =120;
//const descuento =18;

function calcularPrecioConDescuento(precio , descuento){
    const porcentajePrecioconDescuento = 100-descuento;

    const precioConDescuento = (precio *porcentajePrecioconDescuento)/100;

    return precioConDescuento;
}

function ResultPrecionConDescuento(){
    const Inputprice=document.getElementById("InputPrice"); 
    const priceValue=Inputprice.value;   


    const InputDiscount=document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;
    const precioconDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const ResultP=document.getElementById("ResultP");
    ResultP.innerText="el precio es "+precioconDescuento;
    const ga = document.getElementById("ga");
    ga = innerText = "Estamos finos";

}

 


 