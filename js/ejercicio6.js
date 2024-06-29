function añoBisiesto() {
    let ao=document.getElementById("año").value
    let resultado=document.getElementById("resultado")
    if ((ao%4===0 && ao%100!==0) || ao%400===0) {
        resultado.innerHTML=ao+" es un año bisiesto"
    }
    else {
        resultado.innerHTML="Su año no es bisiesto"
    }
}