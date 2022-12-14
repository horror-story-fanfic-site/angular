import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Post from '../models/Post';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl: string = `${environment.baseUrl}/post`

  postData: any;

  testData:any;

  constructor(private http: HttpClient, private localStore: LocalService) { }

  

  getAllPosts(): Observable<Post[]> {
    this.postData = this.http.get<Post[]>(`${this.postUrl}`, {headers: environment.headers, withCredentials: environment.withCredentials})
    return this.postData;
  }

  getFollowerPosts(): Observable<Post[]> {
    console.log("in get follower post")
    this.testData = this.http.get<Post[]>(`${this.postUrl}/followposts`, {headers: environment.headers, withCredentials: environment.withCredentials})
    return this.testData;
  }

  upsertPost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.postUrl}`, post, {headers: environment.headers, withCredentials: environment.withCredentials})
  }

  ngOnInit(): void{ 
   
  }
}
