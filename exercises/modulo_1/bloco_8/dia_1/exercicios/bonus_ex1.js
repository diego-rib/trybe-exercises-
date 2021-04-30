const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = () => Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15);

const warriorDmg = () => Math.floor(Math.random() * ((warrior.strength * 2) - warrior.strength + 1) + warrior.strength);

const mageDmg = () => {
  if (mage.mana < 15) {
    return 'Não possui mana suficiente';
  } else {
    mage.mana -= 15;
    return Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1) + mage.intelligence)
  }
};
