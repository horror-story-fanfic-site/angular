import { Component, Input, OnInit } from '@angular/core';
import Profile from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';
import User from 'src/app/models/User';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() profile: Profile;

  // inputs for forms
  usernameSubmit: string;
  descriptionSubmit: string;
  birthDaySubmit: number;
  birthMonthSubmit: number;
  birthYearSubmit: number;
  follow: string;

  currentUser: User;

  constructor(private profileService: ProfileService, private router: Router, private auth: AuthService ) { }

  ngOnInit(): void {
    this.auth.checkSession(this.currentUser);
    if( this.checkRoute() ) {
      this.profileService.getProfile().subscribe((profile) => (
        this.profile = profile));
    }else{

      //get the user who we want to see using the router
      let route = this.router.url;
      let routeSplit: string[] = route.split("/");
      console.log("find:", routeSplit[2]);
      
      this.profileService.getAnotherPersonsProfile(routeSplit[2]).subscribe((profile) => 
        this.profile = profile );
    }

  }
  
  updateUsernameSubmit() {
    console.log("in profile.ts:", this.usernameSubmit);
    this.profileService.updateUsername(this.usernameSubmit).subscribe((response) => (
      this.profile.username = this.usernameSubmit
    ));
    
    //after the submit, clear the form
    // this.usernameSubmit = "";
  }

  updateDescriptionSubmit() {

    this.profileService.updateDescription(this.descriptionSubmit).subscribe((response) => (
      this.profile.description = this.descriptionSubmit
    ));

    //after the submit, clear the form
    // this.descriptionSubmit = "";
  }
  
  updateDOBSubmit() {

    this.profileService.updateDOB(
      `${this.birthDaySubmit}`,
      `${this.birthMonthSubmit}`,
      `${this.birthYearSubmit}`
    ).subscribe((response) => (
      console.log("birthday changed")
    ))
  }
  
  checkRoute(): boolean {
    return this.router.url === "/profile";
  }

  addFollow() {
    console.log(this.profile.username);

    // this.profileService.followPerson("KRichy123").subscribe((data) => (
    this.profileService.followPerson(this.profile.username).subscribe((data) => (
    //this.profileService.followPerson("Username").subscribe((data) => (
      console.log(data.username)
    ))
  }

}