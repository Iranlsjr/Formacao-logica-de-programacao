let resultado = soma(5, 5)

console.log("O resultado é: " +  resultado )

function  soma(numA, numB){
    let somatorio = numA + numB
    return somatorio
}
//Uso do splitChar
let userName = getFirstName("Iran-Bonfim", "-")
console.log("Seja bem vindo " + userName)

userName = getFirstName("Ronaldo Bonfim", " ")
console.log("Seja bem vindo " + userName)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}