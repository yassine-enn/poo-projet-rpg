import {Character} from './character.ts';
class Barbian extends Character {
    berzerk(target : Character) : void {
         target.currentHealth -= (this.physicalAttack-target.physicalDefense)*1.3;
         this.currentHealth -= this.maxHealth*0.8;
     }
 }