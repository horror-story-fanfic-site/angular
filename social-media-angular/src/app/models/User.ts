export default class User {
    id: number
    email: string
    firstName: string
    lastName: string
// <<<<<<< HEAD
//     userName: string

//     constructor (id: number, email: string, firstName: string, lastName: string, userName: string) {
// =======
    username: string

    constructor (id: number, email: string, firstName: string, lastName: string, username: string) {

        this.id = id
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
// <<<<<<< HEAD
//         this.userName = userName;
// =======
        this.username = username;
// 
    }
}