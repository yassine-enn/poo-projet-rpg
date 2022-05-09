import {Character} from './character.ts';
class Mage extends Character {
    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, maxHealth : number, currentHealth : number , maxMana : number, currentMana : number) {
        super(name, physicalAttack, physicalDefense, speed, maxHealth, currentHealth, maxMana, currentMana);
        this.maxMana = 100;
        this.currentMana = this.maxMana;
    }
    magicAttack : number = 100;
    maxMana  = 100;
    currentMana = this.maxMana;
    rasengan(target : Character) : void {
        target.currentHealth -= this.magicAttack;
    }
    attack2(target : Character) : void {
        return this.rasengan(target); 
     }
}