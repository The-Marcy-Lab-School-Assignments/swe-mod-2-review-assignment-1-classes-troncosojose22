// Problem 2: Composition - Team and Player
// Implement your Player and Team classes below

class Player {
    constructor(name, position, jerseyNumber) {
        this.name = name;
        this.position = position;
        this.jerseyNumber = jerseyNumber;
    }
}

class Team {
    #starters = [];
    #bench = [];

    constructor(name) {
        this.name = name;
    }

    get starters() {
        return [ ...this.#starters];
    }

    get bench() {
        return [ ...this.#bench];
    }

    addBenchPlayer(player) {
        this.#bench.push(player);
    }

    getPlayerCount() {
        return this.#bench.length + this.starters.length;
    }

    moveToBench(name) {
        const playerIndex = this.#starters.findIndex((starter) => starter.name === name);
        
        if(playerIndex !== -1) {
            this.#bench.push(this.#starters[playerIndex]);
            this.#starters.splice(playerIndex, 1);
            return true;
        }

        return false;
    }

    moveToStarters(name) {
        const playerIndex = this.#bench.findIndex((benched) => benched.name === name)

        if (playerIndex !== -1) {
            this.#starters.push(this.#bench[playerIndex]);
            this.#bench.splice(playerIndex, 1);
            return true;
        }

        return false;
    }
}

module.exports = { Player, Team };

