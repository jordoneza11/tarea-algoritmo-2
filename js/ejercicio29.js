function eliminarEspacios() {
    let cadena = document.getElementById("cadena").value
    let resultado = document.getElementById("resultado")
    let nuevaCadena=""
    for (let i=0; i<cadena.length; i++){
        if (cadena[i]!==" "){
            nuevaCadena+=cadena[i]
        }
    }
    resultado.innerHTML=nuevaCadena
}
