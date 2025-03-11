let nomeHeroi = "Iran"
let quantidadeDeXP = 10.100
const textoHeroi = "O Herói de nome: "
const textoNivel = " está no nível "
let nivelHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]


if(quantidadeDeXP <= 1.000){
console.log( textoHeroi + nomeHeroi + textoNivel +  nivelHeroi[0])
}
else if ((quantidadeDeXP >= 1.001) && (quantidadeDeXP <= 2.000)){
console.log(textoHeroi  + nomeHeroi + textoNivel +  nivelHeroi[1])
}
else if((quantidadeDeXP >= 2.001) && (quantidadeDeXP <= 5.00)){
    console.log(textoHeroi + nomeHeroi + textoNivel + nivelHeroi[2])
} 
else if ((quantidadeDeXP >= 5.001) && (quantidadeDeXP <= 7.00)){
    console.log(textoHeroi + nomeHeroi + textoNivel + nivelHeroi[3])
}
else if((quantidadeDeXP >= 7.001) && (quantidadeDeXP <= 8.000)){
    console.log( textoHeroi + nomeHeroi + textoNivel + nivelHeroi[4])
} 
else if((quantidadeDeXP >= 8.001) && (quantidadeDeXP <= 9.000)){
    console.log(textoHeroi + nomeHeroi + textoNivel + nivelHeroi[5])
}
else if ((quantidadeDeXP >= 9.001) && (quantidadeDeXP <= 10.000)){
    console.log(textoHeroi + nomeHeroi + textoNivel + nivelHeroi[6])
}
else{ 
console.log("O Herói de nome: "  + nomeHeroi + " está no nível " +  nivelHeroi[7])
}
