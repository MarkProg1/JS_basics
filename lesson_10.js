/*
 * Повторение функции-конструкторы.
 * Классы. Статические свойства и методы.
 * геттеры и сеттеры.
 * наследование.
 */

// const Hero = function (name, xp) {
//     this.name = name;
//     this.xp = xp;
// };

// Hero.description = "This is a Hero base class";

// Hero.showStats = function (hero) {
//     console.log(hero);
// };

// Hero.prototype.changeName = function (name) {
//     this.name = name;
// };

// const mango = new Hero("Mango", 1000);

//console.log(mango);
//Hero.showStats(mango);

// Создание класса

class Hero {
    static description = "This is a Hero base class";

    static showStats(hero) {
        console.log(hero);
    }

    constructor(name, xp) {
        this._name = name;
        this.xp = xp;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    changeName(newName) {
        this._name = newName;
    }

    gainXp(amount) {
        console.log(`${this._name} получил ${amount} опыта.`);
        this.xp += amount;
    }
}

//наследование
class Warrior extends Hero {
    constructor(name, xp, weapon) {
        super(name, xp);
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} атакует используя ${this.weapon}`);
    }
}

const mango = new Hero("Mango", 1000);
console.log(mango);

const poly = new Warrior("Poly", 2000, "Алибарда");
console.log(poly);

poly.gainXp(1000);

// Hero.showStats(mango);

// mango.name = "Mangology";
// console.log(mango.name);
