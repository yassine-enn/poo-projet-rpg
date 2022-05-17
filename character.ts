export  class Character {
    isPlayable : boolean = true;
    alive : boolean = true;
    name : string = "";
    physicalAttack : number = 0;
    physicalDefense : number = 0;
    speed : number = 0;
    maxHealth : number = 0;
    currentHealth : number = 0;
    maxMana : number = 0;
    currentMana : number = 0;
    magicAttack : number = 0;
    characterclass : string = "";
    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, maxHealth : number, currentHealth : number, maxMana : number, currentMana : number,magicAttack : number, characterclass : string) {
        this.name = name;
        this.physicalAttack = physicalAttack;
        this.physicalDefense = physicalDefense;
        this.speed = speed;
        this.maxHealth = maxHealth;
        this.currentHealth = currentHealth;
        this.maxMana = maxMana;
        this.currentMana = currentMana;
        this.magicAttack = magicAttack;
        this.characterclass = characterclass;
    }
    attack(target : Character) : void {
        target.currentHealth -= Math.min(this.physicalAttack-target.physicalDefense,0);
        console.log("physcial attack", this.physicalAttack);
        console.log("defense: " + target.physicalDefense);
        console.log("damage: " + (this.physicalAttack-target.physicalDefense));
        console.log(this.name + " attacks " + target.name + " with " + this.physicalAttack + " damage");
        console.log(target.name + " has " + target.currentHealth + " health left");
        if (target.currentHealth <= 0) {
            target.die();
        }
    }
    heal() : void {
        console.log("previous health: " + this.currentHealth);
        if(this.currentHealth + 50 > this.maxHealth) {
            this.currentHealth = this.maxHealth;
        }else {
        this.currentHealth += 50;
        }
        console.log(this.name + " heals for 50 health, and now has " + this.currentHealth + " health");
    }
    revive() : void {
    }
    attack2(target : Character) : void {
    }
    attackAOE(targets : Character[]) : void {
    }
    die() : void {
        if (this.currentHealth <= 0) {
            this.alive = false;
        }
        console.log(this.name + " is dead");
    }
    
}