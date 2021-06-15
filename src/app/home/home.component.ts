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
  public buttonsState!: boolean;
  public showModal$: Observable<boolean> = this.logoutService.showModal$;
  constructor(
    private router: Router,
    private logoutService: LogoutService) { }
  
  public showButtons(): void {
    this.buttonsState = !this.buttonsState;
    // this.router.navigate(['home/registration']);
  }
  
  public showLogoutModal(): void {
    this.logoutService.showModal(true);
  }
  public changeRoute(path: string): void {
    this.buttonsState = !this.buttonsState;
    this.router.navigate([path]);
  }

  
}
