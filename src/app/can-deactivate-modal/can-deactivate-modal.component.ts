import { NavigationService } from '../services/navigation.service';
import { Component } from '@angular/core';

import { modalAnimation } from '../animations/modal-animation';


@Component({
  selector: 'app-can-deactivate-modal',
  templateUrl: './can-deactivate-modal.component.html',
  styleUrls: ['./can-deactivate-modal.component.scss'],
  animations: [modalAnimation],
})
export class CanDeactivateModalComponent{
  constructor(private navigationService: NavigationService) {}
  confirmOrRejectNavigation(value: boolean): void {
    this.navigationService.navigate(value);
  }
}
