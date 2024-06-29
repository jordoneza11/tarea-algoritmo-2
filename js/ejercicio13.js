function sumasMultiplicacion() {
    let numero1=document.getElementById("n1").value
    let numero2=document.getElementById("n2").value
    let resultado=document.getElementById("resultado")
    numero1=parseInt(numero1)
    numero2=parseInt(numero1)
    let resultadoo=0
    for (let i=0; i<numero2; i++) {
        resultadoo+=numero1
    }
    resultado.innerHTML="El resultado de la multiplicación es "+resultadoo
}
