export default class User {
    id: number
    email: string
    firstName: string
    lastName: string
    username: string
    password: string
    profilePic: string

<<<<<<< HEAD
    constructor (id: number, email: string, firstName: string, lastName: string, username: string, password: string) {
=======
    constructor (id: number, email: string, firstName: string, lastName: string, username: string, password: string, profilePic: string) {
>>>>>>> 858838ccfc95d200295f48955dafcbc752f0b616
        this.id = id
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
        this.username = username
        this.password = password
<<<<<<< HEAD
=======
        this.profilePic = profilePic
>>>>>>> 858838ccfc95d200295f48955dafcbc752f0b616
    }
}