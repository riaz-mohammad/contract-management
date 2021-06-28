import { LogoutService } from '../../services/logout.service';
import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { modalAnimation } from '../../animations/modal-animation';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss'],
  animations: [modalAnimation],
})
export class LogoutModalComponent {
  constructor(private logoutService: LogoutService) {}

  public logout(value: boolean): void {
    if (value) {
      this.logoutService.logOut(true);
      return;
    }
    this.logoutService.showModal(false);
  }
}
