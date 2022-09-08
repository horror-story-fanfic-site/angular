import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ReserpasswordService {

  authUrl: string = `${environment.baseUrl}/auth`;
  currentUser: User

  constructor(private http: HttpClient) { }

  loginNoPasssword(email: string , password: string | undefined = undefined): Observable<any> {
    const payload = {email:email, password:password};
    const res = this.http.post<any>(`${this.authUrl}/login`, payload, {headers: environment.headers, withCredentials: environment.withCredentials});
    res.subscribe((data) => {
      this.currentUser = data
    })
    return res;
  }
}
