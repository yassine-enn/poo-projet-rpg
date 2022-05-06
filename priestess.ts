import {Character} from './character.ts';
class Priestess extends Character {
    UwU(target : Character) : void {
        target.currentHealth += (this.currentHealth*0.25);
    }
}