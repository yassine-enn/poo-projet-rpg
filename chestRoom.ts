import { Character } from "./character.ts";
import {Inventory} from './inventory.ts';

export class ChestRoom {
    chooseCharacter : Character
    item1 : string | null = null;
    item2 : string | null = null;
    inventory : Inventory
    constructor(team : Character[], inventory : Inventory) {
        this.chooseCharacter = team[Math.floor(Math.random() * team.length)]
        this.inventory = inventory
    }
    openchest() {
        if (Math.floor(Math.random() * 2) === 0) {
            prompt('HOOO no the chest is trapped')
            this.chooseCharacter.currentHealth -= this.chooseCharacter.currentHealth * 0.1
            prompt(`player ${this.chooseCharacter.name} took damage`, "and has" + this.chooseCharacter.currentHealth + "health left")
        }else {
            switch (Math.floor(Math.random() * 4)) {
                case 0:
                    this.item1 = "potion"
                    this.inventory.numberOfPotions ++
                    break;
                case 1:
                    this.item1 = "starFragment"
                    this.inventory.numberOfStarFragments ++
                    break;
                case 2:
                    this.item1 = "ether"
                    this.inventory.numberOfEther ++
                    break;
                case 3:
                    this.item1 = "halfStar"
                    this.inventory.numberOfHalfStars ++
                    break;
            }
            switch (Math.floor(Math.random() * 4)) {
                case 0:
                    this.item2 = "potion"
                    this.inventory.numberOfPotions ++
                    break;
                case 1:
                    this.item2 = "starFragment"
                    this.inventory.numberOfStarFragments ++
                    break;
                case 2:
                    this.item2 = "ether"
                    this.inventory.numberOfEther ++
                    break;
                case 3:
                    this.item2 = "halfStar"
                    this.inventory.numberOfHalfStars ++
                    break;
            }
            prompt(`You found ${this.item1} and ${this.item2}`)
        }
    }
}
