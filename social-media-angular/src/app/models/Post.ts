import PostEmoji from "./PostEmoji"
import User from "./User"

export default class Post {
    id: number
    text: string
    imageUrl: string
    author: User
    comments: Post[]
    profilePic: string
    postEmoji: PostEmoji[]

    constructor (id: number, text: string, imageUrl: string, author: User, comments: Post[], profilePic: User["profilePic"], postEmoji: PostEmoji[]) {
        this.id = id
        this.text = text
        this.imageUrl = imageUrl
        this.author = author
        this.comments = comments
        this.profilePic = profilePic
        this.postEmoji = postEmoji;
    }
}