class Person {
    constructor(name) {
        this.name = name
    }

    intro() {
        return `my name is ${this.name}`
    }
}

module.exports = Person