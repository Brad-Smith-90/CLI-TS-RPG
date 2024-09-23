import Player from './player';

export default class Warrior extends Player {
    constructor(name: string) {
        super(name, 'warrior');
        this.health = 150;
        this.attackPower = 20;
        this.defense = 10;
    }
}
