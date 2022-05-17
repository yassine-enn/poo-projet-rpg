import {Character} from './character.ts';
import {Menu} from './menu.ts';
import {Inventory} from './inventory.ts';
import{Priestess}  from './priestess.ts';
import {Paladin}    from './paladin.ts';
import {Warrior}      from './warrior.ts';
import {Monster}    from './monster.ts';
import {GameManager} from './gameManager.ts';
import {ChestRoom} from './chestRoom.ts';
import {CristianoPenaldo} from './cristiano.ts';

export class Fight {
    public teams : [Character[], Character[]] ;
    public revivable : Character[] ;
    public speedOrder : Character[] = [];
    public turn : number;
    public fightStatus : string | null;
    public allies : Character[] = [];
    public enemies : Character[] = [];
    private initialisation : boolean = true;
    constructor(teams : [Character[], Character[]], revivable : Character[]  ,speedOrder : Character[] , turn : number, fightStatus : string | null, allies : Character[], enemies : Character[]) {
        this.teams = teams;
        this.revivable = revivable;
        this.speedOrder = speedOrder;
        this.turn = turn;
        this.fightStatus = fightStatus;
        this.allies = allies;
        this.enemies = enemies;
    }
    public order() : void {
        for (let i = 0; i < this.teams.length; i++) {
            for (let j = 0; j < this.teams[i].length; j++) {
                this.speedOrder.push(this.teams[i][j]);
            }
            this.speedOrder.sort(function(a,b){return a.speed-b.speed});
            this.speedOrder.reverse();
        }
}
// character : Character,
    public startTurn(menu:Menu, inventory : Inventory): void {
        this.order();
        let lowestHealth : Character  = this.speedOrder[0];
        console.log("<<<<<<<<<< Characters >>>>>>>>>>")
        console.log("          HEROES :")
        for (let i=0; i<this.allies.length; i++) {
            console.log(`     ${this.allies[i].name}`);
        }
        console.log("          MONSTERS :")
        for (let i=0; i<this.enemies.length; i++) {
            console.log(`     ${this.enemies[i].name}`);
        }

        while (this.fightStatus === null) {
            console.log(1);
            
            this.fightStatusCheck();
            if (this.fightStatus === "over") {
                break;
            }
        for (let i = 0; i < this.speedOrder.length; i++) {
              for (let i = 0; i < this.enemies.length; i++) {
                if (this.enemies[i].currentHealth <= 0) {
                    this.enemies.splice(i,1);
                }
            }
            for (let i=0; i<this.allies.length; i++) {
                if (this.allies[i].currentHealth <= 0) {
                    this.revivable.push(this.allies[i]);
                    this.allies.splice(i,1);
                }
            }
            this.fightStatusCheck();
            //console.log(this.fightStatus);
            if(this.fightStatus === "over") {
                break;
            }else{
                if (this.speedOrder[i].isPlayable && this.speedOrder[i].currentHealth > 0) {
                    if (this.speedOrder[i].currentHealth < lowestHealth.currentHealth) {
                        lowestHealth = this.speedOrder[i];
                    }
                    if(this.initialisation) {
                        this.initialisation = false
                    }else{
                        inventory.displayInventory()
                    }
                    console.log(this.speedOrder[i].name+"\'s turn");
                    this.fightStatusCheck();
                    if(this.fightStatus === "over") {
                        break;
                    }else{
                        menu.chooseAction(this.speedOrder[i],inventory);
                    }
                }
                else if(!this.speedOrder[i].isPlayable && this.speedOrder[i].currentHealth > 0) {
                    console.log(this.speedOrder[i].name+" is playing");
                    this.fightStatusCheck();
                    if(this.fightStatus === "over") {
                        break;
                        }else{
                             let rand : number = Math.floor(Math.random() * 10)
                            if (rand < 2) {
                                this.speedOrder[i].attack(lowestHealth)
                            }
                            else{
                            this.speedOrder[i].attack(this.speedOrder[0])
                            if (this.speedOrder[0].currentHealth < lowestHealth.currentHealth) {
                                lowestHealth = this.speedOrder[0];
                            }
                            }
                        }
            }
            
        }
    
        if(this.allies.length === 0) {
            console.log("defeat !");
            break;
        }
        if(this.enemies.length === 0){
            console.log("victory !");
            break;
        }
        }
    }
}
    // public fightStatusCheck() : void {
    //     if (this.enemies.length === 0) {
    //         this.fightStatus = "victory";
    //     } else if (this.allies.length === 0) {
    //         this.fightStatus = "defeat";
    //     }
    // }
        public fightStatusCheck() : void {
        if (this.enemies.length === 0 || this.allies.length === 0) {
            this.fightStatus = "over";
    }
}
}





let monster1 = new Monster("monster1", 60, 30, 30, 100, 100);
let monster2 = new Monster("monster2", 60, 30, 31, 100, 100);
let monster3 = new Monster("monster3", 60, 30, 32, 100, 100);
let monster4 = new Monster("monster4", 60, 30, 30, 100, 100);
let monster5 = new Monster("monster5", 60, 30, 31, 100, 100);
let monster6 = new Monster("monster6", 60, 30, 32, 100, 100);
let monster7 = new Monster("monster7", 60, 30, 32, 100, 100);
let monster8 = new Monster("monster8", 60, 30, 32, 100, 100);
let monster9 = new Monster("monster9", 60, 30, 32, 100, 100);

let gameManager = new GameManager();
gameManager.chooseTeam();
let teamChosen = gameManager.team;
let team = ""
for (let i = 0; i < teamChosen.length; i++) {
 team += teamChosen[i].name + " ";
}
console.log("Your team is:", team);
let fight1 = new Fight([teamChosen, [monster1, monster2, monster3]],[],[], 0, null, teamChosen, [monster1, monster2, monster3]);

let menu = new Menu(fight1.teams);
let inventory = new Inventory(2,3,4,5);
inventory.displayInventory();

fight1.startTurn( menu, inventory);

for (let i = 0; i < fight1.allies.length; i++) {
    console.log(fight1.allies[i].name);
}
let chestRoom = new ChestRoom(fight1.allies, inventory);
chestRoom.openchest();
let fight2 = new Fight([fight1.allies, [monster4, monster5, monster6]],[],[], 0, null, fight1.allies, [monster4, monster5, monster6]);
let menu2 = new Menu(fight2.teams);
fight2.startTurn(menu2, inventory);
let chestRoom2 = new ChestRoom(fight2.allies, inventory);
chestRoom2.openchest();
let fight3 = new Fight([fight2.allies, [monster7, monster8, monster9]],[],[], 0, null, fight2.allies, [monster7,monster8,monster9]);
let menu3 = new Menu(fight3.teams)
fight3.startTurn(menu3, inventory);

