import Player from './player';

export default class Mage extends Player {
    constructor(name: string) {
        super(name, 'Mage');
        this.health = 80;
        this.attackPower = 25;
        this.defense = 3;
    }

    castSpell(): void {
        console.log(`${this.name} casts a powerful spell!`);
    }
}
