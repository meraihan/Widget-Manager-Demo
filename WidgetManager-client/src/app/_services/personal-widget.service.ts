import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PersonalWidget } from '../personal';

@Injectable({
  providedIn: 'root'
})
export class PersonalWidgetService {

  private baseURL = "http://localhost:8080/api/personalWdgt";

  constructor(private httpClient: HttpClient) { }
  
  getPersonalWidgetList(): Observable<PersonalWidget[]>{
    return this.httpClient.get<PersonalWidget[]>(`${this.baseURL}`);
  }

  createPersonalWidget(personalWidget: PersonalWidget): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, personalWidget);
  }

  getPersonalWidgetById(id: number): Observable<PersonalWidget>{
    return this.httpClient.get<PersonalWidget>(`${this.baseURL}/${id}`);
  }

  updatePersonalWidget(id: number, employee: PersonalWidget): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deletePersonalWidget(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
