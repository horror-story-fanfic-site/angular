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
  profilePicSubmit: string;
  showForms: boolean = false;

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
  
  // isUpdated: boolean = false;
  updateUsernameSubmit() {
  console.log("in profile.ts:", this.usernameSubmit);
    this.profileService.updateUsername(this.usernameSubmit).subscribe((response) => {
      this.profile.username = this.usernameSubmit;
      // this.isUpdated = true;
    });
    
    // //reset page on submit form
    // if(this.isUpdated){
    // this.redirectBackToProfile();
    // // this.router.navigate(['profile']);
    // this.isUpdated = false;
    // }
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
    ).subscribe((response) => {
      this.profile.birthDay = ""+this.birthDaySubmit;
      this.profile.birthMonth = ""+this.birthMonthSubmit;
      this.profile.birthYear = ""+this.birthYearSubmit;
  })
  }
  
  checkRoute(): boolean {
    return this.router.url === "/profile";
  }

  addFollow() {
    console.log(this.profile.username);

    // this.profileService.followPerson("KRichy123").subscribe((data) => (
    this.profileService.followPerson(this.profile.username).subscribe((data) => (
      console.log(data.username)
    ))
  }

  updateProfilePicSubmit() {
    //add functionality here
    this.profilePicSubmit

    this.profileService.updateProfilePic(this.profilePicSubmit).subscribe((response) =>(
      this.profile.profilePic = this.profilePicSubmit
    ))
  }

  showChangeForms() {
    // console.log(this.showForms);
    this.showForms = !this.showForms;
  }

  // redirectBackToProfile() {
  //   // this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  //   // this.router.navigate(['profile']));
  // }
}
