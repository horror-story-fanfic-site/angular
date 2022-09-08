import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import Profile from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private getProfileUrl = 'http://localhost:9002/user/peek';
  // private getProfileUrl = '/user/peek';

  constructor(private http: HttpClient) { }

  getProfile(): Observable<Profile> {

    return this.http.get<Profile>(this.getProfileUrl);
  }
}
