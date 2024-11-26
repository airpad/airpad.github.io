//Traer los elementos del DOM
entrada = document.getElementById("numero")
btn =document.getElementById("btn")
salida = document.getElementById("resultado")
//Inicializando variables, van a esta altura para que todos las puedan usar
let numero = 0
let fibo = [0,1]
//capturar los numeros desde el navegador
entrada.addEventListener("input", (evento)=>{
    numero = evento.target.value
})

//Función calcular el array de Fibonacci

function calcularFibo(n){
    if(n==0){
        fibo = [0]
    }else if(n==1){
        fibo =[0,1]
    }else{
        for( i =2;i<=n;i++){
            fibo[i]=fibo[i-1]+fibo[i-2]
        }
    }
    return fibo
}

console.log(calcularFibo(5))
btn.addEventListener("click",()=>{
    resultado = calcularFibo(numero)
    console.log(resultado)
    let hijo = document.createElement("h3")
    hijo.innerHTML =`La serie de Fibonacci del ${numero} es ${numero}`
    salida.appendChild(hijo)
})