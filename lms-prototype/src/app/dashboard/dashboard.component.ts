import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // username: string = 'John'; // You can get this from a service after login
  username: string;

  //constructor(private router: Router) {}
  constructor(private router: Router, private userService: UserService) {
    this.username = this.userService.username;
  }

  logout(): void {
    // Here you can implement your logout logic, for now, let's just navigate back to login
    this.router.navigate(['/login']);
  }
}
