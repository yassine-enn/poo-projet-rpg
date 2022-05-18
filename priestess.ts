import {Character} from './character.ts';
export class Priestess extends Character {
    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, maxHealth : number, currentHealth : number, maxMana : number, currentMana : number) {
        super(name, physicalAttack, physicalDefense, speed, maxHealth, currentHealth, maxMana, currentMana,0,"priestess");
    }
    UwU(target : Character) : void {
        target.currentHealth += (this.currentHealth*0.25);
        this.currentMana -= 10;
    }
    attack2(target : Character) : void {
        return this.UwU(target);
    }
}