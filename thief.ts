import {Character} from './character.ts';
class thief extends Character {
    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, maxHealth : number, currentHealth : number) {
        super(name, physicalAttack, physicalDefense, speed, maxHealth, currentHealth,0,0);
    }
    taxFraud(target: Character) : void {
        console.log("fraude fiscale")
    }
    attack2(target: Character) : void {
       return this.taxFraud(target); 
    }
}


let thief1 = new thief("thief", 10, 10, 50, 100, 100);
thief1.attack2(thief1)