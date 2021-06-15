import { AuthorizationService, CREDENTIALS } from './authorization.service';
import { Injectable } from '@angular/core';
import {  CanActivate, Router, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  
  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) { }
  
  canActivate(): boolean | UrlTree {
    return this.authorizationService
        .verifyUserCredentials(CREDENTIALS) ? true : this.router.parseUrl('/login')
  }
  
}
