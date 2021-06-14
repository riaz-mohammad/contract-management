import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public buttonsState!: boolean;
  constructor(private router: Router) {}
  public showButtons(): void {
    this.buttonsState = !this.buttonsState;
    // this.router.navigate(['home/registration']);
  }

  public changeRoute(path: string): void {
    this.buttonsState = !this.buttonsState;
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    console.log('Initiated...');
  }
}
