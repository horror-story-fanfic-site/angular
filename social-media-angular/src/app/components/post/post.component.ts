import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Emojis } from 'src/app/mock-emojis';
import Post from 'src/app/models/Post';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { FollowersService } from 'src/app/services/followers.service';
import { PostService } from 'src/app/services/post.service';

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

  constructor(private postService: PostService, private authService: AuthService, private followService: FollowersService) { }

  ngOnInit(): void {
  }

  followUser(){
    console.log(this.post.author.username)
    this.followService.follow(this.post.author.username);
  }

  
  toggleReplyToPost = () => {
    this.replyToPost = !this.replyToPost
  }

  toggleEmojis = () => {
    this.emojiBox = !this.emojiBox;
  }

  submitReply = (e: any) => {
    e.preventDefault()
    let newComment = new Post(0, this.commentForm.value.text || "", "", this.authService.currentUser, [], this.authService.currentUser.profilePic || "")
    this.postService.upsertPost({...this.post, comments: [...this.post.comments, newComment]})
      .subscribe(
        (response) => {
          this.post = response
          this.toggleReplyToPost()
        }
      )
  }

}
