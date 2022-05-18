import {Character} from './character.ts';
export class Paladin extends Character {
    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, maxHealth : number, currentHealth : number, maxMana : number, currentMana : number) {
        super(name, physicalAttack, physicalDefense, speed, maxHealth, currentHealth,maxMana,currentMana,0,"paladin");
    }
    deusVult(targets : Character[]) : void {
        for (let i = 0; i < targets.length; i++) {
        targets[i].currentHealth -= (this.physicalAttack-targets[i].physicalDefense)*0.4;
        console.log(this.name + " uses deusVult on " + targets[i].name + " for " +(this.physicalAttack-targets[i].physicalDefense)*0.4  + " damage");
        console.log(targets[i].name + " has " + Math.max(targets[i].currentHealth,0) + " health left");
         }
         this.currentMana -= 10;
    }
     attackAOE(targets : Character[]) : void {
        return this.deusVult(targets); 
     }
}