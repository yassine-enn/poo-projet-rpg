import {Character} from './character.ts';
import {Inventory} from './inventory.ts';
import {Fight} from './fight.ts';

export class Menu {
    targetsList : Character[] 
    constructor(targetsList : Character[] ) {
        this.targetsList = targetsList;
    }
    chooseAttack(character : Character, target : Character) : void {
        let choice = prompt("Choose an attack: ");  
        switch (choice) {
            case "1":
                character.attack(target);
                console.log(target);
                
                break;
            case "2":
                character.attack2(target);
                break;
        }
    }
    useItem(character : Character, item : Inventory) : void {
        let choice = prompt("Choose an item: ");
        switch (choice) {
            case "1":
                if (item.numPotions > 0) {
                item.numPotions --;
                character.heal();
                } else {
                    console.log("You don't have any potions")
                }
                break;
            case "2":  
                if (item.numStarFragments > 0) {
                item.numStarFragments --;
                if (character.currentHealth !== 0){
                    character.heal();
                }else{
                    character.revive();
                }
                } else {
                    console.log("You don't have any star fragments")
                }
                break;
            case "3":
                if (item.numHalfStars > 0) {
                item.numHalfStars --;
                if (character.currentHealth !== 0){ 
                    character.heal();
                }else{
                character.revive();
                } 
            }else {
                console.log("You don't have any half stars")
            }
                break;
            case "4":
                if (item.numEther > 0) {
                item.numEther --;
                character.currentMana += 30;
                } else {
                    console.log("You don't have any ether")
                }
                break;
            }
        }
    chooseAction(character : Character, item : Inventory): void {
        let actionChoice = prompt("Choose an action: ");
        let i : number = 0
        let p =  prompt("Choose a target ") 
        if (p !== null) {
        i = parseInt(p) - 1;
        }
        switch (actionChoice) {
            case "1": 
            
            if (this.targetsList[i].currentHealth > 0) {
                this.chooseAttack(character,this.targetsList[i]);
                break;
            } else {
                this.chooseAttack(character,this.targetsList[i+1]);
                this.targetsList.splice(0,1);
            }
            case "2":
                this.useItem(character, item);
                break;
        }

    }
    
}

