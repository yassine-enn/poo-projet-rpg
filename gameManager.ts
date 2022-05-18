import {Character} from './character.ts';
import {Priestess} from './priestess.ts';
import {Warrior} from './warrior.ts';
import {Mage} from './mage.ts';
import {Thief} from './thief.ts';
import {Barbarian} from './barbarian.ts';
import {Paladin} from './paladin.ts';
import {Menu}  from './menu.ts';
import {Fight} from './fight.ts';
import {Monster} from './monster.ts';
import {Inventory} from './inventory.ts';
import {ChestRoom} from './chestRoom.ts';
import {CristianoPenaldo} from './cristiano.ts';

export class GameManager {
    roomNumber : number = 5;
    team : Character[] = [];
    inventory = new Inventory(2,3,4,5);
        chooseTeam() : void {
            while (this.team.length !==3) {    
            let choice = prompt("Choose your team \n1. Priestess\n2. Warrior\n3. Mage\n4. Thief\n5. Barbarian\n6. Paladin\n")
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
                    this.team.push(new Thief("thief", 60, 10, 50, 100, 100,this.inventory));
                    console.log("You have chosen Thief");
                    break;
                case "5":
                    this.team.push(new Barbarian("Barbarian", 100, 15, 25, 110, 110));
                    console.log("You have chosen Barbarian");
                    break;
                case "6":
                    this.team.push(new Paladin("Paladin", 75, 50, 20, 100, 100,100,100));
                    console.log("You have chosen Paladin");
                    break;

                default:
                    alert("Invalid choice");}
        }
        }
        startgame()  :  void {
            let monster1 = new Monster("goblinMax", 60, 20, 30, 100, 10);
            let monster2 = new Monster("goblinAlex", 60, 20, 31, 100, 10);
            let monster3 = new Monster("goblinPaul", 60, 20, 32, 100, 10);
            let monster4 = new Monster("orcPierre", 70, 25, 30, 150, 15);
            let monster5 = new Monster("orcJulien", 70, 25, 31, 150, 15);
            let monster6 = new Monster("orcSeb", 70, 25, 32, 150, 15);
            let cristiano = new CristianoPenaldo("cristiano", 80, 45, 40, 200, 12);
            let monster8 = new Monster("PenaldoFanboy1", 60, 30, 32, 100, 10);
            let monster9 = new Monster("PenaldoFanboy2", 60, 30, 32, 100, 10);

            this.chooseTeam();
            let teamChosen = this.team;
            let team = ""
            for (let i = 0; i < teamChosen.length; i++) {
            team += teamChosen[i].name + " ";
            }
            console.log("Your team is:", team);
            let fight1 = new Fight([teamChosen, [monster1, monster2, monster3]],[],[], 0, "", teamChosen, [monster1, monster2, monster3]);


            let menu = new Menu(fight1.teams);
            this.inventory.displayInventory();
            fight1.startTurn( menu, this.inventory);
            for (let i = 0; i < fight1.allies.length; i++) {
                console.log(fight1.allies[i].name);
            }
            console.log("\n you go to the next room");
            let chestRoom = new ChestRoom(fight1.allies, this.inventory);
            chestRoom.openchest();
            console.log("\n you go to the next room");
            let fight2 = new Fight([fight1.allies, [monster4, monster5, monster6]],[],[], 0, "", fight1.allies, [monster4, monster5, monster6]);
            let menu2 = new Menu(fight2.teams);
            fight2.startTurn(menu2, this.inventory);
            console.log("\n you go to the next room");
            let chestRoom2 = new ChestRoom(fight2.allies, this.inventory);
            chestRoom2.openchest();
            console.log("\n You meet the boss");
            let fight3 = new Fight([fight2.allies, [cristiano, monster8, monster9]],[],[], 0, "", fight2.allies, [cristiano,monster8,monster9]);
            let menu3 = new Menu(fight3.teams)
            fight3.startTurn(menu3, this.inventory);
            console.log("\n VICTORY SIUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU!!!!!!!!!!!!");


    }
}
let gameManager = new GameManager();
gameManager.startgame();
