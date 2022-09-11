import { Injectable } from '@angular/core';
import Emoji from '../models/Emoji';
import { Emojis } from '../mock-emojis';
import PostEmoji from '../models/PostEmoji';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Post from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  postUrl: string = `${environment.baseUrl}/post`;
  emojis = Emojis;
  emoji: Emoji;
  postEmojis: any;
  post: Post;

  constructor(private http: HttpClient) { }


  getPostEmojis(postId: number): Observable<PostEmoji[]> {

    let params = new HttpParams().set('postId', postId)

    this.postEmojis = this.http.post<PostEmoji[]>(`${this.postUrl}/getEmojis`, params ,{headers: environment.paramHeaders, withCredentials: environment.withCredentials})
    return this.postEmojis;
  }

  submitEmoji(postId: number, emojiId: number){

    let params = new HttpParams()
    .set('emojiId', emojiId)
    .set('postId', postId);

    console.log(postId+" "+emojiId);
    // const payload = {postId: postId, emojiId: emojiId};
    return this.http.post<string>(`${this.postUrl}/likePost`, params, {headers: environment.paramHeaders, withCredentials: environment.withCredentials});
    //return this.http.post<String[]>(`${this.userUrl}/getAllUsernames`, {headers: environment.headers, withCredentials: environment.withCredentials})
  }
}


