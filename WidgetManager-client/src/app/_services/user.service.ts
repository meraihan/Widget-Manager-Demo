import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URLs = 'http://localhost:8080/api/publicWdgt/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = 'http://localhost:8080/api/publicWdgt/';

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URLs + 'all', { responseType: 'text' });
  }

  // getUser(): Observable<any> {
  //   return this.http.get(API_URL + 'user', { responseType: 'text' });
  // }

  getAuthor(): Observable<any> {
    return this.http.get(API_URLs + 'author', { responseType: 'text' });
  }

  getAdmin(): Observable<any> {
    return this.http.get(API_URLs + 'admin', { responseType: 'text' });
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.API_URL}`, user);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.API_URL}/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`, { responseType: 'text' });
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }
}
