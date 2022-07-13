const barCharizardHp = document.querySelector('.bar-1-hp');
const barBlastoiseHp = document.querySelector('.bar-2-hp');
const pointPlayer = document.querySelector('.point-player');
const pointCpu = document.querySelector('.point-cpu');
const btnAttack = document.querySelector('.btn-attack');
let puntosPlayer = 0;
let puntosCpu = 0;

class Pokemon {
  constructor(name, type, hp, damage) {
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.damage = damage;
  }
  attack(target) {
    target.hp -= this.damage;
  }
}

const blastoise = new Pokemon('Blastoise', 'water', 100, 10);
const charizard = new Pokemon('Charizard', 'fire', 100, 10);

btnAttack.addEventListener('click', () => {
  console.log('attack');
  blastoise.attack(charizard);
  barCharizardHp.style.width = charizard.hp + 'px';
  console.log(charizard.hp);
  console.log(barCharizardHp.style.width);
  console.log(barCharizardHp.style);

  if (barCharizardHp.style.width === '0px') {
    puntosPlayer++;
    pointPlayer.innerHTML = `${puntosPlayer}`;
    alert('Jugador 1 Gana');
    charizard.hp = 100;
    blastoise.hp = 100;
    barCharizardHp.style.width = 100 + 'px';
    barBlastoiseHp.style.width = 100 + 'px';
  }
});

setInterval(() => {
  charizard.attack(blastoise);
  barBlastoiseHp.style.width = blastoise.hp + 'px';
  if (barBlastoiseHp.style.width === '0px') {
    alert('Jugador 2 Gana');
    puntosCpu++;
    pointCpu.innerHTML = `${puntosCpu}`;
    charizard.hp = 100;
    blastoise.hp = 100;
    barCharizardHp.style.width = 100 + 'px';
    barBlastoiseHp.style.width = 100 + 'px';
  }
}, 2000);
