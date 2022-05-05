class Character {
    name : string = "";
    physicalAttack : number = 0;
    physicalDefense : number = 0;
    speed : number = 0;
    maxHealth : number = 0;
    currentHealth : number = 0;
    attack(target : Character) : void {
        target.currentHealth -= (this.physicalAttack-target.physicalDefense);
    }
    heal(target : Character) : void {
        
    }
    revive(target : Character) : void {
    }
}
class Mage extends Character {
    magicAttack : number = 0;
    maxMana : number = 0;
    currentMana : number = 0;
    rasengan(target : Character) : void {
        target.currentHealth -= this.magicAttack;
    }
}
class Warrior extends Character {
}
class thief extends Character {
    taxFraud() : void {
    }
}
class Priestess extends Mage {
    UwU(target : Character) : void {
        target.currentHealth += (this.currentHealth*0.25);
    }
}
class Paladin extends Character {
   deusVult(target : Character) : void {
        target.currentHealth -= (this.physicalAttack-target.physicalDefense)*0.4;
    }
}
class Barbian extends Character {
   berzerk(target : Character) : void {
        target.currentHealth -= (this.physicalAttack-target.physicalDefense)*1.3;
        this.currentHealth -= this.maxHealth*0.8;
    }
}
class Monster extends Character {
}
class PristianoPenaldo extends Monster{
    siuuu(target : Character) : void {
       target.currentHealth -= (this.physicalAttack-target.physicalDefense);
    } 
}