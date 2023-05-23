enum AnimalType {
    CAT = "Cat",
    FROG = "Frog",
    HORSE = "Horse"
}

// parent class
class Animal {
    protected name: string
    protected type: AnimalType

    constructor(name: string, type: AnimalType) {
        this.name = name
        this.type = type
    }

    protected get _name(): string {
        return this.name
    }

    protected set _name(name: string) {
        this.name = name
    }

    public nameAndTypeFormat(): string {
        return `Animal with name: ${this.name} and type: ${this.type}`
    }
}

class Cat extends Animal {
    sound: string

    constructor(name: string, sound: string) {
        super("", AnimalType.CAT)
        this._name = name
        this.sound = sound
    }

    public makeSound(): void {
        console.log(`Name: ${this._name} Type: ${this.type} make a sound ${this.sound}`)
    }

    public nameAndTypeFormat(): string {
        return `Cat with name: ${this.name} and type : ${AnimalType.CAT}`
    }
}

class Frog extends Animal {
    sound: string

    constructor(name: string, sound: string) {
        super("", AnimalType.FROG)
        this._name = name
        this.sound = sound
    }

    public makeSound(): void {
        console.log(`Name: ${this._name} Type: ${this.type} make a sound ${this.sound}`)
    }

    public nameAndTypeFormat(): string {
        return `Frog with name: ${this.name} and type : ${AnimalType.FROG}`
    }
}

class Horse extends Animal {
    sound: string

    constructor(name: string, sound: string) {
        super("", AnimalType.HORSE)
        this._name = name
        this.sound = sound
    }

    public makeSound(): void {
        console.log(`Name: ${this._name} Type: ${this.type} make a sound ${this.sound}`)
    }

    public nameAndTypeFormat(): string {
        return `Horse with name: ${this.name} and type : ${AnimalType.HORSE}`
    }
}

let CAT: Cat = new Cat("Cat", "Miawwww")
let FROG: Frog = new Frog("Frog", "Tak katak katak")
let HORSE: Horse = new Horse("Horse", "Mbrrrrr")

HORSE.makeSound()