import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss']
})
export class ProgressIndicatorComponent {
  @Input() imagePath!: string;
  
}
  

  
  

