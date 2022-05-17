import {Character} from './character.ts';
export class Monster extends Character {
    isPlayable = false;
    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, maxHealth : number, currentHealth : number) {
        super(name, physicalAttack, physicalDefense, speed, maxHealth, currentHealth,0,0,0,"monster");
    }
}