import Player from './player';

export default class Rogue extends Player {
    constructor(name: string) {
        super(name, 'Rogue');
        this.health = 90;
        this.attackPower = 15;
        this.defense = 7;
    }

    backstab(): void {
        console.log(`${this.name} performs a deadly backstab!`);
    }
}
