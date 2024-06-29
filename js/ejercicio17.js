function promedio() {
    let numeros=document.getElementById("n").value
    let resultado = document.getElementById("resultado");
    let arreglo=[]
    let suma=0
    for (let i=0; i<numeros.length; i++){
        let num=parseInt(numeros[i], 10)
        if (!isNaN(num)) {
            arreglo.push(num)
            suma+=num
        }
    }
    let promedio=suma/arreglo.length
    resultado.innerHTML=promedio
}
