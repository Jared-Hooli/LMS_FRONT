import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
        (response) => {
          console.log("username: ", this.username);
          console.log("password: ", this.password);
          console.log("response ", response);
          if (response.returnCode > 1) { // response.return_code
            // Authentication successful, redirect to dashboard
            this.router.navigate(['/dashboard']);
          } else {
            // Invalid credentials
            this.errorMessage = 'Invalid username or password.';
          }
        },
        (error) => {
          console.error('Error:', error);
          this.errorMessage = 'An error occurred while logging in.';
        }
      );
  }

  clear() {
    this.username = '';
    this.password = '';
    this.errorMessage = '';
  }
}
