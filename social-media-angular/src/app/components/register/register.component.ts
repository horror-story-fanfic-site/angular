import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
<<<<<<< HEAD

    username: new FormControl('')

=======
    userName: new FormControl('')
>>>>>>> 9d90448fb3401dcf834742d5d39334e0cfd86fb5
  })
  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(e: any): void {
    e.preventDefault()
<<<<<<< HEAD

    this.authService.register(this.registerForm.value.firstName || "", this.registerForm.value.lastName || "", this.registerForm.value.email || "", this.registerForm.value.password || "", this.registerForm.value.username || "")

=======
    this.authService.register(this.registerForm.value.firstName || "", this.registerForm.value.lastName || "", this.registerForm.value.email || "", this.registerForm.value.password || "",this.registerForm.value.userName || "")
>>>>>>> 9d90448fb3401dcf834742d5d39334e0cfd86fb5
      .subscribe(
        (response) => {
          this.router.navigate(['login'])
        }
      )
  }
  
}
