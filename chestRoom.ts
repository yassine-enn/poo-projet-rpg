import { GameManager } from "./gameManager.ts";
import { Character } from "./character.ts";

class ChestRoom {
    coffre : Chest
    chooseCharacter : Character
    constructor(team : Character[]) {
        this.coffre = new Chest();
        this.chooseCharacter = team[Math.floor(Math.random() * team.length)]
    }
    openchest() {
        if (this.coffre.trappedChest === true) {
            console.log('HOOO no the chest is trapped')
            console.log(`player ${this.chooseCharacter} took damage`)
            this.chooseCharacter.currentHealth -= this.chooseCharacter.currentHealth * 0.1
        }else {
            console.log(`You found ${this.coffre.item1} and ${this.coffre.item2}`)
            switch (this.coffre.item1) {
                case "potion":
                    numberOfPotions ++
                    break;
                case "starFragment":
                    numberOfStarFragments++
                    break;
                case "halfStar":
                    numberOfHalfStars ++
                    break;
                case "ether":
                    numberOfEther ++
                    break;
            }
            switch (this.coffre.item2) {
                case "potion":
                    numberOfPotions ++
                    break;
                case "starFragment":
                    numberOfStarFragments++
                    break;
                case "halfStar":
                    numberOfHalfStars ++
                    break;
                case "ether":
                    numberOfEther ++
                    break;
            }
        }

    }
}

class Chest {
    item1 : string | null = null ;
    item2 : string | null = null ; 
    trappedChest : boolean = false
    constructor() {
        if (Math.floor(Math.random() * 2) === 0) {
           this.trappedChest === true
        }else {
            switch (Math.floor(Math.random() * 4)) {
                case 0:
                    this.item1 = "potion"
                    break;
                case 1:
                    this.item1 = "starFragment"
                    break;
                case 2:
                    this.item1 = "ether"
                    break;
                case 3:
                    this.item1 = "halfStar"
            }
            switch (Math.floor(Math.random() * 4)) {
                case 0:
                    this.item2 = "potion"
                    break;
                case 1:
                    this.item2 = "starFragment"
                    break;
                case 2:
                    this.item2 = "ether"
                    break;
                case 3:
                    this.item2 = "halfStar"
                    break;
            }
        }

    }
}




