import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Searchlist } from '../interfaces/searchlist';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUserlist():Observable<Searchlist[]>{
 return this.http.get<Searchlist[]>('https://dummyjson.com/users')
  }

  addUser(user:any):Observable<Searchlist[]>{
    return this.http.post<Searchlist[]>('https://dummyjson.com/users/add',user)}

  updateUser(userId: number, updatedUser: any): Observable<any> {
    return this.http.put<Searchlist[]>(`https://dummyjson.com/users/${userId}`, updatedUser);
  }
  getUserByIda(userId: number): Observable<Searchlist[]> {
    return this.http.get<Searchlist[]>(`https://dummyjson.com/users/${userId}`);
  }
  deleteUser(id:any):Observable<Searchlist[]>{
    return this.http.delete<Searchlist[]>(`https://dummyjson.com/users/${id}`)
  }




  private storageKey = 'users';



  // إرجاع جميع المستخدمين من LocalStorage
  getUsers():any[] {
    return JSON.parse(localStorage.getItem("users") || "[]");
  }
  // إضافة مستخدم جديد
  addUsers(user:any): void {
    let users = this.getUsers();
    user.id = users.length + 1; // id
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  // حذف مستخدم بناءً على ID
  deleteUsers(userId: number): void {
    let users = this.getUsers().filter(user => user.id !== userId);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  // الحصول على بيانات مستخدم معين
  getUserById(userId: number) {
    const users = this.getUsers();
    return users.find((user: any) => user.id === userId);
  }

  // ✅ تحديث بيانات المستخدم
  updateUsers(updatedUser: any) {
    const users = this.getUsers();
    const index = users.findIndex((user: any) => user.id === updatedUser.id);

    if (index !== -1) {
      users[index] = updatedUser; // تحديث البيانات
      localStorage.setItem(this.storageKey, JSON.stringify(users)); // حفظ البيانات
    }
  }










}
