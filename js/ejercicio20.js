function pares() {
    let numeros=document.getElementById("n").value
    let numeros2=document.getElementById("n2").value
    let numeros3=document.getElementById("n3").value
    let resultado=document.getElementById("resultado")
    let arreglo=[parseInt(numeros), parseInt(numeros2), parseInt(numeros3)]
    let pares=[]
    for (let i=arreglo.length-1; i>=0; i--){
        if (arreglo[i]%2===0){
            pares.push(arreglo[i])
        }
    }
    resultado.innerHTML=pares.join(" ,")
}
