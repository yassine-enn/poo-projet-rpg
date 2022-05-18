import {Character} from './character.ts';
import {Inventory} from './inventory.ts';
export class Thief extends Character {
inventory: Inventory;
    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, maxHealth : number, currentHealth : number, inventory : Inventory) {
        super(name, physicalAttack, physicalDefense, speed, maxHealth, currentHealth,0,0,0,"thief");
        this.inventory = inventory;
    }
    taxFraud(target: Character) : void {
        let rand = Math.floor(Math.random() * 10);
        if (rand < 4){
            console.log("vous n'aviez rien volé");
        }else if (rand < 7){
            console.log("vous avez volé 1 potion");
            this.inventory.numberOfPotions ++;
            
        }else if (rand < 9){
            console.log("vous avez volé 1 fragement d'étoile");
            this.inventory.numberOfStarFragments ++;
        }else if (rand === 9){
            console.log("vous avez volé 1 éther");
            this.inventory.numberOfEther ++;
        }else {
            console.log("vous avez volé 1  demi-étoile");
            this.inventory.numberOfHalfStars ++;
        }
    }
    attack2(target: Character) : void {
       return this.taxFraud(target); 
    }
}