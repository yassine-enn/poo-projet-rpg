import {Character} from './character.ts';
export class Fight {
    public teams : [Character[], Character[]] ;
    public revivable : Character[];
    public speedOrder : Character[];
    public turn : number;
    constructor(teams : [Character[], Character[]], revivable : Character[],speedOrder : Character[], turn : number) {
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
}