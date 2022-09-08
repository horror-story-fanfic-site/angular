import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FollowersService } from 'src/app/services/followers.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  toFollowForm = new FormGroup({
    email: new FormControl(''),
  })

  constructor(private followersService : FollowersService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(e: any): void{
    e.preventDefault;
    // this.followersService.toFollowUsers(this.loginForm.value.email || "")
    //   .subscribe(
    //     (response) => {
    //       this.followersService.currentUser = response
    //       this.router.navigate(['toFollowUser'])
    //     }
    //   )
  }

}
