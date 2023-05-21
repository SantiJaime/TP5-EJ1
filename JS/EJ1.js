let nroRandom = 0
let nroUser = 0
let input = document.getElementById("inputId")
let botonEnv = document.getElementById("botonEnv")
let botonIniciar = document.getElementById("botonIniciar")
let h2Id = document.getElementById("h2Id")
let oportunidades;

inputId.disabled = true
botonEnv.disabled = true

const iniciar = () => {
    oportunidades = 3
    h2Id.innerText = `Oportunidades restantes: ${oportunidades}`
    nroRandom = Math.round(Math.random() * 10)
    console.log("Juego iniciado", nroRandom)
    inputId.disabled = false
    botonEnv.disabled = false
}

inputId.addEventListener("input", (input) => {
    nroUser = parseInt(input.target.value)
})

const enviar = () => {
    if(nroUser === nroRandom){
        alert("Ganaste. Adivinaste el número")
    }
    else if(nroUser > nroRandom){
        alert("Perdiste. El número es menor al que ingresaste")
        inputId.value = ""
        h2Id.innerText = `Oportunidades restantes: ${--oportunidades}`
    }
    else if(nroUser < nroRandom){
        alert("Perdiste. El número es mayor al que ingresaste")
        inputId.value = ""
        h2Id.innerText = `Oportunidades restantes: ${--oportunidades}`
    }
    if(oportunidades < 3){
        botonIniciar.innerText = "Reiniciar juego"
    }
    if(oportunidades === 0){
        alert("Te quedaste sin oportunidades")
        inputId.value = ""
        inputId.disabled = true
        botonEnv.disabled = true
        botonIniciar.innerText = "Volver a intentar"
    }
}
