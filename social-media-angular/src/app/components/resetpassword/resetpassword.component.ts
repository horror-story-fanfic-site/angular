import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetpasswordService } from 'src/app/services/resetpassword.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  passwordForm = new FormGroup({
    newPassword: new FormControl(''),
    confirmPassword: new FormControl('')
  })

  constructor(private resetPasswordService: ResetpasswordService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(e: any): void{
      e.preventDefault;
      this.resetPasswordService.resetpassword(this.passwordForm.value.newPassword || '')
        .subscribe(
          (response) => {
            this.resetPasswordService.currentUser = response
            this.router.navigate(['login'])
          }
        )
  }

}
