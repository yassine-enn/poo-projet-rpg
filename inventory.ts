export class Inventory {
    numPotions : number = 0;
    numStarFragments : number = 2;
    numHalfStars : number = 3;
    numEther : number = 4;

    constructor(potion : number, StarFragment : number, HalfStar : number, Ether : number){
        this.numPotions = potion;
        this.numStarFragments = StarFragment;
        this.numHalfStars = HalfStar;
        this.numEther = Ether;
        this.prompt();
    }

    /*tonumber() : number{
        /return `${this.1} ${this.2} : ${this.3} ${this.4}`;
    }*/

    prompt(){
        console.log("Mes Potions :" ,this.numPotions);
        console.log("Mes StarFragments :" ,this.numStarFragments);
        console.log("Mes HalfStars :" ,this.numHalfStars);
        console.log("Mes Ether :" ,this.numEther);
    }
    
}
let v :number = 0;
v++
let inventory1 = new Inventory (v,2,3,4);