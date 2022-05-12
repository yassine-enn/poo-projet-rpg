import {Character} from './character.ts';
export class Mage extends Character {
    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, maxHealth : number, currentHealth : number , maxMana : number, currentMana : number, magicAttack : number) {
        super(name, physicalAttack, physicalDefense, speed, maxHealth, currentHealth, maxMana, currentMana, magicAttack);
    }
    rasengan(target : Character) : void {
        target.currentHealth -= this.magicAttack;
    }
    attack2(target : Character) : void {
        return this.rasengan(target); 
     }
}