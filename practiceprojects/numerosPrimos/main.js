//Traer los elementos del DOM
entrada = document.getElementById("numero")
btn =document.getElementById("btn")
salida = document.getElementById("resultado")
//Inicializando variables, van a esta altura para que todos las puedan usar
let numero = 0
//capturar los numeros desde el navegador
entrada.addEventListener("input", (evento)=>{
    numero = evento.target.value
})

function numeroPrimo(n){
    let esPrimo = false
    let cuenta =0
    if(n == 1){
        esPrimo = false
    }else{
        for (let i = 2; i<=n; i++){
            if(n%i==0){
                cuenta = cuenta + 1
            }
        }
        if(cuenta==1){
            esPrimo= true 
        }else{
            esPrimo=false
        }
    }
    return esPrimo
}

btn.addEventListener("click",()=>{
    resultado = numeroPrimo(numero)
    console.log(resultado)
    let hijo = document.createElement("h3")
    if(resultado){
        hijo.innerHTML =`El  ${numero} es primo`
    }else{
        hijo.innerHTML =`El  ${numero} no es primo`
    }
    salida.appendChild(hijo)

})