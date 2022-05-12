import {Character} from './character.ts';
export class Barbarian extends Character {
    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, maxHealth : number, currentHealth : number) {
        super(name, physicalAttack, physicalDefense, speed, maxHealth, currentHealth, 0, 0,0);
    }
    berzerk(target : Character) : void {
         target.currentHealth -= (this.physicalAttack-target.physicalDefense)*1.3;
         this.currentHealth -= this.maxHealth*0.8;
     }
     attack2(target : Character) : void {
        return this.berzerk(target); 
     }
 }