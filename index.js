class hero {
  constructor(name, age, type) {
    const validTypes = ["Guerreiro", "Mago", "Monge", "Ninja"];
    if (!validTypes.includes(type)) {
      throw new Error("Tipo inválido de herói");
    }
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attackAct() {
    let attack;
    switch (this.type) {
      case "Mago":
        attack = "usou magia";
        break;
      case "Guerreiro":
        attack = "usou espada";
        break;
      case "Monge":
        attack = "usou Kung Fu Shaolin";
        break;
      case "Ninja":
        attack = "usou shuriken";
        break;
      default:
        attack = "realizou um ataque desconhecido";
    }
    console.log(`O ${this.type} atacou usando ${attack}`);
  }
}

let id01 = new hero("Bradock", 21, "Guerreiro");
let id02 = new hero("Cpt_Nascimento", 45, "Ninja");
let id03 = new hero("Aang", 112, "Monge")
id02.attackAct();
console.log ("----------------------------------");
id03.attackAct();
console.log ("----------------------------------");


