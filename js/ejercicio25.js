function guiones() {
    let cadena = document.getElementById("cadena").value.trim();
    let resultado = document.getElementById("resultado");
    let cadenaModificada=""
    for (let i=0; i<cadena.length; i++){
        if (cadena[i]===""){
            cadenaModificada+="-"
        }
        else{
            cadenaModificada+=cadena[i]
        }
    }
    resultado.innerHTML=cadenaModificada
}
