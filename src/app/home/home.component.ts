import { Observable } from 'rxjs';
import { LogoutService } from './../services/logout.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private router: Router) { }

  public goToRegistration(): void {
   this.router.navigate(['/home/registration']);
 }
}
  
  
  
