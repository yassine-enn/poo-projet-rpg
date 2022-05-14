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
    console.log("Potions: " + this.numberOfPotions + "\nStar Fragments: " + this.numberOfStarFragments + "\nHalf Stars: " + this.numberOfHalfStars + "\nEther: " + this.numberOfEther);
}   
}