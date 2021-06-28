import { NavigationService } from './services/navigation.service';
import { Observable } from 'rxjs';
import { LogoutService } from './services/logout.service';
import { Component } from '@angular/core';
import { routeAnimation } from './animations/route.animation';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimation]
})
export class AppComponent {
  constructor(public logoutService: LogoutService,
    public route: Router,
    public navigationService: NavigationService) { }
  public showModal$: Observable<boolean> = this.logoutService.showModal$;

  public animateRoute(outlet: RouterOutlet): string {
    
    return outlet && outlet.activatedRouteData &&
              outlet.activatedRouteData.animation;
  }

  
    
}
