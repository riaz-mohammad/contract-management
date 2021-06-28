import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { cardAnimation } from 'src/app/animations/card-animation';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  animations: [cardAnimation]
})
export class CardsComponent implements OnInit {
  @HostBinding('@cardAnimation')
  runAnimation(): boolean {
    return true;
  }
  constructor() {}

  ngOnInit(): void {}
}
