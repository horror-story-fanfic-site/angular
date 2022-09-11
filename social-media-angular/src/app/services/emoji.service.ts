import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Emoji from '../models/Emoji';
import { Emojis } from '../mock-emojis';
import PostEmoji from '../models/PostEmoji';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  postUrl: string = `${environment.baseUrl}/post`
  emojis = Emojis;
  emoji: Emoji;
  postEmojis: any;

  constructor(private http: HttpClient){}

  getPostEmojis(emojiId: number): Observable<PostEmoji[]> {
    this.postEmojis = this.http.post<PostEmoji[]>(`${this.postUrl}/getEmojis`, emojiId ,{headers: environment.paramHeaders, withCredentials: environment.withCredentials})
    return this.postEmojis;
  }


  followUrl: string = `${environment.baseUrl}/post`;

  constructor(private http: HttpClient) { }

  submitEmoji(postId: number, emojiId: number){
    console.log(postId+" "+emojiId);
    const payload = {postId: postId, emojiId: emojiId};
    return this.http.post<any>(`${this.followUrl}/likePost`,payload, {headers: environment.headers, withCredentials: environment.withCredentials});
    //return this.http.post<String[]>(`${this.userUrl}/getAllUsernames`, {headers: environment.headers, withCredentials: environment.withCredentials})
  }
}


