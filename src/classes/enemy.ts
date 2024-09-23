export default class Enemy {
    name: string;
    health: number;
    attackPower: number;
    defense: number;

    constructor(name: string, health: number, attackPower: number, defense: number) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.defense = defense;
    }

    attack(): void {
        console.log(`${this.name} attacks with power ${this.attackPower}!`);
    }

    takeDamage(damage: number): void {
        const actualDamage = Math.max(damage - this.defense, 0);
        this.health -= actualDamage;
        console.log(`${this.name} takes ${actualDamage} damage!`);
    }

    isAlive(): boolean {
        return this.health > 0;
    }
}
