import {Character} from './character.ts';
import {Inventory} from './inventory.ts';
import {Fight} from './fight.ts';

export class Menu {
    targetsList : Character[][]
    constructor(targetsList : Character[][] ) {
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
                if (character.characterclass ==="mage" || character.characterclass ==="paladin") {
                    character.attackAOE(this.targetsList[1]);
                }else{
                     character.attack2(target);
                }
                break;
            default:
                console.log("Invalid choice");
        }
    }
    useItem(character : Character, item : Inventory) : void {
        let choice = prompt("Choose an item:  \n1. Potion \n2. Star Fragment \n3. Half Star \n4. Ether \n ");
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
            default:
                console.log("Invalid choice");
            }
        }
    chooseAction(character : Character, item : Inventory): void {
        let actionChoice = prompt("Choose an action:  \n1. Attack \n2. Use an item\n");
        let i : number = 0
        switch (actionChoice) {
            case "1": 
            let p =  prompt("Choose a target \n1. " + this.targetsList[1][i].name + "\n2. " + this.targetsList[1][i+1].name + "\n3. " + this.targetsList[1][i+2].name + "\n");
            if (p !== null) {
               i = parseInt(p) - 1;
            }
                this.chooseAttack(character,this.targetsList[1][i]);
                break;
            } else {
                this.chooseAttack(character,this.targetsList[i+1]);
                this.targetsList.splice(0,1);
            }
            case "2":
                let q =  prompt("Choose a target \n1. " + this.targetsList[0][i].name + "\n2. " + this.targetsList[0][i+1].name + "\n3. " + this.targetsList[0][i+2].name + "\n");
                if ( q !== null) {
                   i = parseInt(q) - 1;
                }
                this.useItem(this.targetsList[0][i], item);
                break;
            default:
                console.log("Invalid choice");
        }

    }
    
}
