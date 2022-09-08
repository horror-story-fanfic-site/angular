import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FollowersService } from 'src/app/services/followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(private followersService : FollowersService, private router : Router) { }

  ngOnInit(): void {
  }



  addTofollowList(){
    this.followersService.follow().subscribe

  }
}
