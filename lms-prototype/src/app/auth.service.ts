import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/api/login';

  constructor(private http: HttpClient, private userService: UserService) {}

  login(userid: string, password: string): Observable<any> {
    const body = { userId: userid, password: password };
    return this.http.post<any>(this.apiUrl, body).pipe(
      tap(response => {
        if (response.returnCode > 1) {
          this.userService.username = response.userName;
          this.userService.userid = userid; // Assume the username is the email
        }
      })
    );
  }
}
