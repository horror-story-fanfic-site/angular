import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FollowersService } from 'src/app/services/followers.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  // toFollowForm = new FormGroup({
  //   userName: new FormControl(''),
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
    
  // })

  constructor(private followersService : FollowersService, private router : ActivatedRoute) { }
  public isFollow: boolean = false;
  ngOnInit(): void {
  }

  onClick(): void{
    const username = String(this.router.snapshot.paramMap.get('username'))
    this.isFollow = !this.isFollow;
<<<<<<< HEAD
    
=======
    this.followersService.follow(username)
      .subscribe((response) =>{
          this.followersService.toFollowUser = response;
      });

>>>>>>> f56204f512a4f79d00cc12f3f8240a2e702343b6
  }




  onSubmit(e: any): void{
    e.preventDefault;
    //  this.followersService.follow(this.toFollowForm.value.userName, this.toFollowForm.value.firstName, this.toFollowForm.value.lastName)
    //   .subscribe(
    //     (response) => {
    //       this.followersService.toFollowUser = response
    //       this.router.navigate(['toFollowUser'])
    //     }
    //   )
  }

}
