import {Character} from './character.ts';
class Paladin extends Character {
    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, maxHealth : number, currentHealth : number) {
        super(name, physicalAttack, physicalDefense, speed, maxHealth, currentHealth,0,0);
    }
    deusVult(target : Character) : void {
         target.currentHealth -= (this.physicalAttack-target.physicalDefense)*0.4;
     }
 }