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
    peoplefollowed: User[];
}
