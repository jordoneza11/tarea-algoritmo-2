function invertirCadena() {
    let cadena=document.getElementById("cadena").value
    let resultado=document.getElementById("resultado")
    let cadenaInvertida=""
    for (let i=cadena.length-1; i>=0; i--){
        cadenaInvertida+=cadena[i]
    }
    resultado.innerHTML=cadenaInvertida
} 
