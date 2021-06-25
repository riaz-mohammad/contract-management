import { LogoutService } from './../../services/logout.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent{
  constructor(public router: Router, private logoutService: LogoutService) {}
  public buttonsState!: boolean;
  
  public showButtons(): void {
    this.buttonsState = !this.buttonsState;
  }

  public changeRoute(path: string): void {
    this.buttonsState = !this.buttonsState;
    this.router.navigate([path]);
  }

  public logout(): void {
    this.logoutService.showModal(true);
  }

  public  path(path: string): boolean {
    return this.router.url === path;
  }
  
}
