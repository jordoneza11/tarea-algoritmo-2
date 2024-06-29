function serie() {
    let numero=document.getElementById("n").value
    let resultado=document.getElementById("resultado")
    numero=parseInt(numero)
    let a=0
    let b=1
    resultado.innerHTML=(a)
    resultado.innerHTML=(b)
    for (let i=2; i<numero; i++) {
        let c=a+b
        resultado.innerHTML=(c)
        a=b
        b=c
    }
}
