import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import Profile from '../models/Profile';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private getProfileUrl = `${environment.baseUrl}/user/viewUser`;
  // private getProfileUrl = '/user/peek';

  private updateUsernameUrl = `${environment.baseUrl}/user/updateusername`;

  constructor(private http: HttpClient) { }

  getProfile(): Observable<Profile> {

    return this.http.get<Profile>(`${this.getProfileUrl}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  updateUsername(newUsername: string) {
    console.log("in profile service.ts: ", newUsername)

    let params = new HttpParams().set('newUsername', newUsername);

    return this.http.put<string>(`${this.updateUsernameUrl}`, params, {headers: environment.paramHeaders, withCredentials: environment.withCredentials} );
  }

}
