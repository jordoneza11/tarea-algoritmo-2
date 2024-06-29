function mayorElemento() {
    let numeros=document.getElementById("n").value
    let numeros2=document.getElementById("n2").value
    let numeros3=document.getElementById("n3").value
    let resultado=document.getElementById("resultado")
    let arreglo=[numeros,numeros2,numeros3]
    let mayor=arreglo[0]
    for (let i=1; i<arreglo.length; i++) {
        if (arreglo[i]>mayor) {
        mayor=arreglo[i]
        }
    }

    resultado.innerHTML=mayor
}

