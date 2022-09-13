import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Emojis } from 'src/app/mock-emojis';
import Emoji from 'src/app/models/Emoji';
import Post from 'src/app/models/Post';
import PostEmoji from 'src/app/models/PostEmoji';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { EmojiService } from 'src/app/services/emoji.service';
import { FollowersService } from 'src/app/services/followers.service';
import { PostService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  commentForm = new FormGroup({
    text: new FormControl(''),
  })

  @Input('post') post: Post
  replyToPost: boolean = false;
  emojiBox: boolean = false;
  emojis = Emojis
  postemoji: PostEmoji[];
  emoji: Emoji;

  constructor(private postService: PostService, private authService: AuthService, private profileService: ProfileService, private emojiService: EmojiService) { }

  ngOnInit(): void {
    console.log(this.postemoji);
    this.getEmojis();
  }

  followUser(){
    console.log(this.post.author.username)
    this.profileService.followPerson(this.post.author.username).subscribe();
  }

  
  toggleReplyToPost = () => {
    this.replyToPost = !this.replyToPost
  }

  toggleEmojis = () => {
    this.emojiBox = !this.emojiBox;
  }

  submitReply = (e: any) => {
    e.preventDefault()
    let newComment = new Post(0, this.commentForm.value.text || "", "", this.authService.currentUser, [], this.authService.currentUser.profilePic || "", [])
    this.postService.upsertPost({...this.post, comments: [...this.post.comments, newComment]})
      .subscribe(
        (response) => {
          this.post = response
          this.toggleReplyToPost()
        }
      )
  }
  
  getEmojis(){
    this.emojiService.getPostEmojis(this.post.id).subscribe((response) =>(
      this.postemoji = response
    ))
  }

  submitEmoji(postId: number, emojiId: number){
    this.emojiService.submitEmoji(postId,emojiId).subscribe((response) =>(
      this.getEmojis()
      ))
    
  }
}
