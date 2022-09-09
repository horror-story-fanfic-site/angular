import { Component, Input, OnInit } from '@angular/core';
import Profile from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

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

  constructor(private profileService: ProfileService, private router: Router ) { }

  ngOnInit(): void {

    //if( this.checkRoute() ) {
      this.profileService.getProfile().subscribe((profile) => (
        this.profile = profile));
    //}else{
      //add service to go to another profile
    //}

  }
  
  updateUsernameSubmit() {
    console.log("in profile.ts:", this.usernameSubmit);
    this.profileService.updateUsername(this.usernameSubmit).subscribe((response) => (
      this.profile.username = this.usernameSubmit
    ));
    
    //after the submit, clear the form
    this.usernameSubmit = "";
  }

  updateDescriptionSubmit() {

    this.profileService.updateDescription(this.descriptionSubmit).subscribe((response) => (
      this.profile.description = this.descriptionSubmit
    ));

    //after the submit, clear the form
    this.descriptionSubmit = "";
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
    // this.profileService.followPerson("KRichy123").subscribe((data) => (
    this.profileService.followPerson(this.follow).subscribe((data) => (
    //this.profileService.followPerson("Username").subscribe((data) => (
      console.log(data.username)
    ))
  }

}
