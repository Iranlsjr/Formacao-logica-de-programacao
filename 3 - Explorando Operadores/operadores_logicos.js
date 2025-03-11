// AND ( && )
// Exemplo 1
let  idade  = 18
let vistoVerificado = true
let resultado = (idade >= 18) && (vistoVerificado === true)
console.log(resultado)
// Exemplo 2 - Case sensitive "Estrela"
let moedasColetadas = 100
let item = "estrela"
resultado = (moedasColetadas === 100) && (item === "Estrela")
console.log(resultado)

// OR  ( || ) só podesair se tiver sem chuva ou com Guarda chuva
//Exemplo 1
let tempo = "chuva"
item = "guarda-chuva"
let podeSair = ( tempo !== "chuva") || (item === "guarda-chuva")
console.log("Nosso personagem pode sair? " + podeSair)
//Exemplo 2
tempo = "sol"
item = "guarda-chuva"
podeSair = ( tempo !== "chuva") || (item === "guarda-chuva")
console.log("Nosso personagem pode sair? " + podeSair)
//Exemplo 3 
tempo = "chuva"
item = "pá"
podeSair = ( tempo !== "chuva") || (item === "guarda-chuva")
console.log("Nosso personagem pode sair? " + podeSair)

// NOT   ( ! ) só podesair se tiver sem chuva ou com Guarda chuva
//Exemplo 1
tempo = "chuva"
resultado  = tempo === "chuva"
console.log(!resultado)
//Exemplo 2 - Invertendo a polaridade  
tempo = "chuva"
let horario = 8
resultado  = !((tempo !== "chuva") && (horario > 6))
console.log(resultado)
