import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockBackendService {

  constructor() { }

  login(username: string, password: string): Observable<any> {
    // Simulate backend authentication logic
    if (username === 'user@infowaygroup.com' && password === 'India@123') {
      return of({ role: 'user' });
    } else if (username === 'admin@infowaygroup.com' && password === 'Admin@123') {
      return of({ role: 'admin' });
    } else {
      return of(null); // Invalid credentials
    }
  }
}