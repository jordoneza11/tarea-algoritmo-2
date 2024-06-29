function mayorNumeros(){
    let numero1=document.getElementById("n1").value
    let numero2=document.getElementById("n2").value
    let numeroo1=parseInt(numero1)
    let numeroo2=parseInt(numero2)
    let resultado=document.getElementById("resultado")
    if (numeroo1>numeroo2) {
        resultado.innerHTML=numeroo1+" es mayor que "+numeroo2
    } 
    else if (numeroo1<numeroo2) {
        resultado.innerHTML=numeroo2+" es mayor que "+numeroo1
    } 
    else {
        resultado.innerHTML="Sus numeros son iguales"
    }
        
}