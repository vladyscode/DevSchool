class Warrior {
    constructor() {
        this.Level = 1;
        this.Experience = 100;
        this.Rank = "Pushover";
        this.Achievements = [];
        this.trainingCounter = 0;
    }

    level() {
        return this.Level;
    }

    experience() {
        return this.Experience;
    }

    rank() {
        return this.Rank;
    }

    achievements() {
        return this.Achievements;
    }

    battle(enemyLevel) {
        if (enemyLevel < 1 || enemyLevel > 100) {
            return "Invalid level";
        }

        const levelDifference = this.Level - enemyLevel;

        if (levelDifference === 0) {
            this.Experience += 10;
            this.updateLevel();
            return "A good fight";
        } else if (levelDifference === 1) {
            this.Experience += 5;
            this.updateLevel();
            return "A good fight";
        } else if (levelDifference >= 2) {
            return "Easy fight";
        } else if (levelDifference <= -5 && this.rankIndex() < this.rankIndex(enemyLevel)) {
            return "You've been defeated";
        } else {
            const expGained = 20 * levelDifference * levelDifference;
            this.Experience += expGained;
            this.updateLevel();
            return "An intense fight";
        }
    }

    training(trainingData) {
        this.trainingCounter++;
        const [description, expPoints, minLevel] = trainingData;
        if (this.Level >= minLevel) {
            this.Achievements.push(description);
            if (this.trainingCounter === 1) {
                return description;
            }
            this.Experience += expPoints;
            this.updateLevel();
            return description;
        } else {
            return "Not strong enough";
        }
    }

    updateLevel() {
        while (this.Level <= 100 && this.Experience > 100 * this.Level) {
            this.Level++;
            if (this.Level === 100) {
                this.Experience = 10000;
                this.Rank = "Greatest";
            } else {
                this.Rank = this.rankIndex();
            }
        }
    }

    rankIndex() {
        const rankNames = [
            "Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"
        ];
        //return Math.min(Math.floor, rankNames.length - 1);
        return rankNames[Math.floor(this.level()/10)];
    }
}

let bruce_lee = new Warrior();
console.log(bruce_lee.level());        // => 1
console.log(bruce_lee.experience());   // => 100
console.log(bruce_lee.rank());         // => "Pushover"
console.log(bruce_lee.achievements()); // => []
console.log(bruce_lee.training(["Defeated Chuck Norris", 9000, 1])); // => "Defeated Chuck Norris"
console.log(bruce_lee.experience());   // => 9100
console.log(bruce_lee.level());        // => 91
console.log(bruce_lee.rank());         // => "Master"
console.log(bruce_lee.battle(2));     // => "A good fight"
console.log(bruce_lee.level());
console.log(bruce_lee.experience());   // => 9105
console.log(bruce_lee.training(["Defeated Chuck Norris", 9000, 1])); // => "Defeated Chuck Norris"
console.log(bruce_lee.achievements()); // => ["Defeated Chuck Norris"]
console.log(bruce_lee.experience());   // => 9100
console.log(bruce_lee.level());
console.log(bruce_lee.rank());         // => "Master"
console.log(bruce_lee.battle(97));     // => "A good fight"
console.log(bruce_lee.experience());   // => 9100