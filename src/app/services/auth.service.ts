import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

userData:any=null


  constructor(private http:HttpClient,private router:Router) { }

saveUserdata(){
  let encodeToken = JSON.stringify(localStorage.getItem('token'));
  let decodeToken =jwtDecode(encodeToken)
  this.userData=decodeToken
  console.log(this.userData)
}

logout(){
  localStorage.removeItem('token')
  this.userData=null
  this.router.navigateByUrl('/login')
}

  login(user:any):Observable<any>{
    return this.http.post('https://dummyjson.com/auth/login',user)}


}
