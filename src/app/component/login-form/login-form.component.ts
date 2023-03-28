import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  isLoading: boolean = false;
  loginForm: FormGroup;
  error: string;

  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      user_email: ['', [Validators.required, Validators.email]],
      user_password: ['', Validators.required],
    });
  }

  /** * Handle login form submission*/
  async submitHandler() {
    this.isLoading = true;
      if (this.loginForm.valid) {
         this.authService.login(this.loginForm.value).subscribe(async state => {
          this.isLoading = false;
          if (state.status) {
            this.router.navigate(['/dashboard']);
          }
          else{
            this.toastr.error('User not found');
          }
         });
      }
      else {
        this.OnSubmitValidation();
      }
}

private OnSubmitValidation() {
    Object.keys(this.loginForm.controls).forEach(field => {
      const control = this.loginForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
}

redirectToSignup(){
    this.router.navigate(['/signup'])
}
}
