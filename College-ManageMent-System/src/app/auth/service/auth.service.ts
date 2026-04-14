import { Injectable } from '@angular/core';
import { IRegister } from '../models/iregister';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../models/ilogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }
  register(user: IRegister): Observable<any> {
    return this.httpClient.post("/api/auth/signup", user);
  }
  login(user: ILogin): Observable<any> {
    return this.httpClient.post("/api/auth/login", user, { responseType: 'text' });
  }
}