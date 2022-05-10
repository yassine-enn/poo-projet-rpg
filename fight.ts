import {Character} from './character.ts';
export class Fight {
    public teams : [Character[], Character[]] ;
    public revivable : Character[] |null;
    public speedOrder : Character[] = [];
    public turn : number;
    constructor(teams : [Character[], Character[]], revivable : Character[] | null ,speedOrder : Character[] , turn : number) {
        this.teams = teams;
        this.revivable = revivable;
        this.speedOrder = speedOrder;
        this.turn = turn;
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
    public startTurn(): void {
        
}

let character1 = new Character("character1", 10, 10, 50, 100, 100);
let character2 = new Character("character2", 10, 10, 65, 100, 100);
let character3 = new Character("character3", 10, 10, 15, 100, 100);
let character4 = new Character("character4", 10, 10, 25, 100, 100);
let character5 = new Character("character5", 10, 10, 37, 100, 100);
let character6 = new Character("character6", 10, 10, 100, 100, 100);

let fight1 = new Fight([[character1, character2, character3], [character4, character5, character6]],null,[], 0);
fight1.order()
console.log(fight1.speedOrder)

