function parImpar() {
    let numero=document.getElementById("n").value
    let numeroo=parseInt(numero)
    let resultado=document.getElementById("resultado")
    if (numeroo%2===0){
        resultado.innerHTML=numero+" es par"
    }
    else{
        resultado.innerHTML=numero+" no es par"
    }
}
