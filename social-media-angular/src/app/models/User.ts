export default class User {
    id: number
    email: string
    firstName: string
    lastName: string
<<<<<<< HEAD
    username: string

    constructor (id: number, email: string, firstName: string, lastName: string, username: string) {
=======
    userName: string

    constructor (id: number, email: string, firstName: string, lastName: string, userName: string) {
>>>>>>> a1493a4c1c8a7631a02edbb9f572e523456936f4
        this.id = id
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
<<<<<<< HEAD
        this.username = username
=======
        this.userName = userName;
>>>>>>> a1493a4c1c8a7631a02edbb9f572e523456936f4
    }
}