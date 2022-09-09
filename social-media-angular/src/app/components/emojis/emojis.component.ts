import { Component, OnInit } from '@angular/core';
import Post from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-emojis',
  templateUrl: './emojis.component.html',
  styleUrls: ['./emojis.component.css']
})
export class EmojisComponent implements OnInit {

  constructor(private postService: PostService) { }
  posts: Post[]=this.postService.postData;

  ngOnInit(): void {
    // this.postService.getAllPosts().subscribe(
    //   (response) => {
    //     this.posts = response
    //   }
    // )
    console.log(this.posts);
    console.log("Hello");
    // this.posts.forEach(element => {
    //   console.log(element);
    // });
  }
  
}
