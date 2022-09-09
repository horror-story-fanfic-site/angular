import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostFeedPageComponent } from './components/post-feed-page/post-feed-page.component';
import User from './models/User';
import { AuthService } from './services/auth.service';
import { LocalService } from './services/local.service';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-media-angular';

  currentUser: User = this.auth.currentUser;
  constructor(private auth: AuthService, private localStorage: LocalService, private router: Router) { }

  ngOnInit(): void{
    this.checkSession();

  }

  checkSession = (e: void) => {

    if(this.currentUser == undefined){
      let myObj = JSON.parse(this.localStorage.getData('user') || "{}");
      if(myObj == undefined || null){
        this.router.navigate(["login"]);
      }
      this.currentUser = myObj;
      this.auth.login(this.currentUser.email, this.currentUser.password);
      
    } else{
      this.auth.login(this.currentUser.email, this.currentUser.password);
      
    }
  }



}
