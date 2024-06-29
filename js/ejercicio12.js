function invertirNumero() {
    let numero=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    numero=parseInt(numero)
    let invertido=0
    while (numero!==0) {
        let digito=numero%10
        invertido=invertido*10+digito
        numero=Math.floor(numero/10)
    }
    resultado.innerHTML="El número invertido es "+invertido
}
