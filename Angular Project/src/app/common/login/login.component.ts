import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Check if user is already logged in
    if (localStorage.getItem("username")) {
      this.isLoggedIn = true;
    }
  }

  login() {
    if (this.username === "admin" && this.password === "bookhaven@123") {
      localStorage.setItem("username", this.username);
      this.isLoggedIn = true;
      alert("Welcome, Admin!");
      this.router.navigate(['/books']); // Redirect to books page
    } else {
      alert("Invalid Credentials! Please try again.");
    }
  }

  logout() {
    localStorage.removeItem("username");
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
