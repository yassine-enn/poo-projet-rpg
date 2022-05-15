import {Character} from './character.ts';
import {Priestess} from './priestess.ts';
import {Warrior} from './warrior.ts';
import {Mage} from './mage.ts';
import {Thief} from './thief.ts';
import {Barbarian} from './barbarian.ts';
import {Paladin} from './paladin.ts';
export class GameManager {
    roomNumber : number = 5;
    team : Character[] = [];
        chooseTeam() : void {
            while (this.team.length !==3) {    
            let choice = prompt("Choose your team \n1. Priestess\n2. Warrior\n3. Mage\n4. thief\n5. barbian\n6. paladin\n")
            switch (choice) {
                case "1":
                    this.team.push(new Priestess("Priestess", 40, 10, 10, 100, 100, 100, 100));
                    console.log("You have chosen Priestess");
                    break;
                case "2":
                    this.team.push(new Warrior("Warrior", 85, 40, 25, 100, 100 ));
                    console.log("You have chosen Warrior");
                    break;
                case "3":
                    this.team.push(new Mage("Mage", 30, 10, 10, 100, 100, 100, 100,60));
                    console.log("You have chosen Mage");
                    break;
                case "4":
                    this.team.push(new Thief("thief", 60, 10, 50, 100, 100));
                    console.log("You have chosen Thief");
                    break;
                case "5":
                    this.team.push(new Barbarian("Barbian", 100, 15, 25, 110, 110));
                    console.log("You have chosen Barbarian");
                    break;
                case "6":
                    this.team.push(new Paladin("Paladin", 75, 50, 20, 100, 100));
                    console.log("You have chosen Paladin");
                    break;

                default:
                    alert("Invalid choice");}
        }
    }
}
let gameManager = new GameManager();
gameManager.chooseTeam();
let teamChosen = ""
for (let i = 0; i < gameManager.team.length; i++) {
 teamChosen += gameManager.team[i].name + " ";
}
console.log("Your team is:", teamChosen);