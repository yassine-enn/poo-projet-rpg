import {Character} from './character.ts';

export class Menu {
    chooseAttack(character : Character) : void {
        let choice = prompt("Choose an attack: ");  
        switch (choice) {
            case "1":
                character.attack1();
                break;
            case "2":
                character.attack2();
                break;
            case "3":
                
    
}