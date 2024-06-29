function divisoresNumeros(){
    let numero=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    numero=parseInt(numero)
    for (let i=1; i<=numero; i++) {
        if (numero%i===0) {
        resultado.innerHTML=i+" es un divisor de "+numero
        }
    }
        
}