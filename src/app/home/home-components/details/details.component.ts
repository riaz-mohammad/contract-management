import { Advisor, Client } from './../../../types/types';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  @Input() details!: Advisor | Client;
  @Output() closeDetails: EventEmitter<void> = new EventEmitter();
  constructor() {}

  

  public close(): void {
    this.closeDetails.emit();
  }

  
}
