const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: 0,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: 0,
};

const dragon = {
  healthPoints: 350,
  strength: 60,
  damage: 0,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = () => Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15);

const warriorDmg = () => Math.floor(Math.random() * ((warrior.strength * 2) - warrior.strength + 1) + warrior.strength);

const mageDmg = () => {
  if (mage.mana < 15) {
    return 0;
  } else {
    return Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1) + mage.intelligence)
  }
};


const gameActions = {
  turnWarrior: (warriorDmg) => {
    let damageDealt = warriorDmg();
    if (warrior.healthPoints <= 0) {
      damageDealt = 0;
    }
    dragon.healthPoints -= damageDealt;
    warrior.damage += damageDealt;
  },
  turnMage: (mageDmg) => {
    let damageDealt = mageDmg();
    if (mage.healthPoints <= 0) {
      damageDealt = 0;
    }
    if (mage.mana < 15) {
      console.log('Não possui mana suficiente');
      damageDealt = 0;
    } else {
      mage.mana -= 15;
    }
    dragon.healthPoints -= damageDealt;
    mage.damage += damageDealt;
  },
  turnDragon: (dragonDmg) => {
    let damageDealt = dragonDmg();
    if (dragon.healthPoints <= 0) {
      dragon.healthPoints = 0;
      damageDealt = 0;
    }
    if (damageDealt > warrior.healthPoints) {
      warrior.healthPoints = 0;
    } else {
      warrior.healthPoints -= damageDealt;
    }
    if (damageDealt > mage.healthPoints) {
      mage.healthPoints = 0;
    } else {
      mage.healthPoints -= damageDealt;
    }
    dragon.damage += damageDealt * 2;
  },
  finalState: () => {
    const battleMembers = {
      warrior: {},
      mage: {},
      dragon: {},
    };
    Object.assign(battleMembers.warrior, warrior);
    Object.assign(battleMembers.mage, mage);
    Object.assign(battleMembers.dragon, dragon);
    return battleMembers;
  },
  checkGame: () => {
    if (dragon.healthPoints <= 0 || (mage.healthPoints <= 0 && warrior.healthPoints <= 0)) {
      return false;
    }
    return true;
  },
};

const startGame = () => {
  let alive = true;
  let count = 1;
  console.log(`<--- Turno ${count - 1} --->\n`);
  console.log(gameActions.finalState());
  console.log();
  while (alive) {
    gameActions.turnWarrior(warriorDmg);
    gameActions.turnMage(warriorDmg);
    gameActions.turnDragon(dragonDmg);
    console.log(`<--- Turno ${count} --->\n`);
    console.log(gameActions.finalState());
    console.log();
    alive = gameActions.checkGame();
    count += 1;
  }
  if (dragon.healthPoints <= 0) {
    console.log('O guerreiro e o mago ganharam!!!');
  } else {
    console.log('O dragão ganhou!!!!');
  }
}

startGame();
