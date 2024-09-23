export default class Player {
    name: string;
    health: number;
    attackPower: number;
    defense: number;
    className: string; // Add className property

    constructor(name: string, className: string) { // Add className as a second argument
        this.name = name;
        this.className = className;
        this.health = 100;
        this.attackPower = 10;
        this.defense = 5;
    }

    attack(): void {
        console.log(`${this.name} attacks with power ${this.attackPower}!`);
    }

    takeDamage(damage: number): void {
        const actualDamage = Math.max(damage - this.defense, 0);
        this.health -= actualDamage;
        console.log(`${this.name} takes ${actualDamage} damage!`);
    }
}
