function contarLongitud() {
    let cadena = document.getElementById("cadena").value;
    let resultado = document.getElementById("resultado");
    let palabraActual = "";
    let longitudMaxima = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === " " || i === cadena.length - 1) {
            if (i === cadena.length - 1) {
                palabraActual += cadena[i];
        }
            if (palabraActual.length > longitudMaxima) {
                longitudMaxima = palabraActual.length;
        }
            palabraActual = "";
        } else {
            palabraActual += cadena[i];
        }
    }
    resultado.innerHTML=longitudMaxima
}
