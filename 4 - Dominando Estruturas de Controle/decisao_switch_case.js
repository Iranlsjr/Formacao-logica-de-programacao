//estrutura de decisão 
// switch/case/break/default


let fruta = "morango"

switch (fruta){
    case "laranja":
        console.log("Suco de laranja.")
        break
    case "banana":
    case "morango":
        console.log("Vitamina de " + fruta)
        break
    case "maça":
        console.log("Suco de maça.")
        break

    default:
        console.log("Suco genérico.")
}