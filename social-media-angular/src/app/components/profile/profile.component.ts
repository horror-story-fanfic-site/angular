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

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {

    // this.profileService.getProfile();
    this.profileService.getProfile().subscribe((profile) => (
      this.profile = profile));

  }
  
}

console.log("In profile component");