import {Character} from './character.ts';
class ChristianoPenaldo extends Character{
    siuuu(target : Character) : void {
       target.currentHealth -= (this.physicalAttack-target.physicalDefense);
    } 
}