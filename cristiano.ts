import {Character} from './character.ts';
export class CristianoPenaldo extends Character{
    isPlayable = false;
    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, maxHealth : number, currentHealth : number) {
        super(name, physicalAttack, physicalDefense, speed, maxHealth, currentHealth,0,0,0,"penaldo");
    }
    siuuu(target : Character) : void {
        for (let i = 0; i < targets.length; i++) {
            targets[i].currentHealth -= (this.physicalAttack-targets[i].physicalDefense)*0.6;
            console.log("SIUUUUUUUUU");
            console.log("cristiano" + " uses siuuuu on " + targets[i].name + " for " +(this.physicalAttack-targets[i].physicalDefense)*0.6  + " damage");
            console.log(targets[i].name + " has " + targets[i].currentHealth + " health left");     }
    }
    attack2(target : Character) : void {
        return this.siuuu(target); 
     }
}