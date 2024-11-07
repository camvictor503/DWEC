
function suma(...args){
    var resultado = args.reduce((acc, numero) => acc + numero, 0);
    alert(resultado);
}

function resta(...args){
    var resultado = args.reduce((acc, numero) => numero - acc, 0);
    alert(resultado);
}

function resta(...args){
    var resultado = args.reduce((acc, numero) => numero * acc, 0);
    alert(resultado);
}

function calculadora() {

    var valores = document.getElementById("valores").value;
    var operacion = document.getElementById("operaciones").value;


    if (valores === "" || operacion === "") {
        alert("Completa ambas opciones para realizar el cálculo");
        return; 
    }

    var numeros = valores.split(",").map(Number);

    switch (operacion){
        case "suma":
            suma(...numeros);
            break;
        case "resta":
            resta(...numeros);
            break;
    }
    

   
}