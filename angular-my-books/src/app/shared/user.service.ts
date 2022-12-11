import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string
  public isLogged: Boolean;
  public user: User
  constructor(private http: HttpClient) {
    this.isLogged = false
  }
  register(user: User) {
    this.url = "http://localhost:3000/register"
    return this.http.post(this.url, user)
  }
  login(credentials: User) {
    this.url = "http://localhost:3000/login"
    return this.http.post(this.url, credentials)
  }
}
