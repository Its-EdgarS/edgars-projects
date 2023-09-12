class player  {
    constructor(name, health, atkDam) {
        this.name = name
        this.health = health
        this.atkDam = atkDam
    }

    strike(player, enemy, atkDam) {
        enemy.health -= Math.floor(Math.random() * atkDam)
    }

    heal() {

    }    
}