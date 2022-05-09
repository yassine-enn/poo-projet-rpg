import {Character} from './character.ts';
class CristianoPenaldo extends Character{
    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, maxHealth : number, currentHealth : number) {
        super(name, physicalAttack, physicalDefense, speed, maxHealth, currentHealth,0,0);
    }
    siuuu(target : Character) : void {
       target.currentHealth -= (this.physicalAttack-target.physicalDefense);
    } 
}