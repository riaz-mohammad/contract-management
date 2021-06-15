import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthorizationService } from './../../services/authorization.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  public formGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authorizationService: AuthorizationService
    ) { }

  public get emailError(): string {
    if (this.email.dirty && this.email.hasError('required')) {
       return 'Email is required!'
    }
    
    return this.email.hasError('email') ?
        'Email is not valid!' : ''
  }

  public get passwordError(): string {
    return this.password.dirty && this.password.hasError('required') ?
           'Password is required!' : ''
  }


  public get email(): FormControl {
    return this.formGroup.get('email') as FormControl;
  }
  
  public get password(): FormControl {
    return this.formGroup.get('password') as FormControl;
  }
  public onSubmit(): void {
    if (this.formGroup.valid) {
      this.authorizationService
        .saveUserCredentials(this.formGroup.value);
      this.router.navigate(['/home']);
    }
      

  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email   : ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }
}