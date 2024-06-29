function numeroPerfecto(){
    let numero=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    numero=parseInt(numero)
    let suma=0
    for (let i=2; i<numero; i++) {
        if (numero%i===0) {
            break
        }
    }
    if (suma===numero) {
        resultado.innerHTML=numero+" es un número perfecto"
    } 
    else {
        resultado.innerHTML=numero+" no es un número perfecto"
   }
}