class Address {
    #city
    #street
    #building
    constructor(city, street, building) {
        this.city = city
        this.street = street
        this.building = building
    }

    get city() {
        return this.#city
    }
    set city(value) {
        this.#city = value
    }

    get street() {
        return this.#street
    }
    set street(value) {
        this.#street = value
    }

    get building() {
        return this.#building
    }
    set building(value) {
        this.#building = value
    }

    toJSON() {
        return {
            city: this.city,
            street: this.street,
            building: this.building,
        }
    }
}

module.exports = Address
