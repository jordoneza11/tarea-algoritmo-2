function contarPalabras() {
    let cadena=document.getElementById("cadena").value.trim()
    let resultado = document.getElementById("resultado")
    let contador=1
    for (let i=0; i<cadena.length; i++) {
        if (cadena[i]===" "){
        contador++
        }
    }
    resultado.innerHTML=contador
}
 