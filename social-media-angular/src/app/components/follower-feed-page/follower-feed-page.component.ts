import { ChangeDetectorRef, Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { repeat } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import Post from 'src/app/models/Post';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { LocalService } from 'src/app/services/local.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-follower-feed-page',
  templateUrl: './follower-feed-page.component.html',
  styleUrls: ['./follower-feed-page.component.css']
})
export class FollowerFeedPageComponent implements OnInit {

  postForm = new FormGroup({
    text: new FormControl(''),
    imageUrl: new FormControl('')
  }) 

  posts: Post[] = [];
  createPost:boolean = false;
  currentUser: User = this.app.currentUser;

  constructor(private postService: PostService, private authService: AuthService, private localStorage: LocalService, private app: AppComponent) { }

  ngOnInit(): void {
    this.postService.getFollowerPosts().subscribe(
      (response) => {
        this.posts = response
      }
    )
  }

}
