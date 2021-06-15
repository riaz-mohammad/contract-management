import { Observable } from 'rxjs';
import { LogoutService } from './services/logout.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public logoutService: LogoutService) {}
  public showModal$: Observable<boolean> = this.logoutService.showModal$;
}
