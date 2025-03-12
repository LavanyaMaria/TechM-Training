import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  status: boolean = false;
  loginmenu: string = 'Login';

  constructor(private router: Router) {}

  ngOnInit() {
    const username = localStorage.getItem('username');
    if (username) {
      this.status = true;
      this.loginmenu = `Welcome, ${username} | Logout`;
    }
  }

  loginhandler() {
    if (this.status) {
      localStorage.removeItem('username');
      this.status = false;
      this.loginmenu = 'Login';
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
