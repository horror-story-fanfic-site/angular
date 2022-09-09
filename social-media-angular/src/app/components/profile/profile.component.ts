import { Component, Input, OnInit } from '@angular/core';
import Profile from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() profile: Profile;

  // inputs for forms
  usernameSubmit: string;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {

    // this.profileService.getProfile();
    this.profileService.getProfile().subscribe((profile) => (
      this.profile = profile));

  }
  
  updateUsernameSubmit() {
    console.log("in profile.ts:", this.usernameSubmit);
    this.profileService.updateUsername(this.usernameSubmit).subscribe((response) => (
      console.log("subscribed")//todo: change to show new name on profile
    ));
    
    //after the submit, clear the form
    this.usernameSubmit = "";
  }
}
