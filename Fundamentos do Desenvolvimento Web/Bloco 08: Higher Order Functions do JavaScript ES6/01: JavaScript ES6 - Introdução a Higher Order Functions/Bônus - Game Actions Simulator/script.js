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

const damageDragon = () => dragon.damage = Math.floor(Math.random() * (dragon.strength - 15)) + 15;
const damageWarrior = () => warrior.damage = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength)) + warrior.strength;
const damageAndManaMage = () => {
  // damage: Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence)) + mage.intelligence,
  mage.mana -= 5;
  if (mage.mana > 15) {
    return Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence)) + mage.intelligence;
  } else {
    return `Mana insuficiente`;
  }
}
// console.log(damageWarrior());

const gameActions = {
  // Crie as HOFs neste objeto.
  warrior: (damageWarrior) => {
    warrior.damage = damageWarrior();
    dragon.healthPoints -= damageWarrior();
    
  },
  mage: (damageAndManaMage) => {
    if (damageAndManaMage() !== `Mana insuficiente`) {
      mage.damage = damageAndManaMage();
      dragon.healthPoints -= damageAndManaMage();
    }

  },
  dragon: (damageDragon) => {
    dragon.damage = damageDragon();
    warrior.healthPoints -= damageDragon();
    mage.healthPoints -= damageDragon();

  },
  result: () => battleMembers, 
};

gameActions.warrior(damageWarrior);
gameActions.mage(damageAndManaMage);
gameActions.dragon(damageDragon);
console.log(gameActions.result());
