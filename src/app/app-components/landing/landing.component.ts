import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { buttonAnimation, fadeOut, titleAnimation } from 'src/app/animations/landing-component-animation';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [buttonAnimation, titleAnimation, fadeOut],
})
export class LandingComponent {
  constructor(private router: Router) {}

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
