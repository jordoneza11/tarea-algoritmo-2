function multiplosNumero() {
    let numeros=document.getElementById("n").value
    let numeros2=document.getElementById("n2").value
    let numeros3=document.getElementById("n3").value
    let resultado = document.getElementById("resultado");
    let arreglo=[numeros,numeros2,numeros3]
    let multiplo=[]
    for (let i=0; i<arreglo.length; i++){
        if (arreglo[i]%5===0){
            multiplo.push(arreglo[i])
        }
    }
    resultado.innerHTML=multiplo.join(" ,")
}


