import {Character} from './character.ts';
import {Menu} from './menu.ts';
import {Inventory} from './inventory.ts';
import{Priestess}  from './priestess.ts';
import {Paladin}    from './paladin.ts';
import {Warrior}      from './warrior.ts';
import {Monster}    from './monster.ts';


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
        console.log("<<<<<<<<<< Personnages >>>>>>>>>>")
        for (let i = 0; i < this.speedOrder.length; i++) {
            if (i === 0){
                console.log("          HEROS :")
            }else if (i === 3) {
                console.log("          BAD MEN :")
            }
            console.log(`     ${this.speedOrder[i].name}`);
        }
        
        while (this.fightStatus === null) {
            // this.fightStatusCheck();
            // console.log(this.fightStatus);
            // menu.chooseAction(character,inventory);
            // for (let i = 0; i < this.enemies.length; i++) {
            //     if (this.enemies[i].currentHealth <= 0) {
            //         this.enemies.splice(i,1);
            //     }
            // }
            // for (let i=0; i<this.allies.length; i++) {
            //     if (this.allies[i].currentHealth <= 0) {
            //         this.revivable.push(this.allies[i]);
            //         this.allies.splice(i,1);
            //     }
            // }
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
            console.log(this.fightStatus);
            if(this.fightStatus === "over") {
                break;
            }else{
                if (this.speedOrder[i].isPlayable && this.speedOrder[i].currentHealth > 0) {
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

                        this.speedOrder[i].attack(this.speedOrder[0])
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



// let priestess1 = new Priestess("priestess", 10, 50, 50, 20, 100, 100, 100);
// let warrior1 = new Warrior("warrior", 100, 80, 55, 100, 100);
let paladin1 = new Paladin("paladin", 100, 80, 60, 100, 80);
let warrior1 = new Paladin("paladin2", 100, 80, 61, 100, 80);
let priestess1 = new Paladin("paladin3", 100, 80, 29, 100, 80);
let monster1 = new Monster("monster", 95, 30, 30, 100, 100);
let monster2 = new Monster("monster", 95, 30, 31, 100, 100);
let monster3 = new Monster("monster", 95, 30, 32, 100, 100);

let fight1 = new Fight([[priestess1, paladin1, warrior1], [monster1, monster2, monster3]],[],[], 0, null, [priestess1, paladin1, warrior1], [monster1, monster2, monster3]);


let menu = new Menu(fight1.teams);
let inventory = new Inventory(2,3,4,5);
inventory.displayInventory();
fight1.startTurn( menu, inventory);
