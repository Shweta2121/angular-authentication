import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  isLoading: boolean = false;
  signUpForm: FormGroup;

  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.signUpForm = this.fb.group({
      user_firstname: ['', Validators.required],
      user_email: ['', [Validators.required, Validators.email]],
      user_phone: ['', Validators.required],
      user_password: ['', Validators.required],
      user_lastname: ['', Validators.required],
      user_city: ['', Validators.required],
      user_zipcode: ['', Validators.required],
    });
  }

  submitHandler(): void {
    if (this.signUpForm.valid) {
      this.isLoading = true;
      this.authService.signup(this.signUpForm.value).subscribe(user => {
        console.log(user)
        if(user.status){
          this.isLoading = false;
          this.signUpForm.reset();
          this.router.navigate(['/login']);
        }else{
          this.toastr.error('User already exist');
        }
      });
    } else {
      this.OnSubmitValidation();
    }
  }

private OnSubmitValidation() {
    Object.keys(this.signUpForm.controls).forEach(field => {
      const control = this.signUpForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
}

redirectTologin(){
    this.router.navigate(['/login'])
}
}
