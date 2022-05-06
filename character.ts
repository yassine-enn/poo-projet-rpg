export class Character {
    name : string = "";
    physicalAttack : number = 0;
    physicalDefense : number = 0;
    speed : number = 0;
    maxHealth : number = 0;
    currentHealth : number = 0;
    maxMana : number = 0;
    currentMana : number = 0;
    attack(target : Character) : void {
        target.currentHealth -= (this.physicalAttack-target.physicalDefense);
    }
    heal(target : Character) : void {
        
    }
    revive(target : Character) : void {
    }
}