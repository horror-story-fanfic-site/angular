import { Injectable } from '@angular/core';
import Emoji from '../models/Emoji';
import { Emojis } from '../mock-emojis';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  emojis = Emojis;

}
