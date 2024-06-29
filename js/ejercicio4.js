function edadd() {
    let edad=document.getElementById("edad").value
    let resultado=document.getElementById("resultado")
    if (edad>=18){
        resultado.innerHTML="Usted es mayor de edad"
    }
    else {
        resultado.innerHTML="Usted es menor de edad"
    }
}
