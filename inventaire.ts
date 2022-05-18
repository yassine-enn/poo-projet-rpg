export class Inventory{
    numberOfPotions : number = 0;
    numberOfStarFragments : number = 0;
    numberOfHalfStars : number = 0;
    numberOfEther : number = 0;
    constructor(numberOfPotions : number, numberOfStarFragments : number, numberOfHalfStars : number, numberOfEther : number){
        this.numberOfPotions = numberOfPotions;
        this.numberOfStarFragments = numberOfStarFragments;
        this.numberOfHalfStars = numberOfHalfStars;
        this.numberOfEther = numberOfEther;
}
displayInventory() : void {
    for(var i = 0; i < 50; i++) {
        console.log("\n")
    }
    console.log("==============================\n          INVENTAIRE\n==============================")
    console.log("          Potions: " + this.numberOfPotions + "\n          Star Fragments: " + this.numberOfStarFragments + "\n          Half Stars: " + this.numberOfHalfStars + "\n          Ether: " + this.numberOfEther);
    console.log("==============================")
}   
}