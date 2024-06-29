function determinarNumero() {
    let numero=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    if (numero>0){
        resultado.innerHTML="Su numero es positivo"
    }
    else if (numero<0){
        resultado.innerHTML="Su numero es negativo"
    }
    else {
        resultado.innerHTML="Su numero es igual a 0"
    }
    resultado.innerHTML += numeros
}
