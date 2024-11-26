const entrada = document.getElementById("entradaPar")
const btn = document.getElementById("btnPar")
const salida = document.getElementById("salida")

let numero
entrada.addEventListener("input", (evento)=>{
    console.log(evento.target.value)
    numero = evento.target.value
})

btn.addEventListener("click", ()=>{
    if(numero%2==0){
        // estoy creando un elemento
        let hijo = document.createElement("h3")
        hijo.innerHTML =`El número ${numero} es par`
        salida.appendChild(hijo)
    }else{
        let hijo = document.createElement("h3")
        hijo.innerHTML = "El número " + numero + " no es par"
        salida.appendChild(hijo)
    }
})