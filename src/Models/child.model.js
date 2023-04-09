const Level = require('./level')
const Address = require('./address')
class Child {
    #id
    #fullName
    #age
    #level
    #address
    constructor(id, fullname, age, level, address) {
        this.id = id
        this.age = age
        this.fullname = fullname
        this.level = level
        this.address = address
    }

    get level() {
        return this.#level
    }
    set level(value) {
        if (Object.values(Level).includes(value)) {
            this.#level = value
        } else {
            throw new Error('level should be one of Level object values')
        }
    }

    get address() {
        return this.#address
    }
    set address(value) {
        if (value instanceof Address) {
            this.#address = value
        } else {
            throw new Error(
                'address value should be an instance of Address class'
            )
        }
    }

    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }

    get fullname() {
        return this.#fullName
    }
    set fullname(value) {
        this.#fullName = value
    }

    get age() {
        return this.#age
    }
    set age(value) {
        this.#age = value
    }

    toJSON() {
        return {
            id: this.id,
            fullName: this.fullname,
            age: this.age,
            level: this.level,
            address: this.address,
        }
    }
}

module.exports = Child
