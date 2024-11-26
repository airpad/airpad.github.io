//Traer los elementos del DOM
entrada = document.getElementById("numero")
otraEntrada = document.getElementById("otroNumero")
btn =document.getElementById("btn")
salida = document.getElementById("resultado")
//Inicializando variables, van a esta altura para que todos las puedan usar
let numero = 0
let otroNumero = 0
//capturar los numeros desde el navegador
entrada.addEventListener("input", (evento)=>{
    numero = evento.target.value
})
otraEntrada.addEventListener("input", (evento) =>{
    otroNumero= evento.target.value
})
// creo la función de multiplicación
function multiplicacion(parametro,otroParametro){
    return parametro*otroParametro
}
// uso la función multiplicación cuando le doy click al boton y creo el elemento h3 y lo agrego como hijo a la salida
btn.addEventListener("click",()=>{
    resultado = multiplicacion(numero,otroNumero)
    let hijo = document.createElement("h3")
    hijo.innerHTML = `El resultado de ${numero}x${otroNumero} es ${resultado}`
    salida.appendChild(hijo)
})

let resultado=multiplicacion(5, 10)

console.log(resultado)
