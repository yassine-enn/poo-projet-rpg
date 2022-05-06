import {Character} from './character.ts';
class Paladin extends Character {
    deusVult(target : Character) : void {
         target.currentHealth -= (this.physicalAttack-target.physicalDefense)*0.4;
     }
 }