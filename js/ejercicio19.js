function nombres() {
    let nombre=document.getElementById("n").value
    let nombre2=document.getElementById("n2").value
    let nombre3=document.getElementById("n3").value
    let resultado=document.getElementById("resultado")
    let arreglo=[nombre,nombre2,nombre3]
    let arregloNombres=[]
    for (let i=0; i<arreglo.length; i++){
        if (arreglo[i]!=="Juan"){
            arregloNombres.push(arreglo[i])
        }
    }
    resultado.innerHTML=arregloNombres.join(" ,")
}
