export default class User {
    id: number
    email: string
    firstName: string
    lastName: string
    username: string

    constructor (id: number, email: string, firstName: string, lastName: string, username: string) {
        this.id = id
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
        this.username = username
    }
}