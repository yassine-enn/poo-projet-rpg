import {Character} from './character.ts';
import {Menu} from './menu.ts';
import {Inventory} from './inventory.ts';

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
        console.log(this.speedOrder);
        
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
                                if (this.speedOrder[i].name === "cristiano" && rand < 5) {
                                    this.speedOrder[i].attackAOE(this.enemies);
                                }
                                else {
                                    this.speedOrder[i].attack(this.allies[0])
                            }
                            if (this.allies[0].currentHealth < lowestHealth.currentHealth) {
                                lowestHealth = this.allies[0];
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
        public fightStatusCheck() : void {
        if (this.enemies.length === 0 || this.allies.length === 0) {
            this.fightStatus = "over";
    }
}
}
