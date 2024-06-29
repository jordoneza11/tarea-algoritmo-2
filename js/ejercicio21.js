function cadena() {
    let cadena=document.getElementById("cadena").value
    let resultado=document.getElementById("resultado")
    for (let i=0; i<cadena.length; i++) {
        resultado.innerHTML += cadena[i] + "<br>"
    }
}

