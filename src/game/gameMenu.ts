import inquirer from 'inquirer';
import Warrior from '../classes/Warrior';
import Mage from '../classes/Mage';
import Rogue from '../classes/Rogue';
import Player from '../classes/player';

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default class GameMenu {
    player: Player | null = null;

    async startGame(): Promise<void> {
        console.log('Welcome to the TypeScript RPG!');

        const { playerName } = await inquirer.prompt({
            type: 'input',
            name: 'playerName',
            message: 'Enter your character name:',
        });

        const { playerClass } = await inquirer.prompt({
            type: 'list',
            name: 'playerClass',
            message: 'Choose your class:',
            choices: ['Warrior', 'Mage', 'Rogue'],
        });

        // Assign player class based on selection
        this.player = this.createPlayer(playerName, playerClass);
        console.log(`Welcome, ${this.player.name} the ${this.player.className}!`);
        
        await this.mainMenu();
    }

    createPlayer(name: string, playerClass: string): Player {
        switch (playerClass) {
            case 'Warrior':
                return new Warrior(name);
            case 'Mage':
                return new Mage(name);
            case 'Rogue':
                return new Rogue(name);
            default:
                throw new Error('Invalid class selection');
        }
    }

    async mainMenu(): Promise<void> {

        const { action } = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Explore', 'View Stats', 'Quit'],
        });

        switch (action) {
            case 'Explore':
                console.log('You venture into the wilderness...');
                await delay(3000);
                break;
            case 'View Stats':
                this.viewStats();
                await delay(3000);
                break;
            case 'Quit':
                console.log('Goodbye!');
                process.exit();
        }

        await this.mainMenu(); // Re-display the menu
    }

    viewStats(): void {
        if (this.player) {
            console.log(`\nPlayer Stats:`);
            console.log(`Name: ${this.player.name}`);
            console.log(`Class: ${this.player.className}`);
            console.log(`Health: ${this.player.health}`);
            console.log(`Attack Power: ${this.player.attackPower}`);
            console.log(`Defense: ${this.player.defense}`);
        } else {
            console.log('No player found.');
        }
    }
}