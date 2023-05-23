"use strict";
var AnimalType;
(function (AnimalType) {
    AnimalType["CAT"] = "Cat";
    AnimalType["FROG"] = "Frog";
    AnimalType["HORSE"] = "Horse";
})(AnimalType || (AnimalType = {}));
// parent class
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    get _name() {
        return this.name;
    }
    set _name(name) {
        this.name = name;
    }
    nameAndTypeFormat() {
        return `Animal with name: ${this.name} and type: ${this.type}`;
    }
}
class Cat extends Animal {
    constructor(name, sound) {
        super("", AnimalType.CAT);
        this._name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`Name: ${this._name} Type: ${this.type} make a sound ${this.sound}`);
    }
    nameAndTypeFormat() {
        return `Cat with name: ${this.name} and type : ${AnimalType.CAT}`;
    }
}
class Frog extends Animal {
    constructor(name, sound) {
        super("", AnimalType.FROG);
        this._name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`Name: ${this._name} Type: ${this.type} make a sound ${this.sound}`);
    }
    nameAndTypeFormat() {
        return `Frog with name: ${this.name} and type : ${AnimalType.FROG}`;
    }
}
class Horse extends Animal {
    constructor(name, sound) {
        super("", AnimalType.HORSE);
        this._name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`Name: ${this._name} Type: ${this.type} make a sound ${this.sound}`);
    }
    nameAndTypeFormat() {
        return `Horse with name: ${this.name} and type : ${AnimalType.HORSE}`;
    }
}
let CAT = new Cat("Cat", "Miawwww");
let FROG = new Frog("Frog", "Tak katak katak");
let HORSE = new Horse("Horse", "Mbrrrrr");
HORSE.makeSound();
