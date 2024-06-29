function convertir() {
    let cadena = document.getElementById("cadena").value;
    let resultado = document.getElementById("resultado");
    let nuevaCadena=""
    for (i=0; i<cadena.length; i++){
        let char = cadena[i];
        if (char >= 'a' && char <= 'z') {
            nuevaCadena += String.fromCharCode(char.charCodeAt(0) - 32);
        } else if (char >= 'A' && char <= 'Z') {
            nuevaCadena += String.fromCharCode(char.charCodeAt(0) + 32);
        } else {
            nuevaCadena += char;
        }

    }
    resultado.innerHTML=nuevaCadena
}
