function divisionResta() {
    let numero1=document.getElementById("n1").value
    let resultado=document.getElementById("resultado")
    let numero2=document.getElementById("n2").value
    numero1=parseInt(numero1)
    numero2=parseInt(numero2)
    let cociente = 0
    while (numero1>=numero2) {
        numero1-=numero2
        cociente++
    }
    resultado.innerHTML="El cociente de la división es "+cociente
   
}
