import { error } from '../../animations/registration-error-animation';
import { Component, HostBinding, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthorizationService } from './../../services/authorization.service';
import { buttonAnimation, fadeOut } from "src/app/animations/landing-component-animation";
import { loginAnimation } from "src/app/animations/login-animation";
import { Subject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [buttonAnimation, loginAnimation, error],
})
export class LoginComponent implements OnInit {
  @HostBinding('@loginAnimation')
  get runAnimation(): boolean {
    return true;
  }
  private showLoading: Subject<boolean> = new Subject();
  public showLoading$ = this.showLoading.asObservable();

  public formGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authorizationService: AuthorizationService
  ) {}

  public get emailError(): boolean {
    return (this.email.dirty && this.email.hasError('email')) ? true : false;
  }
    

  

  public get email(): FormControl {
    return this.formGroup.get('email') as FormControl;
  }

  
  public onSubmit(): void {
    if (this.formGroup.valid) {
      this.authorizationService.saveUserCredentials(this.formGroup.value);
      // this.router.navigate(['/home']);
      this.showLoading.next(true);
    }
  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}