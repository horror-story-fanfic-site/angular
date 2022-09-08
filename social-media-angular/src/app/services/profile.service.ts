import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import Profile from '../models/Profile';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private getProfileUrl = `${environment.baseUrl}/user/viewUser`;
  // private getProfileUrl = '/user/peek';

  constructor(private http: HttpClient) { }

  getProfile(): Observable<Profile> {

    return this.http.get<Profile>(`${this.getProfileUrl}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
