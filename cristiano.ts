import {Character} from './character.ts';
export class CristianoPenaldo extends Character{
    isPlayable = false;
    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, maxHealth : number, currentHealth : number) {
        super(name, physicalAttack, physicalDefense, speed, maxHealth, currentHealth,0,0,0);
    }
    siuuu(target : Character) : void {
       target.currentHealth -= (this.physicalAttack-target.physicalDefense);
    }
    attack2(target : Character) : void {
        return this.siuuu(target); 
     }
}