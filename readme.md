# OOP Project : RPG 
## About the project
This project consists of creating an RPG game using TypeScript which is an object oriented coding language. The game will be playable on console by prompting the user anytime he needs to perform an action (eg: use potion, attack...). 
## About the game
The player will be asked to pick a team of 3 playable characters, that we will present to you later on, in order to complete a dungeon.  
The dungeon is divided in 5 rooms, the even rooms (1 and 3) are combat rooms in which the player will have to face groups of 3 monsters in order to advance to the next rooms. The odd rooms (2 and 4) are chest rooms in which the player will find a chest that may contain consumable items or may be trapped and result in a loss of a character's hp.  
The final room (5) is the boss room in which the player will have to fight the boss and 2 monsters.  
## Characters
### Playable Characters
* Priestess : has a basic attack and the ability to heal an ally for 25% of his max hp.
* Mage : has a basic attack and an AoE attack that deals magic damage and therefore ignores ennemy physical defense.
* Thief : has a basic attack and the ability to loot consumable items from ennemies.
* Warrior : only has a basic attack. 
* Barbarian : has a basic attack and the ability to deal considerable damage to a single target in exchange for a percentage of his max hp.
* Paladin : has a basic attack and an AoE physical attack. 
### Boss
* Penaldo : has a basic attack and the ability to deal AoE damage as he screams "SIUUU"
### Items
* Potion : restores 50% of target's max hp.
* Star Fragment : revives a target with 20% of his max hp, heals him by 50% of his max hp if he is still alive
* Half Star : revives a target with 50% of his max hp or restores all of his hp if he is still alive
* Ether : Restores 30% of max mana (mana users are the mage and the priestess)
## How to get the game
First of all, you need to clone this repository in order to get all the necessary files to run the game.  
```
git clone https://git.ytrack.learn.ynov.com/YENNOUHI/poo-projet-rpg.git
```
Make sure you've already installed deno before running the game following the installation guide in this link [Install Deno](https://deno.land/manual/getting_started/installation)  
Then you can run the game by typing this command in your terminal  
```
deno run gameManager.ts
```
### Course of the game
You will be asked to pick your team, once you've done that, at the begining each turn you'll be prompted to choose an action (use item or choose attack). The game ends if all of your characters die (bad ending) or once you beat the boss and his goons (good ending).
## Class diagram
<img src="https://www.zupimages.net/up/22/20/7z6f.png"
     alt="Class diagram"
     style="float: left; margin-right: 10px;" />  

## Contributors 
* Adrien RAYNAUD [Gitea](https://git.ytrack.learn.ynov.com/ARAYNAUD)
* Mostapha TOURABI [Gitea](https://git.ytrack.learn.ynov.com/MTOURABI1)
* Nathan BOURRY [Gitea](https://git.ytrack.learn.ynov.com/NBOURRY)
* Yassine ENNOUHI [Gitea](https://git.ytrack.learn.ynov.com/YENNOUHI)  