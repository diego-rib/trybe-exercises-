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
