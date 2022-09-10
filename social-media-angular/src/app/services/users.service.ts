import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userUrl: string = `${environment.baseUrl}/user`;
  
  constructor(private http: HttpClient) { }

  getAllUserNames(): Observable<String[]>{
    return this.http.post<String[]>(`${this.userUrl}/getAllUsernames`, {headers: environment.headers, withCredentials: environment.withCredentials})
  }
}
