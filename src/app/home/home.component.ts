import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public showForm!: boolean;
  constructor() { }
  

  public toggleFormVisibility(): void {
    this.showForm = !this.showForm;
  }
  ngOnInit(): void {
    console.log('Initiated...')
  }

}
