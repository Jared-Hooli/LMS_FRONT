import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:8081/api/courses/';

  constructor(private http: HttpClient) {}

  getCourses(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${userId}`);
  }
}

