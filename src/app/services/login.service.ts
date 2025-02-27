import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getinfo():Observable<Login[]> {
     return this.http.get<Login[]>('https://dummyjson.com/docs/auth/login')
  }

}
