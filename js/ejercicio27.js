function eliminarCaracter() {
    let cadena = document.getElementById("cadena").value;
    let resultado = document.getElementById("resultado");
    let caracter="o"
    let nuevaCadena=""
    for (i=0; i<cadena.length; i++){
        if (cadena[i]!==caracter){
            nuevaCadena+=cadena[i]
        }
    }
    resultado.innerHTML=nuevaCadena
}
