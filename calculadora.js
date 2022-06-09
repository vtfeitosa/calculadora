function calc() {
    let operando1 = parseInt(document.getElementById("operando1").value);
    let operando2 = parseInt(document.getElementById ("operando2").value);
    let operador = document.getElementById("operador").value;

    let result = 0;
    console.log(operador);
    if (operador == 'soma'){
        result = operando1 + operando2;
    }else if (operador == 'subtracao'){
        result = operando1 - operando2;
    }else if (operador == 'multiplicacao'){
        result = operando1 *operando2;
    }else if (operador == 'divisao'){
        result = operando1 / operando2;
    };

    document.getElementById("result").innerHTML = "Resultado:" + result;
    console.log(result);
}