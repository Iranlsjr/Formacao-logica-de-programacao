let nomeHeroi = "Iran"
let resultado  =  soma(111, 10)

let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]
let nivelHeroi = nivelJogador(resultado, niveis)

console.log ("O Herói " + nomeHeroi + " tem de saldo de " + resultado + " vitórias está no nível " + nivelHeroi)

function soma(vitorias, derrotas){
    let saldoRanqueado = vitorias  - derrotas
    return saldoRanqueado
}

function nivelJogador(resultado, niveis){
    //Se vitórias for menor do que 10 = Ferro 0
     if(resultado <= 10){
        return niveis[0]
     }
     //Se vitórias for entre 11 e 20 = Bronze 1
     else  if ((resultado  >= 11) && (resultado <= 20)){ 
         return  niveis[1]
     }
     //Se vitórias for entre 21 e 50 = Prata 2
     else if((resultado  >= 21) && (resultado <= 50))
         return niveis[2]
    //Se vitórias for entre 51 e 80 = Ouro 3
     else if((resultado >=51) && (resultado <= 80))
        return niveis[3]
    //Se vitórias for entre 81 e 90 = Diamante 4
    else if ((resultado >= 81) && (resultado <= 90))
        return niveis[4]
    //Se vitórias for entre 91 e 100= Lendário 5
    else if ((resultado >= 91) && (resultado <= 100))
        return niveis[5]
    //Se vitórias for maior ou igual a 101 = Imortal 6
    else ((resultado >= 101))
    return niveis[6]
}