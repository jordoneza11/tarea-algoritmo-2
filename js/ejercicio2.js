function contarNumeros() {
    let numero=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    let i=0
    let contador=0
    while (i<=numero){
        if (i%2===0){
            contador++
        }
    }
    resultado.innerHTML=contador
}
