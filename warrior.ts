import {Character} from './character.ts';
class Warrior extends Character {
    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, maxHealth : number, currentHealth : number) {
        super(name, physicalAttack, physicalDefense, speed, maxHealth, currentHealth,0,0);
    }
    attack2() {
        console.log("warrior n'a pas d'attaque speciale");
        
     }
}