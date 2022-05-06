import {Character} from './character.ts';
class Mage extends Character {
    magicAttack : number = 0;
    rasengan(target : Character) : void {
        target.currentHealth -= this.magicAttack;
    }
}