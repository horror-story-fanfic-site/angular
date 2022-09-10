import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  user: User;

  constructor(private auth: AuthService, private router: Router, private app: AppComponent) { }
  
  ngOnInit(): void {
    //This piece of code cost me 2 days.
    this.auth.checkSession(this.user);
  }

  ngOnDestroy() {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
