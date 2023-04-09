class Teacher {
    #id
    #fullName
    #password
    #email
    #image
    constructor(id, fullName, email, password, image) {
        this.id = id
        this.fullName = fullName
        this.password = password
        this.email = email
        this.image = image
    }

    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }

    get fullName() {
        return this.#fullName
    }
    set fullName(value) {
        this.#fullName = value
    }

    get image() {
        return this.#image
    }
    set image(value) {
        this.#image = value
    }

    get password() {
        return this.#password
    }
    set password(value) {
        this.#password = value
    }

    get email() {
        return this.#email
    }
    set email(value) {
        this.#email = value
    }
}

module.exports = Teacher
