import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Emoji from '../models/Emoji';
import { Emojis } from '../mock-emojis';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  emojis = Emojis;

  followUrl: string = `${environment.baseUrl}/post`;

  constructor(private http: HttpClient) { }

  submitEmoji(postId: number, emojiId: number){
    console.log(postId+" "+emojiId);
    const payload = {postId: postId, emojiId: emojiId};
    return this.http.post<any>(`${this.followUrl}/likePost`,payload, {headers: environment.headers, withCredentials: environment.withCredentials});
    //return this.http.post<String[]>(`${this.userUrl}/getAllUsernames`, {headers: environment.headers, withCredentials: environment.withCredentials})
  }
}
