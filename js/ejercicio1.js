function suma() {
    let numero=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    let suma=0
    for (let i=1; i<=numero; i++){
        suma+=i
    }
    resultado.innerHTML=suma
}