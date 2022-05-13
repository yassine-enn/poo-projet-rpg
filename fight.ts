import {Character} from './character.ts';
import {GameManager} from './gameManager.ts';
import {Menu} from './menu.ts';
import {Inventory} from './inventory.ts';

export class Fight {
    public teams : [Character[], Character[]] ;
    public revivable : Character[] |null;
    public speedOrder : Character[] = [];
    public turn : number;
    public fightStatus : string | null;
    constructor(teams : [Character[], Character[]], revivable : Character[] | null ,speedOrder : Character[] , turn : number, fightStatus : string | null) {
        this.teams = teams;
        this.revivable = revivable;
        this.speedOrder = speedOrder;
        this.turn = turn;
        this.fightStatus = fightStatus;
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
    public startTurn(character : Character, menu:Menu, inventory : Inventory): void {
        this.order();
        while (this.fightStatus === null) {
            menu.chooseAction(character,inventory);
        for (let i = 0; i < this.speedOrder.length; i++) {
            if (character.isPlayable){
                if (this.teams[0][0].currentHealth <= 0) {
                    this.teams[0].splice(1);
                }
            }
            this.fightStatusCheck();
        }
    }
    }
    public fightStatusCheck() : void {
        if (this.teams[0].length === 0) {
            this.fightStatus = "victory";
            console.log("You won!");
            
        } else if (this.teams[1].length === 0) {
            this.fightStatus = "defeat";
        }
    }
}


let character4 = new Character("character4", 10, 10, 25, 100, 100,0,0,0);
let character5 = new Character("character5", 10, 10, 37, 100, 100,0,0,0);
let character6 = new Character("character6", 10, 10, 100, 100, 100,0,0,0);
let  gameManager =  new GameManager();
gameManager.chooseTeam();
let fight1 = new Fight([gameManager.Team, [character4, character5, character6]],null,[], 0, null);
fight1.order()

let menu = new Menu([character4, character5, character6]);
let inventory = new Inventory(2,3,4,5);
fight1.startTurn(gameManager.Team[0], menu, inventory);