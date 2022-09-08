import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  authUrl: string = `${environment.baseUrl}/auth`;
  currentUser: User

  constructor(private http: HttpClient) { }

  loginNoPasssword(email: string ): Observable<any> {
    const payload = {email:email};
    const res = this.http.post<any>(`${this.authUrl}/forgottenpassword`, payload, {headers: environment.headers, withCredentials: environment.withCredentials});
    res.subscribe((data) => {
      this.currentUser = data
    })
    return res;
  }

  resetpassord(password: string): Observable<any> {
    const payload = {password:password};
    const res = this.http.post<any>(`${this.authUrl}/resetuserpassword`, payload, {headers: environment.headers, withCredentials: environment.withCredentials});
    res.subscribe((data) => {
      this.currentUser = data
    })
    return res;
  }
}
