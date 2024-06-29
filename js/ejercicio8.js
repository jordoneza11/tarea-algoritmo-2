function paresNumeros(){  
    let numero=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    let numeroo=parseInt(numero)
    for (let i=1; i<=numeroo; i++) {
        if (numeroo%i===0) {
            resultado.innerHTML=i+" es par"
        }
    }     
}