import { Character } from "./character.ts";
import { Menu } from "./menu.ts";
import { Inventory } from "./inventory.ts";

export class Fight {
  public teams: [Character[], Character[]];
  public revivable: Character[];
  public speedOrder: Character[] = [];
  public turn: number;
  public fightStatus: string ;
  public allies: Character[] = [];
  public enemies: Character[] = [];
  private initialisation: boolean = true;
  constructor(
    teams: [Character[], Character[]],
    revivable: Character[],
    speedOrder: Character[],
    turn: number,
    fightStatus: string ,
    allies: Character[],
    enemies: Character[],
  ) {
    this.teams = teams;
    this.revivable = revivable;
    this.speedOrder = speedOrder;
    this.turn = turn;
    this.fightStatus = fightStatus;
    this.allies = allies;
    this.enemies = enemies;
  }
  public order(): void {
    for (let i = 0; i < this.teams.length; i++) {
      for (let j = 0; j < this.teams[i].length; j++) {
        this.speedOrder.push(this.teams[i][j]);
      }
      this.speedOrder.sort(function (a, b) {
        return a.speed - b.speed;
      });
      this.speedOrder.reverse();
    }
  }

  // character : Character,
  public startTurn(menu: Menu, inventory: Inventory): void {
    this.order();
    console.log(this.speedOrder);
    let lowestHealth: Character = this.speedOrder[0];
    console.log("<<<<<<<<<< Characters >>>>>>>>>>");
    console.log("          HEROES :");
    for (let i = 0; i < this.allies.length; i++) {
      console.log(`     ${this.allies[i].name}`);
    }
    console.log("          MONSTERS :");
    for (let i = 0; i < this.enemies.length; i++) {
      console.log(`     ${this.enemies[i].name}`);
    }

    while (this.fightStatus !== "over") {
      this.fightStatusCheck();
      if (this.fightStatus === "over") {
        break;
      }
      for (let i = 0; i < this.speedOrder.length; i++) {
        this.speedOrder[i].die();
        this.fightStatusCheck();
        if (this.fightStatus === "over") {
          break;
        } else {
          if (
            this.speedOrder[i].isPlayable &&
            this.speedOrder[i].currentHealth > 0
          ) {
            if (this.speedOrder[i].currentHealth < lowestHealth.currentHealth && !this.speedOrder[i].alive) {
              lowestHealth = this.speedOrder[i];
            }
            if (this.initialisation) {
              this.initialisation = false;
            } else {
              inventory.displayInventory();
            }
            if (this.speedOrder[i].isPlayable) {
                prompt(this.speedOrder[i].name + " has " + this.speedOrder[i].currentHealth + " health left");
            }
            if (this.speedOrder[i].currentMana !== null ){
                prompt(this.speedOrder[i].name + " has " + this.speedOrder[i].currentMana + " mana left");
            }
            console.log(this.speedOrder[i].name + "'s turn");
            this.speedOrder[i].die
            this.fightStatusCheck();
            if (this.fightStatus === "over") {
              break;
            } else {
                menu.chooseAction(this.speedOrder[i], inventory);
                for (let i=0; i<this.speedOrder.length; i++){
                    this.speedOrder[i].die();
                    this.fightStatusCheck();
                    if (this.fightStatus === "over") {
                      break;
                    }
                }
            }
          } else if (
            !this.speedOrder[i].isPlayable &&
            this.speedOrder[i].currentHealth > 0
          ) {
            for (let i=0; i<this.speedOrder.length; i++){
                this.speedOrder[i].die();
                this.fightStatusCheck();
                if (this.fightStatus === "over") {
                  break;
                }
            }
            console.log(this.speedOrder[i].name + " is playing");
            this.speedOrder[i].die();
            this.fightStatusCheck();
            if (this.fightStatus === "over") {
              break;
            } else {
              let rand: number = Math.floor(Math.random() * 10);
              if (rand < 2) {
                for (let i=0; i<this.speedOrder.length; i++){
                    this.speedOrder[i].die();
                    this.fightStatusCheck();
                    if (this.fightStatus === "over") {
                      break;
                    }
                }
                this.speedOrder[i].attack(lowestHealth);
              } else {
                if (this.speedOrder[i].name === "cristiano" && rand < 5) {
                    this.speedOrder[i].attackAOE(this.allies);
                    for (let i=0; i<this.speedOrder.length; i++){
                        this.speedOrder[i].die();
                        this.fightStatusCheck();
                        if (this.fightStatus === "over") {
                          break;
                        }
                    }
                } else {
                    for (let i=0; i<this.speedOrder.length; i++){
                      this.speedOrder[i].die();
                      this.fightStatusCheck();
                      if (this.fightStatus === "over") {
                        break;
                      }
                  }
                  let rand1: number = Math.floor(Math.random() * 2);
                  this.speedOrder[i].attack(this.allies[rand1]);
                }
                if (this.allies[0].currentHealth < lowestHealth.currentHealth && this.allies[0].currentHealth > 0) {
                  lowestHealth = this.allies[0];
                }
                this.speedOrder[i].die();
              }
            }
          }
        }
      }
    }
  }
  public fightStatusCheck(): void {
    for (let i = 0; i < this.allies.length; i++) {
      if (this.allies[i].alive === false) {
          this.fightStatus = "over";
      }else{
          this.fightStatus = "";
          break;
      }
    }
    for (let i = 0; i < this.enemies.length; i++) {
      if (this.enemies[i].alive === false) {
          this.fightStatus = "over";
    }else if (this.enemies[i].alive === true) {
         this.fightStatus = "";
         break;
    }
}
}
}
