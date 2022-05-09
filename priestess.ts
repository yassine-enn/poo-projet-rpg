import {Character} from './character.ts';
class Priestess extends Character {
    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, maxHealth : number, currentHealth : number, maxMana : number, currentMana : number) {
        super(name, physicalAttack, physicalDefense, speed, maxHealth, currentHealth, maxMana, currentMana);
        this.maxMana = 100;
        this.currentMana = this.maxMana;
    }
    UwU(target : Character) : void {
        target.currentHealth += (this.currentHealth*0.25);
    }
    attack2(target : Character) : void {
        return this.UwU(target); 
     }
}