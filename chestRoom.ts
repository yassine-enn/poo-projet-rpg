import { Character } from "./character.ts";

class ChestRoom {
    chooseCharacter : Character
    item1 : string | null = null;
    item2 : string | null = null;
    constructor(team : Character[]) {
        this.chooseCharacter = team[Math.floor(Math.random() * team.length)]
    }
    openchest() {
        if (Math.floor(Math.random() * 2) === 0) {
            console.log('HOOO no the chest is trapped')
            console.log(`player ${this.chooseCharacter.name} took damage`)
            this.chooseCharacter.currentHealth -= this.chooseCharacter.currentHealth * 0.1
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
            console.log(`You found ${this.item1} and ${this.item2}`)
            return this.item1, this.item2
        }
    }
}
