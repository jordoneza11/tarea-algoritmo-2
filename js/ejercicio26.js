function contarCaracteres() {
    let cadena = document.getElementById("cadena").value;
    let resultado = document.getElementById("resultado");
    let caracter="o"
    let contador=0
    for (let i=0; i<cadena.length; i++){
        if (cadena[i]===caracter){
            contador++
        }
    }
    resultado.innerHTML=contador
}
