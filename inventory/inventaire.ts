export class inventory {
    potions : number = 1;
    StarFragments : number = 2;
    HalfStars : number = 3;
    Ether : number = 4;

    constructor(){
        this.prompt();
    }

    /*tonumber() : number{
        /return `${this.1} ${this.2} : ${this.3} ${this.4}`;
    }*/

    prompt(){
        console.log("Mes Potions :" ,this.potions);
        console.log("Mes StarFragments :" ,this.StarFragments);
        console.log("Mes HalfStars :" ,this.HalfStars);
        console.log("Mes Ether :" ,this.Ether);
    }
    
}

let inventory1 = new inventory ()
inventory1.prompt()