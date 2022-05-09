import {Character} from './character.ts';
class ChristianoPenaldo extends Character{
    isPlayable = false;
    siuuu(target : Character) : void {
       target.currentHealth -= (this.physicalAttack-target.physicalDefense);
    } 
}