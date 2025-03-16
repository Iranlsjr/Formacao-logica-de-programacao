class heroi {
  constructor(nome,  tipo){
    this.nome = nome
    this.tipo = tipo

  }
    atacar(){
      console.log(
        `O ${this.nome} atacou usando ${this.tipo}.`
      )
    }

}

let mago =  new heroi("mago", "magia")
let guerreiro =  new heroi("guerreiro", "espada")
let monge =  new heroi("monge", "artes marciais")
let ninja =  new heroi("ninja", "shuriken")

mago.atacar();
guerreiro.atacar()
monge.atacar()
ninja.atacar()

