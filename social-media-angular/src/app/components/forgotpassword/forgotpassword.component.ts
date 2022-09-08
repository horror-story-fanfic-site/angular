import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetpasswordService } from 'src/app/services/resetpassword.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('')
  })

  constructor(private resetPasswordService: ResetpasswordService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(e: any): void{
    e.preventDefault;
    this.resetPasswordService.loginNoPasssword(this.loginForm.value.email || "")
      .subscribe(
        (response) => {
          this.resetPasswordService.currentUser = response
          this.router.navigate(['resetpassword'])
        }
      )
  }
}
