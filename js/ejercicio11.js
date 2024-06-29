function numeroPrimo() {
    let numero=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    numero=parseInt(numero)
    let esPrimo=true
    for (let i=2; i<numero; i++) {
        if (numero%i===0) {
            esPrimo=false
            break
        }
    }
    if (esPrimo) {
        resultado.innerHTML=numero+" es un número primo"
    } 
    else {
        resultado.innerHTML=numero+" no es un número primo"
    }
}
