import { NavigationService } from './navigation.service';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DeactivateRoute } from '../types/types';



@Injectable({
  providedIn: 'root',
})
export class CanDeactivateRouteGuard implements CanDeactivate<DeactivateRoute> {
  constructor(private navigationService: NavigationService) { }

  canDeactivate( component: DeactivateRoute): Observable<boolean> | boolean {
    return component.formNoSubmitted() ? this.navigationService.showModal(true) : true;
  }
}
