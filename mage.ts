import {Character} from './character.ts';
export class Mage extends Character {
    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, maxHealth : number, currentHealth : number , maxMana : number, currentMana : number, magicAttack : number) {
        super(name, physicalAttack, physicalDefense, speed, maxHealth, currentHealth, maxMana, currentMana, magicAttack,"mage");
    }
    rasengan(targets : Character[]) : void {
        for (let i = 0; i < targets.length; i++) {
        targets[i].currentHealth -= this.magicAttack;
        console.log(this.name + " uses rasengan on " + targets[i].name + " for " + this.magicAttack + " damage");
        console.log(targets[i].name + " has " + Math.max(targets[i].currentHealth,0) + " health left");
        this.currentMana -=10;
        }
    }
    attackAOE(targets : Character[]) : void {
        return this.rasengan(targets); 
     }
}