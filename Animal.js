class Animal {
  constructor(nome) {
    if (this.constructor === Animal) {
      throw new Error("Classe abstrata não pode ser instanciada diretamente.");
    }
    this.nome = nome;
  }

  emitirSom() {
    throw new Error("Método abstrato 'emitirSom' deve ser implementado nas subclasses.");
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log(`${this.nome} Latindo!`);
  }
}

class Gato extends Animal {
  emitirSom() {
    console.log(`${this.nome} Miau!`);
  }
}


const cachorro1 = new Cachorro("Piloto");
const gato1 = new Gato("Massacote");
const cachorro2 = new Cachorro("Caramelo");


cachorro1.emitirSom();
gato1.emitirSom();
cachorro2.emitirSom();
