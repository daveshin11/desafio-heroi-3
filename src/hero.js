class Heroi {
  constructor(nome, idade, tipo, ataque) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = ataque;
  }

  atacar() {
    console.log(`O ${this.tipo} ${this.nome} de ${this.idade} atacou usando ${this.ataque}`);
  }
}

const heroi = new Heroi("Zed", 50, "Ninja", "Shuriken", "sombra");
heroi.atacar();