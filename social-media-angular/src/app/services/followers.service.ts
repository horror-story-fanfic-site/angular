import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  followUrl: string = `${environment.baseUrl}/followers`;
  toFollowUser: User;//subject to change depending on dtos
  followList: Array<string>;//subject to chandge depending on dtos 

  constructor(private http: HttpClient) { }

  follow(username: string): Observable<any> {
    const payload = {username:username};
    const res = this.http.post<any>(`${this.followUrl}/follow`,payload, {headers: environment.headers, withCredentials: environment.withCredentials});
    res.subscribe((data) => {
      this.toFollowUser = data
    })
    return res;
  }

  list() : Observable<any> {
    const res = this.http.get<any>(`${this.followUrl}/list`,{headers: environment.headers, withCredentials: environment.withCredentials});
    res.subscribe((data) =>{
      this.followList = data
    })
    return res;
  }
}
