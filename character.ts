export class Character {
    name : string = "";
    physicalAttack : number = 0;
    physicalDefense : number = 0;
    speed : number = 0;
    maxHealth : number = 0;
    currentHealth : number = 0;
    maxMana : number = 0;
    currentMana : number = 0;
    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, maxHealth : number, currentHealth : number, maxMana : number, currentMana : number) {
        this.name = name;
        this.physicalAttack = physicalAttack;
        this.physicalDefense = physicalDefense;
        this.speed = speed;
        this.maxHealth = maxHealth;
        this.currentHealth = currentHealth;
        this.maxMana = maxMana;
        this.currentMana = currentMana;
    }
    attack(target : Character) : void {
        target.currentHealth -= (this.physicalAttack-target.physicalDefense);
    }
    heal(target : Character) : void {
        
    }
    revive(target : Character) : void {
    }
    attack2(target : Character) : void {
    }
}