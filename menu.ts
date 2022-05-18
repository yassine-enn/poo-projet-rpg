import {Character} from './character.ts';
import {Inventory} from './inventory.ts';

export class Menu {
    targetsList : Character[][]
    choose : boolean = false
     choice : string | null = "";
    constructor(targetsList : Character[][] ) {
        this.targetsList = targetsList;
    }
    chooseAttack(character : Character, target : Character) : void {
        if ( character.name === "Priestess"){
            this.choice = prompt("Choose an attack: \n1. Attack \n2. Attack AOE \n3. Heal\n");
            while (this.choice !== "1"  && this.choice !== "3") {
                this.choice = prompt("Choose an attack: \n1. Attack \n3. Heal\n");
            }
        }else {
             this.choice = prompt("Choose an attack: \n1. Attack \n2. Attack AOE \n");
            while (this.choice !== "1" && this.choice !== "2") {
                this.choice = prompt("Choose an attack: \n1. Attack \n2. Attack AOE \n");
            }
        }
        switch (this.choice) {
            case "1":
                character.attack(target);
                break;
            case "2":
                if (character.name ==="Mage" || character.name ==="Paladin" && character.currentMana >= 10) {
                    character.attackAOE(this.targetsList[1]);
                    prompt(character.name + " has " + character.currentMana + " mana left");
                }else if (character.name ==="Mage" || character.name ==="Paladin" && character.currentMana < 10){
                    console.log("You don't have enough mana")
                    console.log("you use a normal attack");
                    character.attack(target);
                }else {
                     character.attack2(target);
                }
                break;
            case "3":
                let i : number = 0
                this.choose = false
                while(!this.choose){
                    let p =  prompt("Choose a target \n1. " + this.targetsList[0][i].name + "\n2. " + this.targetsList[0][i+1].name + "\n3. " + this.targetsList[0][i+2].name + "\n");
                    
                    if (p === "1" || p === "2" || p === "3") {
                        i = parseInt(p) - 1;
                        if (this.targetsList[0][i].alive && this.targetsList[0][i].currentMana>=10) {
                            character.attack2(this.targetsList[0][i])
                            prompt(this.targetsList[0][i].name + " has " + this.targetsList[0][i].currentMana + " mana left");
                            if (this.targetsList[0][i].currentHealth + character.currentHealth*0.25 > this.targetsList[0][i].maxHealth) {
                                this.targetsList[0][i].currentHealth = this.targetsList[0][i].maxHealth;
                            }
                           prompt( character.name + " uses heal on " + this.targetsList[0][i].name + " for " + character.currentHealth*0.25 + " health now has " + this.targetsList[0][i].currentHealth + " health left");
                            this.choose = true;
                        }else if (this.targetsList[0][i].alive && this.targetsList[0][i].currentMana < 10) {
                            prompt("You don't have enough mana")
                            prompt("you use a normal attack");
                            character.attack(target);
                            this.choose = true;
                        }else{
                            console.log("The character is dead")
                        }
                    }else{
                        console.log("Invalid choice")
                    }
                }
                break;
            default:
                console.log("Invalid choices");
        }
    }
    useItem(character : Character, item : Inventory) : void {
        item.displayInventory()
        let choice = prompt("Choose an item:  \n1. Potion \n2. Star Fragment \n3. Half Star \n4. Ether \n ");
        while (choice !== "1" && choice !== "2" && choice !== "3" && choice !== "4") {
            choice = prompt("Choose an item:  \n1. Potion \n2. Star Fragment \n3. Half Star \n4. Ether \n ");
        }
        switch (choice) {
            case "1":
                if (item.numberOfPotions > 0) {
                item.numberOfPotions --;
                character.heal();
                } else {
                    console.log("You don't have any potions")
                }
                break;
            case "2":  
                if (item.numberOfStarFragments > 0) {
                item.numberOfStarFragments --;
                if (character.currentHealth !== 0){
                    character.heal();
                }else{
                    character.revive();
                    character.currentHealth += 20;
                }
                } else {
                    console.log("You don't have any star fragments")
                }
                break;
            case "3":
                if (item.numberOfHalfStars > 0) {
                item.numberOfHalfStars --;
                if (character.currentHealth > 0){ 
                    character.currentHealth = character.maxHealth;
                    prompt(character.name + " has " + character.currentHealth + " health now");
                }else{
                character.currentHealth = character.maxHealth;
                prompt(character.name + " has been revived and has " + character.currentHealth + " health now");
                character.revive();
                } 
            }else {
                console.log("You don't have any half stars")
            }
                break;
            case "4":
                if (item.numberOfEther > 0) {
                item.numberOfEther --;
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
        console.log("\n");
        let actionChoice = prompt("Choose an action:  \n1. Attack \n2. Use an item\n");
        while (actionChoice !== "1" && actionChoice !== "2") {
            actionChoice = prompt("Choose an action:  \n1. Attack \n2. Use an item\n");
        }
        let i : number = 0
        this.choose = false
        switch (actionChoice) {
            case "1": 
                while(!this.choose){
                    let p =  prompt("Choose a target \n1. " + this.targetsList[1][i].name + "\n2. " + this.targetsList[1][i+1].name + "\n3. " + this.targetsList[1][i+2].name + "\n");
                    if (p === "1" || p === "2" || p === "3") {
                        i = parseInt(p) - 1;
                        if (this.targetsList[1][i].alive) {
                            this.choose = true
                        }else{
                            console.log("The monster is dead")
                        }
                    }else{
                        console.log("Invalid choice")
                    }
                }
                this.chooseAttack(character,this.targetsList[1][i]);
                break;
            case "2":
                let q =  prompt("Choose a target \n1. " + this.targetsList[0][i].name + "\n2. " + this.targetsList[0][i+1].name + "\n3. " + this.targetsList[0][i+2].name + "\n");
                while (q !== "1" && q !== "2" && q !== "3") {
                    q = prompt("Choose a target \n1. " + this.targetsList[0][i].name + "\n2. " + this.targetsList[0][i+1].name + "\n3. " + this.targetsList[0][i+2].name + "\n");
                }
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
