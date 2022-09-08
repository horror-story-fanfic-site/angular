import Post from "./Post";
import User from "./User";

export default class Profile {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    profilePic: string;
    description: string;
    birthDay: string;
    birthMonth: string;
    birthYear: string;
    posts: Post[];
    followers: User[];
    peopleFollowed: User[];

    constructor (id:number, email:string, firstName:string, lastName:string, username:string, profilePic:string, description:string, birthDay:string, birthMonth:string, birthYear:string, posts:Post[], followers: User[], peopleFollowed: User[]) {
        
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.profilePic = profilePic;
        this.description = description;
        this.birthDay = birthDay;
        this.birthMonth = birthMonth;
        this.birthYear = birthYear;
        this.posts = posts;
        this.followers = followers;
        this.peopleFollowed = peopleFollowed;

    }
}
