class formaDeBolo {
  constructor(saborDaMassa, saborRecheio) {
    this.saborDaMassa = saborDaMassa;
    this.saborRecheio = saborRecheio;
  }
  //metodo
  escrever() {
    console.log(
      `Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`
    );
  }
  assar(){
    console.log("Assando bolo com " + this.saborDaMassa)
  }
}

let boloFesta = new formaDeBolo("massa de chocolate", "Nutella");
let boloPremium = new formaDeBolo("massa de Baunilha", "coco");

boloFesta.escrever()
boloPremium.assar()